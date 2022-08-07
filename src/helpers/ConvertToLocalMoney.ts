export default function ConvertToLocalMoney(money: number): string {
  return `AKZ ${Math.abs(money).toLocaleString("pt-AO", {
    minimumFractionDigits: 2,
  })}`;
}
