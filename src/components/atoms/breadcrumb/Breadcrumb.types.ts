import { BreadcrumbProps as AntBreadcrumbProps } from "antd";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";

export interface BreadcrumbProps extends AntBreadcrumbProps {
  className?: string;
  items?: ItemType[];
  linkRouter?: boolean;
}
