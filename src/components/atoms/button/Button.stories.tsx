import { Space } from "antd";
import { Button } from "./Button";

export default {
  component: Button,
  title: "atoms/Button",
};

export const Default = () => {
  return (
    <Space direction="vertical">
      <Space>
        <Button type="primary">Primary</Button>
        <Button type="primary" disabled>
          Primary(disabled)
        </Button>
      </Space>
      <Space>
        <Button>Default</Button>
        <Button disabled>Default(disabled)</Button>
      </Space>
      <Space>
        <Button type="dashed">Dashed</Button>
        <Button type="dashed" disabled>
          Dashed(disabled)
        </Button>
      </Space>
      <Space>
        <Button type="text">Text</Button>
        <Button type="text" disabled>
          Text(disabled)
        </Button>
      </Space>
      <Space>
        <Button type="link">Link</Button>
        <Button type="link" disabled>
          Link(disabled)
        </Button>
      </Space>
    </Space>
  );
};
