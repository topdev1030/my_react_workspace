import { Spin as AntSpin } from "antd";
import cx from "clsx";

// types
import { SpinProps } from "./Spin.types";

// styles
import { useStyles } from "./Spin.styles";

const Spin = ({ className, size = "default", tip, ...props }: SpinProps) => {
  const styles = useStyles();

  return (
    <AntSpin
      rootClassName={cx({
        [styles.root]: true,
        [className || ""]: className,
      })}
      size={size}
      tip={tip}
      {...props}
    />
  );
};

export { Spin };
