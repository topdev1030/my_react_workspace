import { message } from "antd";

// components
import { Button } from "..";
import { Popconfirm } from "./Popconfirm";

export default {
  component: Popconfirm,
  title: "atoms/Popconfirm",
};

export const Default = () => {
  const confirm = (e?: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    message.success("Click on Yes");
  };

  const cancel = (e?: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    message.error("Click on No");
  };

  return (
    <Popconfirm
      title="Delete the task"
      description="Are you sure to delete this task?"
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
    >
      <Button danger>Delete</Button>
    </Popconfirm>
  );
};
