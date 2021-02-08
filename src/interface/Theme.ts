interface IFontSizes {
  small: string;
  regular: string;
  large: string;
  larger: string;
  xlarge: string;
}
interface IColors {
  primary: string;
  primaryVariant: string;
  secondary: string;
  secondaryVariant: string;
  textPrimary: string;
}
interface ISizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}
interface IScreen extends ISizes {}
export interface ITheme {
  font: string;
  fontSizes: IFontSizes;
  colors: IColors;
  screen: IScreen;
  sizes: ISizes;
}
