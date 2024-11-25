import { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Space } from "antd";

// components
import { Button, Radio } from "@/components/atoms";
import { Drawer } from "./Drawer";

// types
import { DrawerProps } from "./Drawer.types";

// styles
import { useStyles } from "./Drawer.styles";

export default {
  component: Drawer,
  title: "molecules/Drawer",
};

export const Default = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const styles = useStyles();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  return (
    <>
      <Space>
        <Radio.Group value={placement} onChange={onChange}>
          <Radio value="top">top</Radio>
          <Radio value="right">right</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="left">left</Radio>
        </Radio.Group>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space>
      <Drawer
        title="Basic Drawer"
        placement={placement}
        open={open}
        key={placement}
        onClose={onClose}
      >
        <p className={styles.sbText}>Some contents...</p>
        <p className={styles.sbText}>Some contents...</p>
        <p className={styles.sbText}>Some contents...</p>
      </Drawer>
    </>
  );
};
