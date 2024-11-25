import { Space } from "antd";
import type { DatePickerProps } from "antd";

import { DatePicker } from "./DatePicker";

const { RangePicker } = DatePicker;

export default {
  component: DatePicker,
  title: "atoms/DatePicker",
};

export const Basic = () => {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <Space direction="vertical">
      <DatePicker onChange={onChange} />
      <DatePicker onChange={onChange} picker="week" />
      <DatePicker onChange={onChange} picker="month" />
      <DatePicker onChange={onChange} picker="quarter" />
      <DatePicker onChange={onChange} picker="year" />
    </Space>
  );
};

export const Range = () => {
  return (
    <Space direction="vertical" size={12}>
      <RangePicker />
      <RangePicker showTime />
      <RangePicker picker="week" />
      <RangePicker picker="month" />
      <RangePicker picker="quarter" />
      <RangePicker picker="year" />
    </Space>
  );
};
