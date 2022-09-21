// Imports
import { render } from "@testing-library/react";
import user from "@testing-library/user-event";
import { AppSetup } from "../test";
import AddTransactions from "./AddTransactions";
import Transactions from "./Transactions";
import DebitAndCredit from "./DebitAndCredit";

describe("AddTransaction", () => {
  test("it should be rendered correctly", () => {
    const { getAllByText, getByText } = render(
      <AppSetup>
        <DebitAndCredit />
      </AppSetup>
    );

    expect(getByText("Receitas")).toBeInTheDocument();
    expect(getAllByText("AKZ 0,00")[0]).toBeInTheDocument();

    expect(getByText("Despesas")).toBeInTheDocument();
    expect(getAllByText("AKZ 0,00")[1]).toBeInTheDocument();
  });
  test("it should be able to update when transactions list is changed", async () => {
    const { getByText, getByTestId } = render(
      <AppSetup>
        <DebitAndCredit />
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

    await user.type(inputName, "Receita2");
    await user.type(inputValue, "-20");
    await user.click(btnAdd);

    expect(getByText("Receitas")).toBeInTheDocument();
    expect(getByText("AKZ 120,00")).toBeInTheDocument();

    expect(getByText("Despesas")).toBeInTheDocument();
    expect(getByText("AKZ 20,00")).toBeInTheDocument();
  });
});
