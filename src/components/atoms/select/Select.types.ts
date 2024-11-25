import { SelectProps as AntSelectProps } from "antd";

export interface SelectProps extends AntSelectProps {
  className?: string;
  readOnly?: boolean;
}
