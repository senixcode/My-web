import { PropStyleTheme } from "../../src/types"

import styled from "styled-components"
interface NavProps {
  selected: boolean
}
export const Nav = styled("h2")<NavProps>`
  cursor: pointer;
  border-bottom: ${({ selected }) => (selected ? "2px" : "0px")} solid
    ${(props: PropStyleTheme) => props.theme.colors.secondary};
`
