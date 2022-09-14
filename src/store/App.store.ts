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
function stateReseted(initialState: Accounting): Accounting {
  const darkMode = useStatePersist<boolean>(THEME_KEY_IN_LOCALSTORAGE).get();
  return { ...initialState, darkMode };
}

export function sliceCreator(initialState: Accounting) {
  return createSlice({
    name: "accounting",
    initialState,
    reducers: {
      toggleTheme(state) {
        state.darkMode = !state.darkMode;
        const { save } = useStatePersist<boolean>(THEME_KEY_IN_LOCALSTORAGE);
        save(state.darkMode);
      },
      resetAllState(state, action: PayloadAction<boolean | undefined>) {
        if (action.payload) {
          return Object.assign(state, initialState);
        }
        Object.assign(state, stateReseted(initialState));
      },
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
}

export const accountingSlice = sliceCreator(initialState);

export const middlewares = {
  serializableCheck: {
    // Ignore these paths in the state
    ignoredPaths: [],
  },
};

const store = configureStore({
  reducer: {
    accounting: accountingSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middlewares),
});

export const {
  addTransaction,
  removeTransaction,
  toggleTheme,
  removeTransactions,
  resetAllState,
} = accountingSlice.actions;
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
