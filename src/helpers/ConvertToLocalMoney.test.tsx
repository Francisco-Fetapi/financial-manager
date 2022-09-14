import ConvertToLocalMoney from "./ConvertToLocalMoney";

describe("ConvertToLocalMoney", () => {
  it("should be able to convert to local money", () => {
    expect(ConvertToLocalMoney(120)).toBe("AKZ 120,00");
  });
});
