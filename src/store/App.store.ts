import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

export interface Transaction {
  name: string;
  value: number;
}
export interface Accounting {
  transactions: Transaction[];
}

const initialState: Accounting = {
  transactions: [],
};

export const counterSlice = createSlice({
  name: "accounting",
  initialState,
  reducers: {
    addTransaction(state, action: PayloadAction<Transaction>) {
      state.transactions.push(action.payload);
    },
    removeTransaction(state, action: PayloadAction<number>) {
      state.transactions.splice(action.payload, 1);
    },
  },
});

const store = configureStore({
  reducer: {
    accounting: counterSlice.reducer,
  },
});

export const { addTransaction, removeTransaction } = counterSlice.actions;
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
