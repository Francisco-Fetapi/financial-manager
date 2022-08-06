import { Box, TextField, FormLabel } from "@mui/material";
import { useState } from "react";
import { TextWithDivider } from "../styles/General";

export default function AddTransactions() {
  const [field, setField] = useState({
    value: "",
    error: false,
    helperText: "",
  });
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { value } = e.target;
    if (!value) {
      setField({ value, error: true, helperText: "Campo inválido" });
      return;
    }
    setField({ value, error: false, helperText: "" });
  }
  return (
    <Box mt={4}>
      <TextWithDivider>Adicionar transação</TextWithDivider>
      <Box mt={2}>
        <Box mb={0.7}>
          <FormLabel error={field.error}>Nome</FormLabel>
        </Box>
        <TextField
          variant="outlined"
          color="primary"
          size="small"
          placeholder="Nome da transação"
          fullWidth
          {...field}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
}
