import { FC } from "react"
import styled, { css } from "styled-components"
import { PropStyleTheme } from "../../src/types"
import { IcommonStyles } from "../types"

interface HideProps extends IcommonStyles {
  minXs?: string
  minSm?: string
  minMd?: string
  minLg?: string

  maxXs?: string
  maxSm?: string
  maxMd?: string
  maxLg?: string
  styles?: css
}

export const Hide: FC<HideProps> = (props) => <StyleHide {...props} />
const StyleHide = styled.div<HideProps>`
  display: ${(props: HideProps) => props.minXs};

  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.sm}) {
    display: ${(props: HideProps) => props.minSm};
  }
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    display: ${(props: HideProps) => props.minMd};
  }
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.lg}) {
    display: ${(props: HideProps) => props.minLg};
  }
  /**
  max width
  */
  @media screen and (max-width: ${(props: PropStyleTheme) =>
      props.theme.screen.xs}) {
    display: ${(props: HideProps) => props.maxXs};
  }
  @media screen and (max-width: ${(props: PropStyleTheme) =>
      props.theme.screen.sm}) {
    display: ${(props: HideProps) => props.maxSm};
  }
  @media screen and (max-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    display: ${(props: HideProps) => props.maxMd};
  }
  @media screen and (max-width: ${(props: PropStyleTheme) =>
      props.theme.screen.lg}) {
    display: ${(props: HideProps) => props.maxLg};
  }
  /* height:100%;
width:100%; */
  ${(props: HideProps) => props.styles}
`
