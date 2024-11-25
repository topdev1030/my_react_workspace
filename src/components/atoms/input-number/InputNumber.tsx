import { InputNumber as AntInputNumber } from "antd";
import cx from "clsx";

// types
import { InputNumberProps } from "./InputNumber.types";

// styles
import { useStyles } from "./InputNumber.styles";

const InputNumber = ({
  className,
  min,
  max,
  defaultValue,
  value,
  onChange,
  ...props
}: InputNumberProps<any>) => {
  const styles = useStyles();

  return (
    <AntInputNumber
      className={cx({
        [styles.root]: true,
        [className || ""]: className,
      })}
      min={min}
      max={max}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export { InputNumber };
