import React from "react";

import { Layout } from "antd";

import { useStyles } from "./FooterBar.styles";

const { Footer } = Layout;

const FooterBar = () => {
  const styles = useStyles();

  return (
    <Footer className={styles.footerStyle}>
      © 2024 Omega Consulting. All Rights Reserved.
    </Footer>
  );
};

export { FooterBar };
