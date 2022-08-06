import { Box } from "@mui/material";
import ConvertToLocalMoney from "../helpers/ConvertToLocalMoney";
import { Text } from "../styles/General";

export default function CurrentBalance() {
  return (
    <Box mt={3}>
      <Text variant="button">Saldo Atual</Text>
      <Text variant="h4">{ConvertToLocalMoney(0)}</Text>
    </Box>
  );
}
