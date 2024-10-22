import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authslice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Tipagem para o RootState e AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
