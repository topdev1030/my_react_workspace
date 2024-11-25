import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Space } from "antd";

import { Dropdown } from "./Dropdown";

export default {
  component: Dropdown,
  title: "atoms/Dropdown",
};

const mockItems: MenuProps["items"] = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

export const Click = () => {
  return (
    <Dropdown menu={{ items: mockItems }} trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Click me
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export const Hover = () => {
  return (
    <Dropdown menu={{ items: mockItems }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Hover me
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};
