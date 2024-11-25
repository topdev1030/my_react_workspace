import { Space } from "antd";
import { Select } from "./Select";

export default {
  component: Select,
  title: "atoms/Select",
};

export const Default = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <Space wrap>
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          { value: "jack", label: "Jack" },
          { value: "lucy", label: "Lucy" },
          { value: "Yiminghe", label: "yiminghe" },
          { value: "disabled", label: "Disabled", disabled: true },
        ]}
      />
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        disabled
        options={[{ value: "lucy", label: "Lucy" }]}
      />
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        loading
        options={[{ value: "lucy", label: "Lucy" }]}
      />
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        allowClear
        options={[{ value: "lucy", label: "Lucy" }]}
      />
    </Space>
  );
};
