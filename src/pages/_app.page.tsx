import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import { ContextWrapper } from "./ContextWrapper";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import GlobalStyles from "../../styles/GlobalStyles";
import SEO from "../../next-seo.config";
import Header from "../components/containers/header";

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DefaultSeo {...SEO} />
      <ContextWrapper>
        <Header />
        <Component {...pageProps} />
      </ContextWrapper>
    </ThemeProvider>
  );
}
