import { Box } from "@mui/material";
import { TextWithDivider } from "../styles/General";
import Transaction from "./Transaction";

export default function Transactions() {
  return (
    <Box mt={3}>
      <TextWithDivider>Transações</TextWithDivider>
      <Box mt={3}>
        <Transaction name="Ola Mundo" value={200} type="Debit" />
      </Box>
    </Box>
  );
}
