import { Tooltip as AntTooltip } from "antd";
import cx from "clsx";

// types
import { TooltipProps } from "./Tooltip.types";

// styles
import { useStyles } from "./Tooltip.styles";

const Tooltip = ({ className, title, placement, ...props }: TooltipProps) => {
  const styles = useStyles();

  return (
    <AntTooltip
      rootClassName={cx({
        [styles.root]: true,
        [className || ""]: className,
      })}
      title={title}
      placement={placement}
      {...props}
    />
  );
};

export { Tooltip };
