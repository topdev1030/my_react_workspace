import { ReactNode } from "react";
import { SpinProps as AntSpinProps } from "antd";
import type { SpinSize } from "antd/es/spin";

export interface SpinProps extends AntSpinProps {
  className?: string;
  size?: SpinSize;
  tip?: ReactNode;
}
