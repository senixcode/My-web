import { AppProps } from "next/app";
import { ContextWrapper } from "./ContextWrapper";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import GlobalStyles from "../../styles/GlobalStyles";
import Header from "../components/containers/header";
import { client } from "../graphql/config";
import { ApolloProvider } from "@apollo/client";
import Seo from "../components/common/Seo";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Seo />
        <ContextWrapper>
          {pageProps.statusCode != 404 && <Header />}
          <Component {...pageProps} />
        </ContextWrapper>
      </ThemeProvider>
    </ApolloProvider>
  );
}
