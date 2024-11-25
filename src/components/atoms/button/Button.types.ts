import { ButtonProps as AntButtonProps } from "antd";
import { ButtonType } from "antd/es/button";

export interface ButtonProps extends AntButtonProps {
  className?: string;
  type?: ButtonType;
}
