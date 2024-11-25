import { Avatar as AntAvatar } from "antd";
import cx from "clsx";

// types
import { AvatarProps } from "./Avatar.types";

// styles
import { useStyles } from "./Avatar.styles";

const Avatar = ({
  className,
  size,
  icon,
  shape = "circle",
  ...props
}: AvatarProps) => {
  const styles = useStyles();

  return (
    <AntAvatar
      className={cx({
        [styles.root]: true,
        [className || ""]: className,
      })}
      size={size}
      icon={icon}
      shape={shape}
      {...props}
    />
  );
};

const CompoundElements = Object.assign(Avatar, {
  Group: AntAvatar.Group,
});

export { CompoundElements as Avatar };
