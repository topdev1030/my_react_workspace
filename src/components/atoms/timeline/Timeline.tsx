import { Timeline as AntTimeline } from "antd";
import cx from "clsx";

// types
import { TimelineProps } from "./Timeline.types";

// styles
import { useStyles } from "./Timeline.styles";

const Timeline = ({ className, items = [], ...props }: TimelineProps) => {
  const styles = useStyles();

  return (
    <AntTimeline
      className={cx({
        [styles.root]: true,
        [className || ""]: className,
      })}
      items={items}
      {...props}
    />
  );
};

export { Timeline };
