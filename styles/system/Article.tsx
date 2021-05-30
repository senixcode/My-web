import { FC } from "react"
import styled from "styled-components"
import { PropStyleTheme } from "../../src/types"

export const Article: FC = ({ children }) => (
  <StyleArticle>{children}</StyleArticle>
)
const StyleArticle = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    display: grid;
    padding: 1rem 10rem;
  }
`
