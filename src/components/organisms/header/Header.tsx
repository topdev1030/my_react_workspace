import { useEffect, useMemo, useState } from "react";
import { Layout } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { DownOutlined } from "@ant-design/icons";
import cx from "clsx";

// components
import { Button, Dropdown, Typography } from "@/components/atoms";
import { UserMenu } from "@/components/molecules";

// redux
import { useAppDispatch, useAppSelector } from "@/redux";
import {
  selectAuth,
  selectUserRole,
  setAccessToken,
  getUserInfo,
  GET_USER_INFO,
} from "@/redux/auth";

// config
import config from "@/config";

// types
import { HeaderProps } from "./Header.types";

// assets
import ImgLogo from "@/static/images/logo.png";

// styles
import { useStyles } from "./Header.styles";

// types
import { USER_ROLE } from "@/types";
import { AdminMessages } from "@/pages/admin/messages";

const { Header: AntHeader } = Layout;
const { Text } = Typography;

const Header = ({ className }: HeaderProps) => {
  const {
    accessToken,
    userInfo,
    [GET_USER_INFO]: { isLoading: isUserInfoLoading },
  } = useAppSelector(selectAuth);
  const userRole = useAppSelector(selectUserRole);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { logout } = useAuth0();
  const [openCreateReportModal, setOpenCreateReportModal] =
    useState<boolean>(false);
  const styles = useStyles();

  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const onLogout = () => {
    logout({
      logoutParams: {
        returnTo: config.auth0.returnTo,
      },
    });
  };

  const getAccessToken = async () => {
    try {
      const token = await getAccessTokenSilently({
        authorizationParams: {
          audience: config.auth0.audience,
        },
      });
      dispatch(setAccessToken(token));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      getAccessToken();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (accessToken) {
      dispatch(getUserInfo(accessToken));
    }
  }, [accessToken]);

  const menuItems = [
    {
      title: "Intel Hub",
      items: [
        {
          key: "0",
          label: <Link to="/intel-hub/reports">Reports</Link>,
        },
        {
          key: "1",
          label: <Link to="/intel-hub/uploads">Uploads</Link>,
        },
      ],
      accessRole: [USER_ROLE.CUSTOMER],
    },
    {
      title: "News",
      href: "/news",
      accessRole: [USER_ROLE.CUSTOMER],
    },
    {
      title: "Admin",
      items: [
        {
          key: "0",
          label: <Link to="/admin/reports">Reports</Link>,
        },
        {
          key: "1",
          label: <Link to="/admin/uploads">Uploads</Link>,
        },
        {
          key: "2",
          label: <Link to="/admin/messages">Messages</Link>,
        },
        // {
        //   key: "2",
        //   label: (
        //     <span
        //       onClick={() => {
        //         setOpenCreateReportModal(true);
        //       }}
        //     >
        //       Messages
        //     </span>
        //   ),
        // },
      ],
      accessRole: [USER_ROLE.ADMIN],
    },
  ];

  const activeMenuItems = useMemo(() => {
    if (isUserInfoLoading) return [];
    return menuItems.filter(({ accessRole }) => accessRole.includes(userRole));
  }, [isUserInfoLoading, userRole]);

  return (
    <>
      <AntHeader
        className={cx({
          [styles.root]: true,
          [className || ""]: className,
        })}
      >
        <div
          className={styles.logoContainer}
          onClick={() => navigate("/dashboard")}
        >
          <img className={styles.imgLogo} src={ImgLogo} alt="logo" />
          <Text className={styles.logoText}>Threat Intelligence</Text>
        </div>
        <div className={styles.content}>
          <div className={styles.menuContainer}>
            {activeMenuItems.map(({ title, items = [], href }, idx) => {
              if (href) {
                return (
                  <Button
                    className={styles.menuBtn}
                    key={idx}
                    type="link"
                    onClick={() => navigate("/news")}
                  >
                    News
                  </Button>
                );
              }
              return (
                <Dropdown
                  key={idx}
                  className={styles.dropdownMenu}
                  menu={{ items }}
                  placement="bottomLeft"
                >
                  <a
                    className={styles.dropdownMenuTrigger}
                    onClick={(e) => e.preventDefault()}
                  >
                    {title}
                    <DownOutlined />
                  </a>
                </Dropdown>
              );
            })}
          </div>

          <UserMenu
            username={userInfo?.name}
            avatarUrl={userInfo?.picture}
            onLogout={onLogout}
          />
        </div>
      </AntHeader>
      {/* <AdminMessages
        isOpen={openCreateReportModal}
        setIsOpen={() => {
          setOpenCreateReportModal(false);
        }}
      /> */}
    </>
  );
};

export { Header };
