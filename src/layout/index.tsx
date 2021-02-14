import { FC, ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../styles/GlobalStyles";
import theme from "../../styles/theme";
import SEO from "./SEO";

const Layout:FC = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO />
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  );
};
export default Layout;
