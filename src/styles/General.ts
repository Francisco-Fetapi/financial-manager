import { Typography } from "@mui/material";
import styled from "styled-components";

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
  align-items: center;
`;

export const Text = styled(Typography)`` as typeof Typography;
