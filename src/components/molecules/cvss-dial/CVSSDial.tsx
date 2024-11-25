import { useMemo } from "react";
import { useTheme } from "react-jss";
import cx from "clsx";

// components
import { Typography } from "@/components/atoms";

// theme
import { Theme } from "@/theme";

// constants
import { MATH_PI } from "@/constants";
import {
  METER_MIN,
  METER_MAX,
  METER_LOW,
  METER_MEDIUM,
  METER_HIGH,
} from "./CVSSDial.constants";

// types
import type { CVSSDialProps } from "./CVSSDial.types";

// styles
import { useStyles } from "./CVSSDial.styles";

const { Text } = Typography;

const CVSSDial = ({ className, ...props }: CVSSDialProps) => {
  const { cvss, epss } = props;

  const theme: Theme = useTheme();

  const styles = useStyles({ ...props, theme });

  const classes = cx({
    [styles.root]: true,
    [className || ""]: className,
  });

  const [truncatedDegree, needleDegree] = useMemo(
    () => [
      ((cvss - METER_MAX) / METER_MAX) * MATH_PI,
      (cvss / METER_MAX) * MATH_PI,
    ],
    [cvss]
  );

  const renderStatusText = () => {
    if (cvss < METER_LOW) {
      return <Text className={styles.statusLow}>Low</Text>;
    }
    if (cvss < METER_MEDIUM) {
      return <Text className={styles.statusMedium}>Medium</Text>;
    }
    if (cvss < METER_HIGH) {
      return <Text className={styles.statusHigh}>High</Text>;
    }
    return <Text className={styles.statusCritical}>Critical</Text>;
  };

  return (
    <div className={classes}>
      <div className={styles.meter}>
        <div className={styles.graduation}>
          <div
            className={styles.truncatedPiece}
            style={{ transform: `rotate(${truncatedDegree}deg)` }}
          />
        </div>
        <div className={styles.indicator}>
          <div
            className={styles.needle}
            style={{ transform: `rotate(${needleDegree}deg)` }}
          />
          <div className={styles.labels}>
            <Text>{METER_MIN}</Text>
            <Text>{METER_MAX}</Text>
          </div>
        </div>
      </div>
      <div className={styles.metrics}>
        <Text className={styles.cvss}>CVSS {cvss}</Text>
        <Text className={styles.epss}>EPSS {(epss * 100).toFixed(1)}%</Text>
        {renderStatusText()}
      </div>
    </div>
  );
};

export { CVSSDial };
