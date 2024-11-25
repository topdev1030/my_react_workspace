import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// redux
import { defaultVisualState } from "@/redux/common";

// actions
import { GET_USER_INFO } from "./auth.actions";

// thunks
import { getUserInfo } from "./auth.thunks";

// types
import { AuthState } from "./auth.types";

export const initialState: AuthState = {
  [GET_USER_INFO]: defaultVisualState,
  accessToken: "",
  userInfo: undefined,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserInfo.pending, (state) => {
        state[GET_USER_INFO].isLoading = true; // Updated: Accessed isLoading correctly
        state[GET_USER_INFO].errors = []; // Updated: Reset errors correctly
      })
      .addCase(getUserInfo.rejected, (state, { error }) => {
        state[GET_USER_INFO].isLoading = false; // Updated: Accessed isLoading correctly
        state[GET_USER_INFO].errors = [error?.message || ""]; // Updated: Reset errors correctly
        state.userInfo = undefined;
      })
      .addCase(getUserInfo.fulfilled, (state, { payload }) => {
        state[GET_USER_INFO].isLoading = false; // Updated: Accessed isLoading correctly
        state[GET_USER_INFO].errors = []; // Updated: Reset errors correctly
        state.userInfo = payload;
      });
  },
});

export const { reducer } = slice;

export const { setAccessToken } = slice.actions;
