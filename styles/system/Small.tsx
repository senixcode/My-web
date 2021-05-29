import { FC } from "react"
import styled from "styled-components"
import { PropStyleTheme } from "../../src/types"
export const Small: FC = ({ children }) => <StyleSmall>{children}</StyleSmall>

const StyleSmall = styled.small`
  font-size: ${(props: PropStyleTheme) => props.theme.fontSizes.small};
  color: rgb(117, 118, 118, 1);
`
