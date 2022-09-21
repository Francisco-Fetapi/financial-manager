// Imports
import { render } from "@testing-library/react";
import user from "@testing-library/user-event";
import useActionsSpeedDial from "../hooks/useActionsSpeedDial";
import { AppSetup } from "../test";
import AddTransactions from "./AddTransactions";
import Transactions from "./Transactions";
// import SpeedDialTooltip from "./SpeedDial";

function SpeedDialTooltip() {
  const actions = useActionsSpeedDial();
  return (
    <div>
      {actions.map((action) => (
        <button onClick={action.onClick}>{action.name}</button>
      ))}
    </div>
  );
}

describe("SpeedDial", () => {
  test("it should be able to remove all", async () => {
    const { queryByText, getByText, getByTestId } = render(
      <AppSetup>
        <AddTransactions />
        <SpeedDialTooltip />
        <Transactions />
      </AppSetup>
    );

    const inputName = getByTestId("input-name");
    const inputValue = getByTestId("input-value");
    const btnAdd = getByText("Adicionar");

    await user.type(inputName, "Nova receita");
    await user.type(inputValue, "120");
    await user.click(btnAdd);

    expect(queryByText("Nova receita")).toBeInTheDocument();

    const removeAll = getByText("Apagar tudo");
    await user.click(removeAll);

    expect(queryByText("Nova receita")).not.toBeInTheDocument();
  });
  test("it should be able to remove all debits", async () => {
    const { queryByText, getByText, getByTestId } = render(
      <AppSetup>
        <AddTransactions />
        <SpeedDialTooltip />
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

    const removeAll = getByText("Apagar receitas");
    await user.click(removeAll);

    expect(queryByText("Nova receita")).not.toBeInTheDocument();
    expect(queryByText("Nova despesa")).toBeInTheDocument();
  });
  test("it should be able to remove all credits", async () => {
    const { queryByText, getByText, getByTestId } = render(
      <AppSetup>
        <AddTransactions />
        <SpeedDialTooltip />
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

    const removeAll = getByText("Apagar despesas");
    await user.click(removeAll);

    expect(queryByText("Nova despesa")).not.toBeInTheDocument();
    expect(queryByText("Nova receita")).toBeInTheDocument();
  });
});
