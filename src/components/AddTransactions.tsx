import { Box, TextField, FormLabel } from "@mui/material";
import useField from "../hooks/useField";
import { TextWithDivider } from "../styles/General";

export default function AddTransactions() {
  const [nameField, handleChangeName] = useField();
  const [valueField, handleChangeValue] = useField();

  return (
    <Box mt={4}>
      <TextWithDivider>Adicionar transação</TextWithDivider>
      <Box mt={2}>
        <Box mb={0.7}>
          <FormLabel error={nameField.error}>Nome</FormLabel>
        </Box>
        <TextField
          variant="outlined"
          color="primary"
          size="small"
          placeholder="Nome da transação"
          fullWidth
          {...nameField}
          onChange={handleChangeName}
        />
      </Box>
      <Box mt={1}>
        <Box mb={0.7}>
          <FormLabel error={valueField.error}>Valor</FormLabel>
        </Box>
        <TextField
          variant="outlined"
          color="primary"
          size="small"
          placeholder="Valor da transação"
          fullWidth
          {...valueField}
          onChange={handleChangeValue}
        />
      </Box>
    </Box>
  );
}
