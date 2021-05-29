import { FC } from "react"
import styled, { css } from "styled-components"
import { PropStyleTheme } from "../../src/types"
import { IcommonStyles } from "../types"
interface MasonryProps extends IcommonStyles {
  columnsXs?: String
  gapXs?: number
  columnsSm?: String
  gapSm?: number
  columnsMd?: String
  gapMd?: number
  columnsLg?: String
  gapLg?: number
  height?: string
  styles?: css
}
export const Masonry: FC<MasonryProps> = ({
  children,
  gapXs = "0.5em",
  gapSm = "1em",
  columnsXs = 1,
  columnsSm = 2,
  columnsMd = 2,
  columnsLg = 4,
  ...others
}) => (
  <StyleMasonry
    gapXs={gapXs}
    gapSm={gapSm}
    columnsXs={columnsXs}
    columnsSm={columnsSm}
    columnsMd={columnsMd}
    columnsLg={columnsLg}
    {...others}
  >
    {children}
  </StyleMasonry>
)

const StyleMasonry = styled.div<MasonryProps>`
  --gap: ${(props: MasonryProps) => props.gapXs};
  --columns: ${(props: MasonryProps) => props.columnsXs};
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.xs}) {
    --gap: ${(props: MasonryProps) => props.gapXs};
    --columns: ${(props: MasonryProps) => props.columnsXs};
  }
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.sm}) {
    --gap: ${(props: MasonryProps) => props.gapSm};
    --columns: ${(props: MasonryProps) => props.columnsSm};
  }
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    --gap: ${(props: MasonryProps) => props.gapMd};
    --columns: ${(props: MasonryProps) => props.columnsMd};
  }
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.lg}) {
    --gap: ${(props: MasonryProps) => props.gapLg};
    --columns: ${(props: MasonryProps) => props.columnsLg};
  }

  max-width: 60rem;
  margin: 0 auto;
  display: column;
  columns: var(--columns);
  gap: var(--gap);
  & > * {
    break-inside: avoid;
    margin-bottom: var(--gap);
  }
`
