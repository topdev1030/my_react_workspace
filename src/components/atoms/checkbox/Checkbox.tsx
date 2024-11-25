import { Checkbox as AntCheckbox } from "antd";
import cx from "clsx";

// types
import { CheckboxProps } from "./Checkbox.types";

// styles
import { useStyles } from "./Checkbox.styles";

const Checkbox = ({ className, ...props }: CheckboxProps) => {
  const styles = useStyles();

  return (
    <AntCheckbox
      {...props}
      className={cx({
        [styles.root]: true,
        [className || ""]: className,
      })}
    />
  );
};

const CompoundElements = Object.assign(Checkbox, {
  Group: AntCheckbox.Group,
});

export { CompoundElements as Checkbox };
