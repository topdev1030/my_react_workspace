import { Space } from "antd";

import { Button } from "..";
import { Input } from "./Input";

export default {
  component: Input,
  title: "atoms/Input",
};

const { Search } = Input;

export const Default = () => {
  return (
    <Space direction="vertical" size="middle">
      <Space.Compact>
        <Input defaultValue="26888888" />
      </Space.Compact>
      <Space.Compact>
        <Input style={{ width: "20%" }} defaultValue="0571" />
        <Input style={{ width: "80%" }} defaultValue="26888888" />
      </Space.Compact>
      <Space.Compact>
        <Search
          addonBefore="https://"
          placeholder="input search text"
          allowClear
        />
      </Space.Compact>
      <Space.Compact style={{ width: "100%" }}>
        <Input defaultValue="Combine input and button" />
        <Button type="primary">Submit</Button>
      </Space.Compact>
    </Space>
  );
};
