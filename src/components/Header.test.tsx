// Imports
import { render } from "@testing-library/react";
import { AppSetup } from "../test";
import Header from "./Header";

describe("Header", () => {
  test("it should renders correctly", async () => {
    const { getByText } = render(
      <AppSetup>
        <Header />
      </AppSetup>
    );
    expect(getByText("Controle de Despesas")).toBeInTheDocument();
  });
});
