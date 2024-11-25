import { useState } from "react";
import { Space } from "antd";
import type { RadioChangeEvent } from "antd";

import { Radio } from "./Radio";

export default {
  component: Radio,
  title: "atoms/Radio",
};

export const Basic = () => {
  return <Radio>Radio</Radio>;
};

export const Group = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
  );
};

export const Vertical = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio value={1}>Option A</Radio>
        <Radio value={2}>Option B</Radio>
        <Radio value={3}>Option C</Radio>
      </Space>
    </Radio.Group>
  );
};

export const Button = () => {
  const [value, setValue] = useState("Apple");

  const optionsWithDisabled = [
    { label: "Apple", value: "Apple" },
    { label: "Pear", value: "Pear" },
    { label: "Orange", value: "Orange", disabled: true },
  ];

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group
      options={optionsWithDisabled}
      onChange={onChange}
      value={value}
      optionType="button"
      buttonStyle="solid"
    />
  );
};
