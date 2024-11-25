import { SettingOutlined } from "@ant-design/icons";
import { Space } from "antd";

// components
import { Select } from "..";
import { InputNumber } from "./InputNumber";

export default {
  component: InputNumber,
  title: "atoms/InputNumber",
};

const { Option } = Select;

export const Default = () => {
  const onChange = (value: number) => {
    console.log("changed", value);
  };

  const selectBefore = (
    <Select defaultValue="add" style={{ width: 60 }}>
      <Option value="add">+</Option>
      <Option value="minus">-</Option>
    </Select>
  );
  const selectAfter = (
    <Select defaultValue="USD" style={{ width: 60 }}>
      <Option value="USD">$</Option>
      <Option value="EUR">€</Option>
      <Option value="GBP">£</Option>
      <Option value="CNY">¥</Option>
    </Select>
  );

  return (
    <Space direction="vertical">
      <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
      <InputNumber addonBefore="+" addonAfter="$" defaultValue={100} />
      <InputNumber
        addonBefore={selectBefore}
        addonAfter={selectAfter}
        defaultValue={100}
      />
      <InputNumber addonAfter={<SettingOutlined />} defaultValue={100} />
      <InputNumber
        addonBefore="+"
        addonAfter={<SettingOutlined />}
        defaultValue={100}
        disabled
        controls
      />
      <InputNumber
        prefix="¥"
        addonBefore="+"
        addonAfter={<SettingOutlined />}
        defaultValue={100}
        disabled
        controls
      />
    </Space>
  );
};
