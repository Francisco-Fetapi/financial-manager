import { Box, TextField, Button, FormHelperText } from "@mui/material";
import { useDispatch } from "react-redux";
import useField from "../hooks/useField";
import { addTransaction } from "../store/App.store";
import { TextWithDivider } from "../styles/General";
import { labelTypes } from "./DebitAndCredit";

export default function AddTransactions() {
  const [nameField, handleChangeName, handleBlurName] = useField<string>();
  const [valueField, handleChangeValue, handleBlurValue] = useField<number>();
  const dispatch = useDispatch();

  function addNewTransaction() {
    const name = (typeof nameField.value === "string" && nameField.value) || "";
    const value =
      (typeof +valueField.value! === "number" && +valueField.value!) || 0;
    if (name && value) {
      dispatch(addTransaction({ name, value }));
    }
  }

  return (
    <Box mt={4}>
      <TextWithDivider>Adicionar transação</TextWithDivider>
      <Box mt={2}>
        <TextField
          variant="outlined"
          color="primary"
          size="small"
          placeholder="Nome da transação"
          fullWidth
          {...nameField}
          onChange={handleChangeName}
          onBlur={handleBlurName}
          label="Nome"
        />
      </Box>
      <Box mt={2}>
        <TextField
          variant="outlined"
          color="primary"
          size="small"
          placeholder="Valor da transação"
          fullWidth
          {...valueField}
          onChange={handleChangeValue}
          label="Valor"
          type="number"
          onBlur={handleBlurValue}
        />
        <Box mt={1}>
          <FormHelperText>
            <Box display="flex" justifyContent="space-between">
              <Box style={{ color: labelTypes.Credit }}>
                Negativo - Despesas
              </Box>
              <Box style={{ color: labelTypes.Debit }}>Positivo - Receitas</Box>
            </Box>
          </FormHelperText>
        </Box>
      </Box>
      <Box mt={2.4}>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          onClick={addNewTransaction}
        >
          Adicionar
        </Button>
      </Box>
    </Box>
  );
}
