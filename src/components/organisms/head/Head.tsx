import React from "react";

import { Input, Typography } from "antd";
import { Layout } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { useStyles } from "./Head.styles";

const { Title } = Typography;
const { Header } = Layout;

const Head = () => {
  const styles = useStyles();

  return (
    <Header className={styles.headerStyle}>
      <Title className={styles.title}>Dashboard</Title>
      <Input
        size="large"
        placeholder="Search"
        className={styles.searchBar}
        prefix={<SearchOutlined />}
      />
    </Header>
  );
};

export { Head };
