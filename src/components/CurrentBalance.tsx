import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import ConvertToLocalMoney from "../helpers/ConvertToLocalMoney";
import { getBalance } from "../store/App.selectors";
import { Text } from "../styles/General";

export default function CurrentBalance() {
  const balance = useSelector(getBalance);
  return (
    <Box mt={3}>
      <Text variant="button">Saldo Atual</Text>
      <Text variant="h4" color="primary" fontWeight={500}>
        {ConvertToLocalMoney(balance)}
      </Text>
    </Box>
  );
}
