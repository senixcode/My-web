import styled, { css } from "styled-components";
import { PropStyleTheme } from "../../src/types";
interface LinkProps {
  title: string;
  href: string;
  fontSizeXs: string;
  fontSizeSm: string;
  fontSizeMd: string;
  fontSizeLg: string;
  styles: css;
}
export const Link = styled.a.attrs<LinkProps>((props) => ({
  title: `icon ${props.title}`,
  href: props.href,
  target: "_blank",
}))`
  color: ${(props: PropStyleTheme) => props.theme.colors.textPrimary};
  font-size : ${(props: LinkProps) => props.fontSizeXs};
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.sm}) {
    font-size: ${(props: LinkProps) => props.fontSizeSm};
  }
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    font-size: ${(props: LinkProps) => props.fontSizeMd};
  }
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.lg}) {
    font-size: ${(props: LinkProps) => props.fontSizeLg};
  }
  ${(props: LinkProps) => props.styles}
`;
