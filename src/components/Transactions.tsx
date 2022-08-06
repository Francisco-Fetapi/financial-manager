import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { getAllTransactions } from "../store/App.selectors";
import { Text, TextWithDivider } from "../styles/General";
import Transaction from "./Transaction";

export default function Transactions() {
  const transactions = useSelector(getAllTransactions);
  console.log(transactions);
  return (
    <Box mt={3}>
      <TextWithDivider>Transações</TextWithDivider>
      <Box mt={3}>
        {transactions.map(({ name, value }, key) => (
          <Transaction name={name} value={value} id={key} />
        ))}
      </Box>
      {transactions.length === 0 && (
        <Text align="center" color="textSecondary" variant="subtitle2">
          Nenhuma transação registrada.
        </Text>
      )}
    </Box>
  );
}
