import type { DatePickerProps as AntDatePickerProps } from "antd";
import type { RangePickerProps as AntRangePickerProps } from "antd/es/date-picker";

export type DatePickerProps = AntDatePickerProps & {
  className?: string;
};

export type RangePickerProps = AntRangePickerProps & {
  className?: string;
};
