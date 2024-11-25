import { DatePicker as AntDatePicker } from "antd";
import cx from "clsx";

// types
import { DatePickerProps, RangePickerProps } from "./DatePicker.types";

// styles
import { useStyles } from "./DatePicker.styles";

const { RangePicker: AntRangePicker } = AntDatePicker;

const DatePicker = ({ className, ...props }: DatePickerProps) => {
  const styles = useStyles();

  return (
    <AntDatePicker
      {...props}
      className={cx({
        [styles.root]: true,
        [className || ""]: className,
      })}
      popupClassName={styles.popup}
    />
  );
};

const RangePicker = ({ className, ...props }: RangePickerProps) => {
  const styles = useStyles();

  return (
    <AntRangePicker
      {...props}
      className={cx({
        [styles.root]: true,
        [className || ""]: className,
      })}
      popupClassName={styles.popup}
    />
  );
};

const CompoundElements = Object.assign(DatePicker, {
  RangePicker,
});

export { CompoundElements as DatePicker };
