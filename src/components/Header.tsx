import { Box } from "@mui/material";
import { Text } from "../styles/General";

export default function Header() {
  return (
    <Box>
      <Text
        align="center"
        variant="h6"
        style={{ textTransform: "uppercase", fontWeight: "bold" }}
      >
        Controle de Despesas
      </Text>
    </Box>
  );
}
