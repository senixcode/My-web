import { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import theme from "../../styles/theme"
import GlobalStyles from "../../styles/GlobalStyles"
import Header from "../components/containers/header"
import Seo from "../components/common/Seo"
import dynamic from "next/dynamic"
const DynamicContextWrapper = dynamic(
  () => {
    return import("./ContextWrapper")
  },
  { ssr: false }
)
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Seo />
      <DynamicContextWrapper>
        {pageProps.statusCode !== 404 && <Header />}
        <Component {...pageProps} />
      </DynamicContextWrapper>
    </ThemeProvider>
  )
}
