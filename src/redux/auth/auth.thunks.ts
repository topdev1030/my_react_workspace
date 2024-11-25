import { createAsyncThunk } from "@reduxjs/toolkit";

// services
import { auth0Service, commonService } from "@/services";

// helpers
import { getUserRole } from "@/helpers";

// redux
import { GET_USER_INFO } from "./auth.actions";

export const getUserInfo = createAsyncThunk(
  GET_USER_INFO,
  async (accessToken: string) => {
    try {
      const userInfo = await auth0Service.getUserInfo(accessToken);
      const orgInfo = await commonService.getOrgInfoByUserID({
        token: accessToken,
        user_id: userInfo.sub,
      });
      return {
        ...userInfo,
        ...orgInfo,
        role: getUserRole(orgInfo.cust_id),
      };
    } catch (err: any) {
      throw new Error(err.message || "Failed to get user info");
    }
  }
);
