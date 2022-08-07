import { RootState } from "./App.store";

export const getBalance = (state: RootState): number => {
  return state.accounting.transactions.reduce((acc, transaction) => {
    return acc + transaction.value;
  }, 0);
};
export const getDebit = (state: RootState): number => {
  return state.accounting.transactions.reduce((acc, transaction) => {
    if (transaction.value > 0) {
      return acc + transaction.value;
    }
    return acc;
  }, 0);
};
export const getCredit = (state: RootState): number => {
  return state.accounting.transactions.reduce((acc, transaction) => {
    if (transaction.value < 0) {
      return acc + transaction.value;
    }
    return acc;
  }, 0);
};

export const getAllTransactions = (state: RootState) => {
  return state.accounting.transactions;
};

export const getAllCredits = (state: RootState) => {
  return state.accounting.transactions.filter((t) => t.value < 0);
};
export const getAllDebits = (state: RootState) => {
  return state.accounting.transactions.filter((t) => t.value > 0);
};

export const getTheme = (state: RootState) => state.accounting.darkMode;
