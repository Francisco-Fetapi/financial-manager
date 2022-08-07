import { Box, TextField, Button, FormHelperText } from "@mui/material";
import { useDispatch } from "react-redux";
import useField from "../hooks/useField";
import { addTransaction } from "../store/App.store";
import { TextWithDivider } from "../styles/General";
import { labelTypes } from "./DebitAndCredit";
import { useSnackbar } from "notistack";
import { FormEventHandler } from "react";

export default function AddTransactions() {
  const [nameField, handleChangeName, handleBlurName, clearName] =
    useField<string>();
  const [valueField, handleChangeValue, handleBlurValue, clearValue] =
    useField<number>();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const addNewTransaction: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const name = (typeof nameField.value === "string" && nameField.value) || "";
    const value =
      (typeof +valueField.value! === "number" && +valueField.value!) || 0;
    if (name && value) {
      dispatch(addTransaction({ name, value }));
      clearName();
      clearValue();
      enqueueSnackbar("Transação cadastrada.", { variant: "success" });
    } else {
      enqueueSnackbar("Erro ao cadastrar transação.", { variant: "error" });
    }
  };

  return (
    <Box mt={4} component="form" onSubmit={addNewTransaction}>
      <TextWithDivider>Adicionar transação</TextWithDivider>
      <Box mt={2}>
        <TextField
          variant="outlined"
          color="primary"
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
        <Button type="submit" color="primary" variant="contained" fullWidth>
          Adicionar
        </Button>
      </Box>
    </Box>
  );
}
