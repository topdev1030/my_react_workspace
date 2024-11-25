import { configureStore } from "@reduxjs/toolkit";

// reducers
import { reducer as AuthReducer } from "./auth";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
