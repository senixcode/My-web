import styled, { css } from "styled-components"
import { Container } from "../../../styles/system/Container"
import { Button } from "../../../styles/system/Button"
import { PropStyleTheme } from "../../types"
import { memo, useEffect, useRef } from "react"
import { useMultiLanguage } from "../../hook/useMultiLanguage"
import { getOptions } from "../../helper/typedjs"
import Typed, { TypedOptions } from "typed.js"
import { useRouter } from "next/router"
import { TypeReducerMultiLanguage } from "../../hook/language/types"

const AboutMeContent = () => {
  const { locale } = useRouter()
  const { titleAboutMe } = useMultiLanguage(
    TypeReducerMultiLanguage.TITLE_ABOUTME
  )
  const { first, selfWritten } = titleAboutMe
  const options: TypedOptions = getOptions(selfWritten)
  const titleRef = useRef<HTMLHeadingElement>(null)

  let typed: Typed
  useEffect(() => {
    if (titleRef?.current && options) {
      typed = new Typed(titleRef?.current, options)
    }
    return () => {
      typed && typed.destroy()
    }
  }, [locale, options])

  return (
    <Container
      gridTemplateRowsXs={"6fr 1fr"}
      gridTemplateRowsMd={"9fr 2fr"}
      styles={justifyItems}
    >
      <Title>
        {`${first} `}
        <span ref={titleRef}></span>
      </Title>
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
export default memo(AboutMeContent)

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
