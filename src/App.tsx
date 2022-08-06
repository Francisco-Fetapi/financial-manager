import { useSelector } from "react-redux";
import AddTransactions from "./components/AddTransactions";
import CurrentBalance from "./components/CurrentBalance";
import DebitAndCredit from "./components/DebitAndCredit";
import Header from "./components/Header";
import Transactions from "./components/Transactions";
import { RootState } from "./store/App.store";
import * as S from "./styles/General";

function App() {
  const count = useSelector(
    (state: RootState) => state.accounting.currentBalance
  );
  return (
    <S.AppContainer>
      <S.AccountingCardContainer>
        <Header />
        <CurrentBalance />
        <DebitAndCredit />
        <Transactions />
        <AddTransactions />
      </S.AccountingCardContainer>
    </S.AppContainer>
  );
}

export default App;
