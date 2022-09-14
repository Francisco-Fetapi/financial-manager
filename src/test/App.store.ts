import { configureStore } from "@reduxjs/toolkit";
import { Accounting, middlewares, sliceCreator } from "../store/App.store";

const initialState: Accounting = {
  darkMode: false,
  transactions: [],
};

const accounting = sliceCreator(initialState);

export const store = configureStore({
  reducer: {
    accounting: accounting.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middlewares),
});

export default store;
