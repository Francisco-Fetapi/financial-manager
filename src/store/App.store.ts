import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

export interface Accounting {
  currentBalance: number;
  debit: number;
  credit: number;
}

const initialState: Accounting = {
  currentBalance: 0,
  debit: 0,
  credit: 0,
};

export const counterSlice = createSlice({
  name: "accounting",
  initialState,
  reducers: {},
});

const store = configureStore({
  reducer: {
    accounting: counterSlice.reducer,
  },
});

export const {} = counterSlice.actions;
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
