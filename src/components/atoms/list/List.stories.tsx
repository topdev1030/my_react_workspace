import { Divider } from "antd";
import { Typography } from "..";
import { List } from "./List";

export default {
  component: List,
  title: "atoms/List",
};

export const Simple = () => {
  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];

  return (
    <>
      <Divider orientation="left">Default Size</Divider>
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark>[ITEM]</Typography.Text> {item}
          </List.Item>
        )}
      />
      <Divider orientation="left">Small Size</Divider>
      <List
        size="small"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
      <Divider orientation="left">Large Size</Divider>
      <List
        size="large"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </>
  );
};

export const Basic = () => {
  const mockData = [
    {
      title: "Saas Title 1",
    },
    {
      title: "Saas Title 2",
    },
    {
      title: "Saas Title 3",
    },
    {
      title: "Saas Title 4",
    },
  ];

  return (
    <List
      itemLayout="horizontal"
      dataSource={mockData}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={<a href="#">{item.title}</a>}
            description="Optml Sass app manages patients and clinic data."
          />
        </List.Item>
      )}
    />
  );
};
