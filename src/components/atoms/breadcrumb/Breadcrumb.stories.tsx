import { HomeOutlined, SettingOutlined } from "@ant-design/icons";
import { Breadcrumb } from "./Breadcrumb";

export default {
  component: Breadcrumb,
  title: "atoms/Breadcrumb",
};

export const Basic = () => {
  return (
    <Breadcrumb
      items={[
        {
          title: "Home",
        },
        {
          title: <a href="">Settings</a>,
        },
        {
          title: "User Settings",
        },
      ]}
    />
  );
};

export const WithIcon = () => (
  <Breadcrumb
    items={[
      {
        href: "/",
        title: <HomeOutlined />,
      },
      {
        href: "/settings",
        title: (
          <>
            <SettingOutlined />
            <span>Settings</span>
          </>
        ),
      },
      {
        title: "User Settings",
      },
    ]}
  />
);

export const LinkRouter = () => (
  <Breadcrumb
    items={[
      {
        href: "/",
        title: <HomeOutlined />,
      },
      {
        href: "/settings",
        title: (
          <>
            <SettingOutlined />
            <span>Settings</span>
          </>
        ),
      },
      {
        title: "User Settings",
      },
    ]}
    linkRouter
  />
);
