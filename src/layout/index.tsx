import { FC, ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../styles/GlobalStyles";
import theme from "../../styles/theme";
import SEO from "./SEO";
type Props = {
  children:  number | string | ReactElement | null
}
const BasicLayout:FC<Props> = ({children}) => {
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
export default BasicLayout;
