export default function ConvertToLocalMoney(money: number): string {
  return `AKZ ${money.toLocaleString("pt-AO", { minimumFractionDigits: 2 })}`;
}
