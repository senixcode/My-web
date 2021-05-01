import { AppProps } from "next/app";
// import { ContextWrapper } from "./ContextWrapper";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import GlobalStyles from "../../styles/GlobalStyles";
import Header from "../components/containers/header";
import { client } from "../graphql/config";
import { ApolloProvider } from "@apollo/client";
import Seo from "../components/common/Seo";
import dynamic from "next/dynamic";
const DynamicContextWrapper = dynamic(
  () => {
    return import("./ContextWrapper")
  },
  {ssr:false}
)
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Seo />
        <DynamicContextWrapper>
          {pageProps.statusCode != 404 && <Header />}
          <Component {...pageProps} />
        </DynamicContextWrapper>
      </ThemeProvider>
    </ApolloProvider>
  );
}
