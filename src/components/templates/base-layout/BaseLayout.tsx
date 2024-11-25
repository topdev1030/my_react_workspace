import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import cx from "clsx";

// components
import { SideBar } from "@/components/organisms";

// styles
import { useStyles } from "./BaseLayout.styles";

const { Content } = Layout;

interface BaseLayoutProps {
  className?: string;
}

const BaseLayout = withAuthenticationRequired(
  ({ className }: BaseLayoutProps) => {
    const styles = useStyles();

    return (
      <Layout className={styles.layoutStyle}>
        <SideBar />
        <Layout>
          <Content className={styles.contentStyle}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    );
  }
);

export { BaseLayout };
