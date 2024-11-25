// redux
import { RootState } from "@/redux/types";

// types
import { USER_ROLE } from "@/types";

export const selectAuth = (state: RootState) => state.auth;
export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectUserInfo = (state: RootState) => state.auth.userInfo;
export const selectUserRole = (state: RootState) =>
  state.auth.userInfo?.role || USER_ROLE.CUSTOMER;
