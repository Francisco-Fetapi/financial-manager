import { Box, IconButton } from "@mui/material";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import ConvertToLocalMoney from "../helpers/ConvertToLocalMoney";
import { removeTransaction } from "../store/App.store";
import { Text, TransactionContainer } from "../styles/General";

interface Props {
  name: string;
  value: number;
  id: number;
}

export default function Transaction({ name, value, id }: Props) {
  const dispatch = useDispatch();
  function remover() {
    dispatch(removeTransaction(id));
  }
  return (
    <Box my={1}>
      <TransactionContainer
        className={value > 0 ? "Debit" : "Credit"}
        elevation={2}
      >
        <Box display="flex" alignItems="center">
          <Box mr={0.3} className="close-button">
            <IconButton size="small" color="error" onClick={remover}>
              <MdClose />
            </IconButton>
          </Box>
          <Text variant="subtitle2">{name}</Text>
        </Box>
        <Text variant="subtitle2">
          {value > 0 ? "+" : "-"} {ConvertToLocalMoney(value)}
        </Text>
      </TransactionContainer>
    </Box>
  );
}
