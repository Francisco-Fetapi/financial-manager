// Imports
import { render } from "@testing-library/react";
import user from "@testing-library/user-event";
import { AppSetup } from "../test";
import AddTransactions from "./AddTransactions";
import Transactions from "./Transactions";

describe("Transaction", () => {
  test("it should be able to remove some Transaction individually", async () => {
    const { queryByText, getByText, getByTestId } = render(
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

    await user.type(inputName, "Nova despesa");
    await user.type(inputValue, "-30");
    await user.click(btnAdd);

    expect(queryByText("Nova receita")).toBeInTheDocument();
    expect(queryByText("Nova despesa")).toBeInTheDocument();

    const btnRemoveReceita = getByTestId("nova-receita");

    await user.click(btnRemoveReceita);

    expect(queryByText("Nova receita")).not.toBeInTheDocument();
    expect(queryByText("Nova despesa")).toBeInTheDocument();
  });
});
