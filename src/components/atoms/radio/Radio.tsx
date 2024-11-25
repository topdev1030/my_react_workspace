import { Radio as AntRadio } from "antd";
import cx from "clsx";

// types
import { RadioProps } from "./Radio.types";

// styles
import { useStyles } from "./Radio.styles";

const Radio = ({ className, ...props }: RadioProps) => {
  const styles = useStyles();

  return (
    <AntRadio
      className={cx({
        [styles.root]: true,
        [className || ""]: className,
      })}
      {...props}
    />
  );
};

const CompoundElements = Object.assign(Radio, {
  Group: AntRadio.Group,
});

export { CompoundElements as Radio };
