import { FC } from "react"
import { PropStyleTheme } from "../../src/types"
import styled from "styled-components"

interface NavProps {
  selected?: boolean
}
export const Nav: FC<NavProps> = (props) => <StyleNav {...props} />
const StyleNav = styled("h2")<NavProps>`
  cursor: pointer;
  width: 100%;
  border-bottom: ${({ selected }) => (selected ? "2px" : "0px")} solid
    ${(props: PropStyleTheme) => props.theme.colors.secondary};
`
