import { store } from "./store";

export type RootState = ReturnType<any>;
export type AppDispatch = typeof store.dispatch;
