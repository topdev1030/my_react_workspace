import React from "react";
import { Space } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Tag } from "./Tag";

export default {
  component: Tag,
  title: "atoms/Tag",
};

export const Default = () => {
  const onCloseTag = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log("Clicked! But prevent default.");
  };

  return (
    <Space size={[0, 8]} wrap>
      <Tag>Tag 1</Tag>
      <Tag>
        <a href="/">Link</a>
      </Tag>
      <Tag closeIcon onClose={onCloseTag}>
        Prevent Default
      </Tag>
      <Tag closeIcon={<CloseCircleOutlined />} onClose={onCloseTag}>
        Tag 2
      </Tag>
    </Space>
  );
};
