import { PropStyleTheme } from "../../src/types"
import { centerItems } from "./styles"
import styled, { css } from "styled-components"
interface ContainerProps {
  gridTemplateColumnsXs: string
  gridTemplateColumnsSm: string
  gridTemplateColumnsMd: string
  gridTemplateColumnsLg: string
  gridColumGap: string
  gridTemplateRowsXs: string
  gridTemplateRowsSm: string
  gridTemplateRowsMd: string
  gridTemplateRowsLg: string
  gridRowGap: String
  gridGap: string
  height: string
  styles: css
}
export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-column-gap: ${(props: ContainerProps) => props.gridColumGap};
  grid-row-gap: ${(props: ContainerProps) => props.gridRowGap};
  grid-gap: ${(props: ContainerProps) => props.gridGap};
  grid-template-columns: ${(props: ContainerProps) =>
    props.gridTemplateColumnsXs};
  grid-template-rows: ${(props: ContainerProps) => props.gridTemplateRowsXs};
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.sm}) {
    grid-template-columns: ${(props: ContainerProps) =>
      props.gridTemplateColumnsSm};
    grid-template-rows: ${(props: ContainerProps) => props.gridTemplateRowsSm};
  }
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    grid-template-columns: ${(props: ContainerProps) =>
      props.gridTemplateColumnsMd};
    grid-template-rows: ${(props: ContainerProps) => props.gridTemplateRowsMd};
  }
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.lg}) {
    grid-template-columns: ${(props: ContainerProps) =>
      props.gridTemplateColumnsLg};
    grid-template-rows: ${(props: ContainerProps) => props.gridTemplateRowsLg};
  }
  ${centerItems}
  height:${(props: ContainerProps) => props.height};
  ${(props: ContainerProps) => props.styles};
`
