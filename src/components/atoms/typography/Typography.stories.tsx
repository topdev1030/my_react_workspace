import { useState } from "react";
import { Space } from "antd";
import { Typography } from ".";

export default {
  component: Typography,
  title: "atoms/Typography",
};

export const Heading = () => {
  return (
    <>
      <Typography.Title>Heading 1</Typography.Title>
      <Typography.Title level={2}>Heading 2</Typography.Title>
      <Typography.Title level={3}>Heading 3</Typography.Title>
      <Typography.Title level={4}>Heading 4</Typography.Title>
      <Typography.Title level={5}>Heading 5</Typography.Title>
    </>
  );
};

export const Text = () => (
  <Space direction="vertical">
    <Typography.Text>Text (default)</Typography.Text>
    <Typography.Text type="secondary">Text (secondary)</Typography.Text>
    <Typography.Text type="success">Text (success)</Typography.Text>
    <Typography.Text type="warning">Text (warning)</Typography.Text>
    <Typography.Text type="danger">Text (danger)</Typography.Text>
    <Typography.Text disabled>Text (disabled)</Typography.Text>
    <Typography.Text mark>Text (mark)</Typography.Text>
    <Typography.Text code>Text (code)</Typography.Text>
    <Typography.Text keyboard>Text (keyboard)</Typography.Text>
    <Typography.Text underline>Text (underline)</Typography.Text>
    <Typography.Text delete>Text (delete)</Typography.Text>
    <Typography.Text strong>Text (strong)</Typography.Text>
    <Typography.Text italic>Text (italic)</Typography.Text>
  </Space>
);

export const Paragraph = () => {
  const [editableStr, setEditableStr] = useState("This is an editable text.");

  return (
    <Typography.Paragraph editable={{ onChange: setEditableStr }}>
      {editableStr}
    </Typography.Paragraph>
  );
};

export const Link = () => (
  <Typography.Link href="http://google.com" target="_blank">
    Go to Google
  </Typography.Link>
);
