import { TabsProps as AntTabsProps } from "antd";
import type { TabsType } from "antd/es/tabs";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import { Tab } from "rc-tabs/lib/interface";

export interface TabsProps extends AntTabsProps {
  className?: string;
  size?: SizeType;
  type?: TabsType;
  items?: Tab[];
}
