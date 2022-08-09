import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import useStatePersist from "../hooks/useStatePersist";

const TRANSACTIONS_KEY_IN_LOCALSTORAGE = "transacoes";
const THEME_KEY_IN_LOCALSTORAGE = "darkMode";
export interface Transaction {
  name: string;
  value: number;
}
export interface IDarkMode {
  darkMode: boolean;
}
export interface Accounting extends IDarkMode {
  transactions: Transaction[];
}

const initialState: Accounting = {
  transactions:
    useStatePersist<Transaction[]>(TRANSACTIONS_KEY_IN_LOCALSTORAGE).get() ||
    [],
  darkMode: useStatePersist<boolean>(THEME_KEY_IN_LOCALSTORAGE).get(),
};

export const accountingSlice = createSlice({
  name: "accounting",
  initialState,
  reducers: {
    addTransaction(state, action: PayloadAction<Transaction>) {
      state.transactions.push(action.payload);
      const { save } = useStatePersist<Transaction[]>(
        TRANSACTIONS_KEY_IN_LOCALSTORAGE
      );
      save(state.transactions);
    },
    removeTransaction(state, action: PayloadAction<number>) {
      state.transactions.splice(action.payload, 1);
      const { save } = useStatePersist<Transaction[]>(
        TRANSACTIONS_KEY_IN_LOCALSTORAGE
      );
      save(state.transactions);
    },
    toggleTheme(state) {
      state.darkMode = !state.darkMode;
      const { save } = useStatePersist<boolean>(THEME_KEY_IN_LOCALSTORAGE);
      save(state.darkMode);
    },
    removeTransactions(
      state,
      action: PayloadAction<"Debits" | "Credits" | "All">
    ) {
      let filteredArray: Transaction[] = [];
      const actions = {
        Debits() {
          filteredArray = state.transactions.filter(
            (transaction) => transaction.value < 0
          );
        },
        Credits() {
          filteredArray = state.transactions.filter(
            (transaction) => transaction.value > 0
          );
        },
        All() {
          filteredArray = [];
        },
      };
      actions[action.payload]();
      state.transactions = filteredArray;
      const { save } = useStatePersist<Transaction[]>(
        TRANSACTIONS_KEY_IN_LOCALSTORAGE
      );
      save(state.transactions);
    },
  },
});

const store = configureStore({
  reducer: {
    accounting: accountingSlice.reducer,
  },
});

export const {
  addTransaction,
  removeTransaction,
  toggleTheme,
  removeTransactions,
} = accountingSlice.actions;
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
