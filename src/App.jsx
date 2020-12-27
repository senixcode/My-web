import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Navbar } from "./components/atoms/Navbar";
import { Box, Container, CssBaseline } from "@material-ui/core";
import { useDarkMode } from "./hooks/useDarkMode";
import { RouterSetup } from "./RouterSetup";
import { BrowserRouter } from "react-router-dom";

function App() {
  const { theme, handleSwitchTheme } = useDarkMode();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <BrowserRouter>
        <Container maxWidth="md">
          <Box>
            <Navbar handleSwitchTheme={handleSwitchTheme} />
            <RouterSetup />
          </Box>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
