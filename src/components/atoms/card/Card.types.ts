import { CardProps as AntCardProps } from "antd";
import { CardSize } from "antd/es/card/Card";

export interface CardProps extends AntCardProps {
  className?: string;
  title?: React.ReactNode;
  extra?: React.ReactNode;
  size?: CardSize;
}
