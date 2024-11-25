// actions
import { GET_USER_INFO } from "./auth.actions";

// types
import { UserInfo } from "@/types";
import { VisualState } from "@/redux/common";

export interface AuthState {
  [GET_USER_INFO]: VisualState;
  accessToken: string;
  userInfo?: UserInfo;
}
