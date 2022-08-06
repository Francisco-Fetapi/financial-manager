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

export const accountingSlice = createSlice({
  name: "accounting",
  initialState,
  reducers: {
    addTransaction(state, action: PayloadAction<Transaction>) {
      state.transactions.push(action.payload);
      console.log(state.transactions);
    },
    removeTransaction(state, action: PayloadAction<number>) {
      state.transactions.splice(action.payload, 1);
    },
  },
});

const store = configureStore({
  reducer: {
    accounting: accountingSlice.reducer,
  },
});

export const { addTransaction, removeTransaction } = accountingSlice.actions;
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
