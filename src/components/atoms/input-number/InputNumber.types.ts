import { ValueType } from "@rc-component/mini-decimal";
import { InputNumberProps as AntInputNumberProps } from "antd";

export interface InputNumberProps<T extends ValueType>
  extends AntInputNumberProps<T> {
  className?: string;
  min?: T;
  max?: T;
  defaultValue?: T;
  value?: T | null;
  onChange?: (value: T | null) => void;
}
