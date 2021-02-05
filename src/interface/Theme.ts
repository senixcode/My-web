interface IFontSizes {
    small: string;
    regular: string;
    large: string;
    larger: string;
    xlarge: string;
}
interface IColors {
    primary:string;
    primaryVariant:string;
    secondary:string;
    secondaryVariant:string;
    textPrimary:string;
}
interface IScreens {
    xs:string;
    sm:string;
    md:string;
    lg:string;
}
export interface ITheme  {
  font: string;
  fontSizes:IFontSizes;
  colors:IColors;
  screen: IScreens;
}