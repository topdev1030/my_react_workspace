import { Tabs } from "./Tabs";

export default {
  component: Tabs,
  title: "atoms/Tabs",
};

export const Line = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      type="line"
      items={new Array(3).fill(null).map((_, i) => {
        const id = String(i + 1);
        return {
          label: `Tab ${id}`,
          key: id,
          children: `Content of tab ${id}`,
        };
      })}
    />
  );
};

export const Card = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      type="card"
      items={new Array(3).fill(null).map((_, i) => {
        const id = String(i + 1);
        return {
          label: `Card Tab ${id}`,
          key: id,
          children: `Content of card tab ${id}`,
        };
      })}
    />
  );
};
