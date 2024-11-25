import { TooltipProps as AntTooltipProps } from "antd";
import type { RenderFunction } from "antd/es/_util/getRenderPropValue";
import type { TooltipPlacement } from "antd/es/tooltip";

export type TooltipProps = AntTooltipProps & {
  className?: string;
  title: React.ReactNode | RenderFunction;
  placement?: TooltipPlacement;
};
