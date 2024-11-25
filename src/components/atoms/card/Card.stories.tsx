import { Space } from "antd";
import { Card } from "./Card";

export default {
  component: Card,
  title: "atoms/Card",
};

export const Default = () => (
  <Space direction="vertical" size={16}>
    <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{ width: 300 }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card size="small">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </Space>
);
