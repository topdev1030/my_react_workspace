import { Tag as AntTag } from "antd";
import cx from "clsx";

// types
import { TagProps } from "./Tag.types";

// styles
import { useStyles } from "./Tag.styles";

const Tag = ({
  className,
  closeIcon,
  onClose,
  onClick,
  ...props
}: TagProps) => {
  const styles = useStyles();

  return (
    <AntTag
      className={cx({
        [styles.root]: true,
        [styles.clickable]: onClick,
        [className || ""]: className,
      })}
      closeIcon={closeIcon}
      onClose={onClose}
      onClick={onClick}
      {...props}
    />
  );
};

export { Tag };
