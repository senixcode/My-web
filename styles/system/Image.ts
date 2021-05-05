import styled, { css } from "styled-components"
import { PropStyleTheme } from "../../src/types"
interface ImageProps {
  alt: string
  src: string
  widthXs: string
  widthSm: string
  widthMd: string
  widthLg: string
  styles: css
}
export const Image = styled.img.attrs<ImageProps>((props) => ({
  alt: props.alt || "my logo",
  src: props.src || "/static/my-logo-senixcode.svg",
}))<ImageProps>`
  width: ${(props) => props.widthXs};
  height: auto;
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.sm}) {
    width: ${(props) => props.widthSm};
  }
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    width: ${(props) => props.widthMd};
  }
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.lg}) {
    width: ${(props) => props.widthLg};
  }
  ${(props: ImageProps) => props.styles}
`
