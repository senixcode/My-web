import styled, { css } from "styled-components"
import { Container } from "../../../styles/system/Container"
import { Button } from "../../../styles/system/Button"
import { PropStyleTheme } from "../../types"
import { useEffect, useRef } from "react"
import Typed from "typed.js"
import { MiddlwareHookApolloClient } from "../common/MiddelwareHookApolloClient"
import useTitleAboutMe from "../../hook/useTitleAboutMe"

export const Content = () => {
  const { getAboutMe, data, options, locale } = useTitleAboutMe()
  const titleRef = useRef<HTMLHeadingElement>(null)
  let typed: Typed
  useEffect(() => {
    if (titleRef?.current && options) {
      typed = new Typed(titleRef?.current, options)
    }
    return () => {
      typed && typed.destroy()
    }
  }, [data, options])
  return (
    <Container
      gridTemplateRowsXs={"6fr 1fr"}
      gridTemplateRowsMd={"9fr 2fr"}
      styles={justifyItems}
    >
      <MiddlwareHookApolloClient {...getAboutMe}>
        {data.state && (
          <Title>
            {`${data.first} `}
            <span ref={titleRef}></span>
          </Title>
        )}
      </MiddlwareHookApolloClient>
      <a
        href={`pdf/cv-${locale}.pdf`}
        target="_blank"
        style={{ textDecoration: "none", color: "#fff" }}
        rel="noreferrer"
      >
        <Button width="6em" height="2.6em" borderRadius="12px" styles={button}>
          <Container
            gridTemplateColumnsXs={"1fr 1fr"}
            gridColumGap="0.2em"
            styles={fileDownload}
          >
            <i className="fas fa-file-download" />
            <p>cv</p>
          </Container>
        </Button>
      </a>
    </Container>
  )
}
const Title = styled.h1`
  color: ${(props: PropStyleTheme) => props.theme.colors.textPrimary};
`
const justifyItems = css`
  text-align: center;
  justify-items: center;
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    text-align: start;
    justify-items: start;
  }
`
const button = css`
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    width: 8em;
    height: 3.5em;
  }
`
const fileDownload = css`
  & > i {
    font-size: 20px;
  }
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.sm}) {
    & > i {
      font-size: 25px;
    }
  }

  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    & > i {
      font-size: 30px;
    }
  }
`
