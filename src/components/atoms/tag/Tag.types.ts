import { ReactNode, MouseEvent } from "react";
import { TagProps as AntTagProps } from "antd";

export interface TagProps extends AntTagProps {
  className?: string;
  closeIcon?: boolean | ReactNode;
  onClose?: (e: MouseEvent<HTMLElement>) => void;
}
