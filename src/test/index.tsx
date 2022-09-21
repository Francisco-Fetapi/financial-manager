import { ThemeProvider, createTheme } from "@mui/material";
import store from "./App.store";
import { Provider, useDispatch } from "react-redux";
import { ReactNode, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { resetAllState } from "../store/App.store";
import { SnackbarProvider } from "notistack";

interface AppSetupProps {
  children: ReactNode;
}

// for testing
export function AppSetup({ children }: AppSetupProps) {
  const theme = createTheme({});
  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <ComponentWrapper>{children}</ComponentWrapper>
          </BrowserRouter>
        </ThemeProvider>
      </SnackbarProvider>
    </Provider>
  );
}

interface ComponentWrapperProps {
  children: ReactNode;
}

function ComponentWrapper({ children }: ComponentWrapperProps) {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(resetAllState(true));
    };
  }, [children]);
  return <div>{children}</div>;
}
