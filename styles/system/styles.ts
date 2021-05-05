import { css } from "styled-components"
import { PropStyleTheme } from "../../src/types"
export const centerItems = css`
  justify-items: center;
  align-items: center;
`
export const centerContent = css`
  justify-content: center;
  align-content: center;
`
export const startItems = css`
  justify-items: start;
  align-items: flex-start;
`
export const startContent = css`
  justify-content: start;
  align-content: flex-start;
`
export const cursorPointer = css`
  cursor: pointer;
`
export const scroll = css`
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props: PropStyleTheme) => props.theme.colors.secondary};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: ${(props: PropStyleTheme) => props.theme.colors.primaryVariant};
  }
`
export const centerAbsolute = css`
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  ${centerContent}
`
