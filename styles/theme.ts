import { ITheme } from "../src/interface/Theme"

const theme: ITheme = {
  font: `Brandon Text,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif`,
  fontSizes: {
    small: "font-size: 1.25rem; line-height: 1.875rem",
    regular: "font-size: 1.5rem; line-height: 2rem",
    large: "font-size: 1.875rem; line-height: 2.5rem",
    larger: "font-size: 2.25rem; line-height: 3rem",
    xlarge: "font-size: 3rem; line-height: 3.5rem",
  },
  colors: {
    primary: "#16202a",
    primaryVariant: "#192734",
    secondary: "#e0245e",
    secondaryVariant: "#6c63fe",
    textPrimary: "#ffffff",
  },
  screen: {
    xs: "575px",
    sm: "767px",
    md: "991px",
    lg: "1199px",
  },
  sizes: {
    xs: "20px",
    sm: "40px",
    md: "80px",
    lg: "160px",
  },
}
export default theme
