import { Divider } from "antd";
import { DownOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { MenuProps } from "antd/es/menu";
import cx from "clsx";

// components
import { Avatar, Dropdown, Typography } from "@/components/atoms";

// types
import { UserMenuProps } from "./UserMenu.types";

// styles
import { useStyles } from "./UserMenu.styles";

const { Text } = Typography;

const UserMenu = ({
  className,
  avatarUrl,
  username,
  onLogout,
}: UserMenuProps) => {
  const styles = useStyles();

  const menuItems: MenuProps["items"] = [
    {
      key: "logout",
      label: <a onClick={onLogout}>Logout</a>,
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <Dropdown
      className={cx({
        [styles.root]: true,
        [className || ""]: className,
      })}
      menu={{ items: menuItems }}
      dropdownRender={(menu) => (
        <div className={styles.menuItems}>
          <div className={styles.profile}>
            <Avatar
              className={styles.profileAvatar}
              src={avatarUrl}
              icon={<UserOutlined />}
            />
            <Text className={styles.profileName}>{username}</Text>
          </div>
          <Divider className={styles.divider} />
          {menu}
        </div>
      )}
      placement="bottomRight"
      trigger={["hover"]}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Avatar
          className={styles.dropdownAvatar}
          src={avatarUrl}
          size="small"
          icon={<UserOutlined />}
        >
          {username}
        </Avatar>
        <DownOutlined />
      </a>
    </Dropdown>
  );
};

export { UserMenu };
