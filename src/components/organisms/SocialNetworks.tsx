import { Fragment, memo } from "react"
import { css } from "styled-components"
import { Container } from "../../../styles/system/Container"
import { cursorPointer, centerAbsolute } from "../../../styles/system/styles"
import {
  ICON_GITHUB,
  ICON_LINKEDIN,
  ICON_GMAIL,
  ICON_TWITTER,
} from "../../globalVariables/icons"
import { PropStyleTheme } from "../../types"
const sendEmail = () =>
  window !== undefined ? window.open("mailto:codesenix@gmail.com") : null
const socialNetworks: Array<{ link: string; name: string; icon: string }> = [
  {
    link: "https://twitter.com/senixcode",
    name: "twitter",
    icon: ICON_TWITTER,
  },
  { link: "https://t.me//senixcode", name: "gmail", icon: ICON_GMAIL },
  { link: "https://github.com/senixcode/", name: "github", icon: ICON_GITHUB },
  {
    link: "https://www.linkedin.com/in/senixcode-developer/",
    name: "linkedin",
    icon: ICON_LINKEDIN,
  },
]
const gridSocialNetworks = "1fr 1fr 1fr 1fr"
const SocialNetworks = () => (
  <Container
    gridTemplateRowsXs="1fr"
    gridTemplateColumnsXs={gridSocialNetworks}
    gridTemplateColumnsMd="1fr"
    gridTemplateRowsMd={gridSocialNetworks}
    gridGap=".8em"
    styles={container}
  >
    {socialNetworks.map((socialNetwork, i) => (
      <Fragment key={i}>
        {socialNetwork.name === "gmail" ? (
          <Container styles={imageContainer} onClick={sendEmail}>
            <i className={socialNetwork.icon} />
          </Container>
        ) : (
          <a
            href={socialNetwork.link}
            target="_blank"
            title={`icon ${socialNetwork.name}`}
            style={{ textDecoration: "none" }}
            rel="noreferrer"
          >
            <Container styles={imageContainer}>
              <i className={socialNetwork.icon} />
            </Container>
          </a>
        )}
      </Fragment>
    ))}
  </Container>
)
export default memo(SocialNetworks)
const container = css`
  ${centerAbsolute}
  bottom:1em;
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    display: grid;
    position: static;
  }
`
const imageContainer = css`
  ${cursorPointer}
  width: 2.8em;
  height: 2.8em;
  border-radius: 50%;
  & > i {
    color: ${(props: PropStyleTheme) => props.theme.colors.secondaryVariant};
    font-size: 25px;
  }
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.sm}) {
    background-color: ${(props: PropStyleTheme) =>
      props.theme.colors.secondary};
    & > i {
      color: ${(props: PropStyleTheme) => props.theme.colors.primaryVariant};
      font-size: 29px;
    }
  }
`
