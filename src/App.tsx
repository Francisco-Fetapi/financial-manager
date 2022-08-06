import { useSelector } from "react-redux";
import Header from "./components/Header";
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
      </S.AccountingCardContainer>
    </S.AppContainer>
  );
}

export default App;
