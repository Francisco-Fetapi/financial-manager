import { Box, TextField, Button } from "@mui/material";
import useField from "../hooks/useField";
import { TextWithDivider } from "../styles/General";

export default function AddTransactions() {
  const [nameField, handleChangeName, handleBlurName] = useField();
  const [valueField, handleChangeValue, handleBlurValue] = useField();

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
      </Box>
      <Box mt={2.4}>
        <Button color="primary" variant="contained" fullWidth>
          Adicionar
        </Button>
      </Box>
    </Box>
  );
}
