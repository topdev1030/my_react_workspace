import { Table as AntTable } from "antd";
import cx from "clsx";

// components
import { EditableCell } from "./TableEditableCell";

// constants
import { DEFAULT_PAGE_SIZE } from "./Table.constants";

// types
import { TableProps } from "./Table.types";

// styles
import { useStyles } from "./Table.styles";

const Table = ({
  className,
  columns,
  rowKey = "key",
  editingKey,
  dataSource,
  pagination,
  loading,
  onChange,
  ...props
}: TableProps<any>) => {
  const styles = useStyles();

  const mergedColumns = columns.map(({ editInputProps, ...col }) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        ...(col.onCell && col.onCell(record)),
        record,
        title: col.title,
        dataIndex: col.dataIndex,
        editing: record[rowKey] === editingKey,
        editInputProps,
      }),
    };
  });

  return (
    <AntTable
      className={cx({
        [styles.root]: true,
        [className || ""]: className,
      })}
      rowKey={rowKey}
      components={{
        body: {
          cell: EditableCell,
        },
      }}
      columns={mergedColumns}
      dataSource={dataSource}
      pagination={{
        defaultPageSize: DEFAULT_PAGE_SIZE,
        showSizeChanger: true,
        hideOnSinglePage: false,
        ...pagination,
      }}
      loading={loading}
      onChange={onChange}
      bordered
      {...props}
    />
  );
};

export { Table };
