import { DropdownProps as AntDropdownProps } from "antd";
import { MenuProps } from "antd/es/menu";

export interface DropdownProps extends AntDropdownProps {
  className?: string;
  menu?: MenuProps;
  trigger?: ("click" | "hover" | "contextMenu")[];
  dropdownRender?: (originNode: React.ReactNode) => React.ReactNode;
}
