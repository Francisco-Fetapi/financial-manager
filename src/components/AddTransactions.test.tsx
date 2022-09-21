// Imports
import { render } from "@testing-library/react";
import user from "@testing-library/user-event";
import { AppSetup } from "../test";
import AddTransactions from "./AddTransactions";
import Transactions from "./Transactions";

describe("AddTransaction", () => {
  test("it should be able to add new transactions", async () => {
    const { getByText, getByTestId } = render(
      <AppSetup>
        <AddTransactions />
        <Transactions />
      </AppSetup>
    );
    const inputName = getByTestId("input-name");
    const inputValue = getByTestId("input-value");
    const btnAdd = getByText("Adicionar");

    await user.type(inputName, "Nova receita");
    await user.type(inputValue, "120");
    await user.click(btnAdd);

    expect(getByText("Transação cadastrada.")).toBeInTheDocument();
    expect(getByText("Nova receita")).toBeInTheDocument();
  });
  test("it shouldn't to add new Transaction with errors", async () => {
    const { getByText, getByTestId } = render(
      <AppSetup>
        <AddTransactions />
      </AppSetup>
    );
    const inputName = getByTestId("input-name");
    const inputValue = getByTestId("input-value");
    const btnAdd = getByText("Adicionar");

    await user.type(inputValue, "120");
    await user.click(btnAdd);

    expect(getByText("Erro ao cadastrar transação.")).toBeInTheDocument();

    await user.type(inputValue, "");
    await user.type(inputName, "Nova transação");
    await user.click(btnAdd);

    expect(getByText("Erro ao cadastrar transação.")).toBeInTheDocument();
  });
});
