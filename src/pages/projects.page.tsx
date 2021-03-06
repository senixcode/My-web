import { Container } from "../../styles/system/Container"
import { Hide } from "../../styles/system/Hide"
import { ProjectContent } from "../components/organisms/ProjectContent"
import SocialNetworks from "../components/organisms/SocialNetworks"
import Topics from "../components/organisms/Topics"
import { PropStyleTheme } from "../types"
import { css } from "styled-components"

export default function Project() {
  return (
    <Container
      gridTemplateColumnsXs="1fr"
      gridTemplateColumnsMd={"2.8fr 8fr 1fr"}
      gridTemplateRowsMd={"1fr"}
      gridColumGap="2em"
      styles={container}
    >
      <Topics />
      <ProjectContent />
      <Hide maxMd="none" styles={containerSocialNetworks}>
        <SocialNetworks />
      </Hide>
    </Container>
  )
}

const container = css`
  padding: 0.5em;

  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    padding: 1.5em 3em;
    align-items: start;
  }
`

const containerSocialNetworks = css`
  position: -webkit-sticky;
  position: sticky;
  top: 4em;
  padding-top: 9em;
`
