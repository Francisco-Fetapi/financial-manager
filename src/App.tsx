import AddTransactions from "./components/AddTransactions";
import CurrentBalance from "./components/CurrentBalance";
import DebitAndCredit from "./components/DebitAndCredit";
import Header from "./components/Header";
import Transactions from "./components/Transactions";
import * as S from "./styles/General";
import { SnackbarProvider } from "notistack";
import Footer from "./components/Footer";
import SpeedDialTooltip from "./components/SpeedDial";

function App() {
  return (
    <S.AppContainer>
      <SnackbarProvider maxSnack={3}>
        <S.AccountingCardContainer>
          <Header />
          <CurrentBalance />
          <DebitAndCredit />
          <Transactions />
          <AddTransactions />
          <Footer />
          <SpeedDialTooltip />
        </S.AccountingCardContainer>
      </SnackbarProvider>
    </S.AppContainer>
  );
}

export default App;
