import { ReactNode } from "react";
import { DrawerProps as AntDrawerProps } from "antd";
import type { DrawerProps as RCDrawerProps } from "rc-drawer";
import type { Placement } from "rc-drawer/lib/Drawer";

export interface DrawerProps extends AntDrawerProps {
  className?: string;
  title?: ReactNode;
  open?: boolean;
  closable?: boolean;
  placement?: Placement;
  onClose?: RCDrawerProps["onClose"];
}
