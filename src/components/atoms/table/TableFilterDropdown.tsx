import dayjs from "dayjs";
import cx from "clsx";
import type { TimeRangePickerProps } from "antd";

// components
import { Button, Input, Select, DatePicker } from "..";

// types
import { FilterDropdownProps } from "./Table.types";

// styles
import { useStyles } from "./Table.styles";

const { RangePicker } = DatePicker;
const { Search } = Input;

const FilterDropdown = ({
  className,
  variant = "input",
  onReset,
  ...props
}: FilterDropdownProps) => {
  const styles = useStyles();

  const classes = cx({
    [styles.filterDropdown]: true,
    [className || ""]: className,
  });

  const rangePresets: TimeRangePickerProps["presets"] = [
    { label: "Last 7 Days", value: [dayjs().add(-7, "d"), dayjs()] },
    { label: "Last 14 Days", value: [dayjs().add(-14, "d"), dayjs()] },
    { label: "Last 30 Days", value: [dayjs().add(-30, "d"), dayjs()] },
    { label: "Last 90 Days", value: [dayjs().add(-90, "d"), dayjs()] },
  ];

  return (
    <div className={classes}>
      {variant === "select" && (
        <Select className={styles.filterSelect} allowClear {...props} />
      )}
      {variant === "multi-select" && (
        <Select
          className={styles.filterMultiSelect}
          mode="multiple"
          {...props}
        />
      )}
      {variant === "input" && (
        <Search className={styles.filterInput} allowClear {...props} />
      )}
      {variant === "date-picker" && (
        <DatePicker className={styles.filterDatePicker} allowClear {...props} />
      )}
      {variant === "range-picker" && (
        <RangePicker
          className={styles.filterRangePicker}
          allowClear
          presets={rangePresets}
          {...props}
        />
      )}
      {onReset && (
        <Button className={styles.resetBtn} type="link" onClick={onReset}>
          Reset
        </Button>
      )}
    </div>
  );
};

export { FilterDropdown };
