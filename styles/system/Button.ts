import { PropStyleTheme } from "../../src/types";
import styled, { css } from "styled-components";
import { centerContent, centerItems, cursorPointer } from "./styles";
interface ButtonProps {
  width: string;
  height: string;
  borderRadius: string;
  color: css;
  background: css;
  styles: css;
}
export const Button = styled.div`
  display: flex;
  border: none;
  ${(props: ButtonProps) => (props.color ? props.color : colorDefault)};
  ${(props: ButtonProps) =>
    props.background ? props.background : backgroundDefault};
  ${centerItems}
  ${centerContent}
  ${cursorPointer}
  width:${(props: ButtonProps) => props.width};
  height: ${(props: ButtonProps) => props.height};
  border-radius: ${(props: ButtonProps) => props.borderRadius};
  ${(props: ButtonProps) => props.styles};
`;

const colorDefault = css`
  color: ${(props: PropStyleTheme) => props.theme.colors.textPrimary};
`;
const backgroundDefault = css`
  background-color: ${(props: PropStyleTheme) =>
    props.theme.colors.secondaryVariant};
`;
