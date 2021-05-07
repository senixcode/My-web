import { Container } from "../../styles/system/Container"
import { Hide } from "../../styles/system/Hide"
import { css } from "styled-components"
import { SocialNetworks } from "../components/organisms/SocialNetworks"
import { Content } from "../components/organisms/AboutMeContent"
import { Image } from "../../styles/system/Image"
import { PropStyleTheme } from "../types"

const AboutMe = () => (
  <Container
    gridTemplateColumnsXs="1fr"
    gridTemplareRowsXs={"8fr 2fr"}
    gridTemplateColumnsMd={"4fr 6fr 1fr"}
    height="87vh"
    styles={container}
  >
    <Hide maxMd="none" styles={image}>
      <Image alt="image about me" src="/static/aboutMe.svg" styles={image} />
    </Hide>
    <Content />
    <Hide maxMd="none">
      <SocialNetworks />
    </Hide>
  </Container>
)

const container = css`
  padding: 0 1em;
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    height: 87vh;
    padding: 0 3em;
  }
`
const image = css`
  height: 90%;
`

export default AboutMe
