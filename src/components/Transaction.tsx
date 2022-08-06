import { Box } from "@mui/material";
import { Text, TransactionContainer } from "../styles/General";

interface Props {
  name: string;
  value: number;
  type: "Debit" | "Credit";
}

export default function Transaction({ name, value, type }: Props) {
  return (
    <Box>
      <TransactionContainer className={type} elevation={2}>
        <Text>{name}</Text>
        <Text>{value}</Text>
      </TransactionContainer>
    </Box>
  );
}
