import { TableProps as AntTableProps, Table as AntTable } from "antd";
import { type TableProps as RcTableProps } from "rc-table";
import type { SpinProps } from "antd/es/spin";
import type {
  FilterValue,
  SorterResult,
  TableCurrentDataSource,
  TablePaginationConfig,
} from "antd/es/table/interface";

export type EditableTableProps = Parameters<typeof AntTable>[0];

export type EditInputType = "text" | "number" | "select" | "upload";

export type ColumnTypes = Exclude<EditableTableProps["columns"], undefined>;

export type TableColumnType = ColumnTypes[number] & {
  dataIndex?: string;
  title?: string;
  editable?: boolean;
  editInputProps?: { type?: EditInputType } & any;
};

export interface EditableCellProps<RecordType>
  extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  editInputProps: any;
  dataIndex: string;
  title: string;
  record: RecordType;
  index: number;
  children: React.ReactNode;
}

export interface TableProps<RecordType>
  extends Omit<AntTableProps<RecordType>, "columns"> {
  className?: string;
  columns: TableColumnType[];
  dataSource?: RcTableProps<RecordType>["data"];
  pagination?: false | TablePaginationConfig;
  loading?: boolean | SpinProps;
  rowKey?: string;
  editingKey?: string;
  onChange?: (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<RecordType> | SorterResult<RecordType>[],
    extra?: TableCurrentDataSource<RecordType>
  ) => void;
}

export type FilterDropdownType =
  | "input"
  | "select"
  | "multi-select"
  | "date-picker"
  | "range-picker";

export interface FilterDropdownProps {
  className?: string;
  variant?: FilterDropdownType;
  onReset?: () => void;
  [prop: string]: any;
}
