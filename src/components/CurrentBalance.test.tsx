// Imports
import { render } from "@testing-library/react";
import user from "@testing-library/user-event";
import { AppSetup } from "../test";
import AddTransactions from "./AddTransactions";
import CurrentBalance from "./CurrentBalance";
import Transactions from "./Transactions";

describe("AddTransaction", () => {
  test("it should be rendered correctly", () => {
    const { getByText } = render(
      <AppSetup>
        <CurrentBalance />
      </AppSetup>
    );

    expect(getByText("Saldo Atual")).toBeInTheDocument();
    expect(getByText("AKZ 0,00")).toBeInTheDocument();
  });
  test("it should be able to update when transactions list is changed", async () => {
    const { getByText, getByTestId } = render(
      <AppSetup>
        <CurrentBalance />
        <AddTransactions />
        <Transactions />
      </AppSetup>
    );

    const inputName = getByTestId("input-name");
    const inputValue = getByTestId("input-value");
    const btnAdd = getByText("Adicionar");

    await user.type(inputName, "Receita1");
    await user.type(inputValue, "120");
    await user.click(btnAdd);

    expect(getByText("AKZ 120,00")).toBeInTheDocument();

    await user.type(inputName, "Receita2");
    await user.type(inputValue, "-20");
    await user.click(btnAdd);

    expect(getByText("AKZ 100,00")).toBeInTheDocument();
  });
});
