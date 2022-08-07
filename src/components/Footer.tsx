import { Box } from "@mui/material";
import { Text } from "../styles/General";

export default function Footer() {
  return (
    <Box mt={4}>
      <Text variant="subtitle2" color="textSecondary" align="center">
        &copy; Copyrights - Francisco Fetapi
      </Text>
    </Box>
  );
}
