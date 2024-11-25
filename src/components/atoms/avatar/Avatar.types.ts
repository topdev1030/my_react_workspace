import { AvatarProps as AntAvatarProps } from "antd";
import type { AvatarSize } from "antd/es/avatar/AvatarContext";

export interface AvatarProps extends AntAvatarProps {
  className?: string;
  size?: AvatarSize;
  icon?: React.ReactNode;
  shape?: "circle" | "square";
}
