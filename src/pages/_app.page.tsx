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
      <DefaultSeo
        {...SEO}
        additionalMetaTags={[
          {
            property: "dc:creator",
            content: "senixcode",
          },
          {
            name: "senixcode",
            content: "About me, full stack developer, open source projects.",
          },
          {
            httpEquiv: "x-ua-compatible",
            content: "IE=edge; chrome=1",
          },
        ]}
        languageAlternates={[{
           hrefLang: 'es',
           href: 'https://www.senixcode.dev/es',
        }]}
      />
      <ContextWrapper>
        {pageProps.statusCode != 404 && <Header />}
        <Component {...pageProps} />
      </ContextWrapper>
    </ThemeProvider>
  );
}
