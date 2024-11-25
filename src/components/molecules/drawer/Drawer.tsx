import { Drawer as AntDrawer } from "antd";
import cx from "clsx";

// theme
import { Icons } from "@/theme/icons";

// types
import { DrawerProps } from "./Drawer.types";

// styles
import { useStyles } from "./Drawer.styles";

const Drawer = ({
  className,
  title,
  open,
  closable,
  placement = "right",
  onClose,
  ...props
}: DrawerProps) => {
  const styles = useStyles();

  return (
    <AntDrawer
      rootClassName={cx({
        [styles.root]: true,
        [styles.rootTop]: placement === "top",
        [styles.rootBottom]: placement === "bottom",
        [styles.rootLeft]: placement === "left",
        [styles.rootRight]: placement === "right",
        [className || ""]: className,
      })}
      title={title}
      open={open}
      closable={closable}
      placement={placement}
      closeIcon={
        <>
          <Icons className={styles.tabShapeIcon} glyph="tab-shape-filled" />
          <Icons className={styles.closeIcon} glyph="close-outlined" />
        </>
      }
      onClose={onClose}
      {...props}
    />
  );
};

export { Drawer };
