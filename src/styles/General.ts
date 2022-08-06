import { Typography, Paper } from "@mui/material";
import styled from "styled-components";
import { labelTypes } from "../components/DebitAndCredit";

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const AccountingCardContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
export const DebitAndCreditPaper = styled(Paper)`
  padding: 20px;
` as typeof Paper;

export const Text = styled(Typography)`` as typeof Typography;
export const TextWithDivider = styled(Typography)`
  padding-bottom: 8px;
  border-bottom: 1px solid #bababa;
  font-weight: 600 !important;
` as typeof Typography;

export const TransactionContainer = styled(Paper)`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.Debit {
    border-right: 6px solid ${labelTypes.Debit};
  }
  &.Credit {
    border-right: 6px solid ${labelTypes.Credit};
  }
` as typeof Paper;
