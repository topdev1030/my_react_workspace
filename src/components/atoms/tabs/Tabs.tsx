import { Tabs as AntTabs } from "antd";
import cx from "clsx";

// types
import { TabsProps } from "./Tabs.types";

// styles
import { useStyles } from "./Tabs.styles";

const Tabs = ({
  className,
  size = "middle",
  type = "card",
  items = [],
  ...props
}: TabsProps) => {
  const styles = useStyles();

  return (
    <AntTabs
      className={cx({
        [styles.root]: true,
        [className || ""]: className,
      })}
      size={size}
      type={type}
      items={items}
      {...props}
    />
  );
};

export { Tabs };
