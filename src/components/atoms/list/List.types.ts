import { ListProps as AntListProps } from "antd";
import type { ListItemLayout } from "antd/es/list";

export interface ListProps<T> extends AntListProps<T> {
  className?: string;
  itemLayout?: ListItemLayout;
  dataSource?: T[];
  renderItem?: (item: T, index: number) => React.ReactNode;
}
