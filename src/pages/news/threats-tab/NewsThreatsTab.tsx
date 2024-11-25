import { useState, useEffect } from "react";

// components
import { Table } from "@/components";
import type { TableColumnType } from "@/components";

// service
import { feedlyService } from "@/services";

// redux
import { useAppSelector } from "@/redux";
import { selectAccessToken } from "@/redux/auth";

// constants
import {
  DEFAULT_MALWARE_COUNT,
  DEFAULT_ACTOR_COUNT,
} from "./NewsThreatsTab.constants";

// types
import type { FeedlyThreat } from "@/types";
import type { NewsThreatsTabProps } from "./NewsThreatsTab.types";

// styles
import { useStyles } from "./NewsThreatsTab.styles";

const NewsThreatsTab = ({
  onViewMalware,
  onViewActor,
}: NewsThreatsTabProps) => {
  const [actorExpandedRows, setActorExpandedRows] = useState<number[]>([]);
  const [malwareExpandedRows, setMalwareExpandedRows] = useState<number[]>([]);
  const [threats, setThreats] = useState<FeedlyThreat[]>([]);
  const [loadingThreats, setLoadingThreats] = useState<boolean>(false);

  const accessToken = useAppSelector(selectAccessToken);

  const styles = useStyles();

  const fetchTtps = async () => {
    setLoadingThreats(true);
    try {
      const ttps = await feedlyService.getTTPs({
        token: accessToken,
        type: "Last7Days",
      });
      setThreats(ttps);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingThreats(false);
    }
  };

  useEffect(() => {
    if (accessToken) {
      fetchTtps();
    }
  }, [accessToken]);

  const columns: TableColumnType[] = [
    {
      className: styles.threatsTableTechniquesColumn,
      title: "TECHNIQUES",
      dataIndex: "ttp",
      render: ({ name }) => name,
    },
    {
      title: "MITRE ID",
      dataIndex: "ttp",
      render: ({ mitreId }) => mitreId,
    },
    {
      title: "ARTICLES",
      dataIndex: "nArticles",
      sorter: true,
    },
    {
      title: "DELTA",
      dataIndex: "delta",
      sorter: true,
    },
    {
      title: "ACTORS",
      dataIndex: "actors",
      render: (actors: FeedlyThreat["actors"], __, idx) => {
        const getActorsToDisplay = () => {
          if (actorExpandedRows.includes(idx)) return actors;
          return actors.slice(0, DEFAULT_ACTOR_COUNT);
        };

        const onLoadMoreActors = () => {
          setActorExpandedRows((rows) => rows.concat(idx));
        };

        const displayActors = getActorsToDisplay();

        return (
          <ul>
            {displayActors.map(({ id, label }) => (
              <li
                key={`actor-${id}`}
                className={styles.listItem}
                onClick={() => onViewActor?.(id)}
              >
                {label}
              </li>
            ))}
            {actors.length > displayActors.length && (
              <li
                className={styles.loadMore}
                key="load-more"
                onClick={onLoadMoreActors}
              >
                {actors.length - displayActors.length} more
              </li>
            )}
          </ul>
        );
      },
    },
    {
      title: "MALWARE",
      dataIndex: "malwares",
      render: (malwares: FeedlyThreat["malwares"], __, idx) => {
        const getMalwaresToDisplay = () => {
          if (malwareExpandedRows.includes(idx)) return malwares;
          return malwares.slice(0, DEFAULT_MALWARE_COUNT);
        };

        const onLoadMoreMalwares = () => {
          setMalwareExpandedRows((rows) => rows.concat(idx));
        };

        const displayMalwares = getMalwaresToDisplay();

        return (
          <ul>
            {displayMalwares.map(({ id, label }) => (
              <li
                key={`malware-${id}`}
                className={styles.listItem}
                onClick={() => onViewMalware?.(id)}
              >
                {label}
              </li>
            ))}
            {malwares.length > displayMalwares.length && (
              <li
                className={styles.loadMore}
                key="load-more"
                onClick={onLoadMoreMalwares}
              >
                {malwares.length - displayMalwares.length} more
              </li>
            )}
          </ul>
        );
      },
    },
  ];

  return (
    <div className={styles.root}>
      <Table
        className={styles.threatsTableView}
        rowKey="id"
        size="middle"
        columns={columns}
        bordered={false}
        dataSource={threats.map((ttp) => ({ id: ttp.ttp.id, ...ttp }))}
        loading={loadingThreats}
      />
    </div>
  );
};

export { NewsThreatsTab };
