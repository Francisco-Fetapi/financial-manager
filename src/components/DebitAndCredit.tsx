import { Box, Grid, Divider } from "@mui/material";
import { green, red } from "@mui/material/colors";
import ConvertToLocalMoney from "../helpers/ConvertToLocalMoney";
import { DebitAndCreditPaper, Text } from "../styles/General";

export default function DebitAndCredit() {
  return (
    <Box mt={3}>
      <DebitAndCreditPaper elevation={3}>
        <Grid container justifyContent="space-between">
          <Grid item xs={5}>
            <Label label="Receitas" value={0} type="Debit" />
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs={5}>
            <Label label="Despesas" value={0} type="Credit" />
          </Grid>
        </Grid>
      </DebitAndCreditPaper>
    </Box>
  );
}

// type LabelTypes = 'Debit'|'Credit';
interface LabelProps {
  label: string;
  value: number;
  type: keyof LabelTypes;
}
export interface LabelTypes {
  Debit: string;
  Credit: string;
}
export const labelTypes: LabelTypes = {
  Debit: green[400],
  Credit: red[400],
};

export function Label({ label, value, type }: LabelProps) {
  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Text variant="button" fontWeight={600}>
        {label}
      </Text>
      <Text style={{ color: labelTypes[type] }}>
        {ConvertToLocalMoney(value)}
      </Text>
    </Box>
  );
}
