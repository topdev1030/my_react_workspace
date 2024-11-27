import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Image, Layout, Menu } from "antd";
import type { MenuProps } from "antd";

import { useAuth0 } from "@auth0/auth0-react";

// redux
import { useAppDispatch, useAppSelector } from "@/redux";
import {
  selectAuth,
  selectUserRole,
  setAccessToken,
  getUserInfo,
  GET_USER_INFO,
} from "@/redux/auth";

// assets
import ImgLogo from "@/static/images/logo.png";
import { useStyles } from "./Sidebar.styles";
import messageIcon from "../../../static/images/messages.png";
import uploadIcon from "../../../static/images/upload.png";
import homeIcon from "../../../static/images/home.png";
import reportIcon from "../../../static/images/reports.png";
import logoutIcon from "../../../static/images/logout.png";

// Components
import { Typography } from "@/components/atoms";

// config
import config from "@/config";

import { USER_ROLE } from "@/types";

type MenuItem = Required<MenuProps>["items"][number];

const { Sider } = Layout;
const { Text, Title } = Typography;

const SideBar = () => {
  const {
    accessToken,
    userInfo,
    [GET_USER_INFO]: { isLoading: isUserInfoLoading },
  } = useAppSelector(selectAuth);
  const userRole = useAppSelector(selectUserRole);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { logout } = useAuth0();

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

  const items: MenuItem[] = [
    {
      key: "sub1",
      label: (
        <Link to="/">
          <Text type="secondary">Home</Text>
        </Link>
      ),
      icon: <Image width={30} height={30} src={homeIcon} />,
    },
    {
      key: "sub2",
      label: (
        <Link to="/admin/reports">
          <Text type="secondary">Reports</Text>
        </Link>
      ),
      icon: <Image width={30} height={30} src={reportIcon} />,
    },
    {
      key: "sub3",
      label: (
        <Link to="/admin/uploads">
          <Text type="secondary">Uploads</Text>
        </Link>
      ),
      icon: <Image width={30} height={30} src={uploadIcon} />,
    },
    {
      key: "sub4",
      label: (
        <Link to="/admin/messages">
          <Text type="secondary">Messages</Text>
        </Link>
      ),
      icon: <Image width={30} height={30} src={messageIcon} />,
    },
  ];

  return (
    <Sider width="285px" className={styles.siderStyle}>
      <div
        className={styles.logoContainer}
        onClick={() => navigate("/dashboard")}
      >
        <img className={styles.imgLogo} width="75%" src={ImgLogo} alt="logo" />
        <Title type="secondary" className={styles.logoTitle}>
          Treat Intelligence
        </Title>
      </div>
      <div className={styles.profileCard}>
        <Image
          width={85}
          className={styles.imgLogo}
          preview={false}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <div className={styles.cardDescription}>
          <Text strong>Welcome Back</Text>
          <Title level={4} className={styles.profileName}>
            Benjamin Garcia
          </Title>
          <Text type="secondary">benjamingarcia@gmail.com</Text>
        </div>
      </div>
      <div>
        <Menu
          className={styles.menuItem}
          defaultSelectedKeys={["sub1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
      </div>
      <div onClick={onLogout} className={styles.logoutIcon}>
        <Image width={30} preview={false} src={logoutIcon} />
        <Text className={styles.logoutTitle} type="secondary" strong>
          Log Out
        </Text>
      </div>
    </Sider>
  );
};

export { SideBar };
