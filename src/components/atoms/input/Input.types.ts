import { InputProps as AntInputProps } from "antd";

export interface InputProps extends Omit<AntInputProps, "variant"> {
  className?: string;
  variant?: "text" | "password" | "number" | "textarea";
}
