import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { Avatar } from "./Avatar";

export default {
  component: Avatar,
  title: "atoms/Avatar",
};

export const Basic = () => {
  return (
    <Space direction="vertical" size={16}>
      <Space wrap size={16}>
        <Avatar size={64} icon={<UserOutlined />} />
        <Avatar size="large" icon={<UserOutlined />} />
        <Avatar icon={<UserOutlined />} />
        <Avatar size="small" icon={<UserOutlined />} />
      </Space>
      <Space wrap size={16}>
        <Avatar shape="square" size={64} icon={<UserOutlined />} />
        <Avatar shape="square" size="large" icon={<UserOutlined />} />
        <Avatar shape="square" icon={<UserOutlined />} />
        <Avatar shape="square" size="small" icon={<UserOutlined />} />
      </Space>
    </Space>
  );
};

export const Group = () => (
  <Avatar.Group
    maxCount={2}
    maxPopoverTrigger="click"
    size="large"
    maxStyle={{
      color: "#f56a00",
      backgroundColor: "#fde3cf",
      cursor: "pointer",
    }}
  >
    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
    <Avatar
      style={{ backgroundColor: "#1677ff" }}
      icon={<AntDesignOutlined />}
    />
  </Avatar.Group>
);
