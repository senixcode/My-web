import { css } from "styled-components";
import { Container } from "../../../styles/system/Container";
import { Hide } from "../../../styles/system/Hide";
import { PropStyleTheme } from "../../types";
import { ProjectContent } from "../organisms/ProjectContent";
import { SocialNetworks } from "../organisms/SocialNetworks";
import { Topics } from "../organisms/Topics";

export const ProjectsContainer = () => (
  <Container
    gridTemplateColumnsXs="1fr"
    gridTemplareRowsXs={`1fr`}
    gridTemplateColumnsMd={`2.8fr 8fr 1fr`}
    gridColumGap="2em"
    styles={container}
  >
    <Topics />
    <ProjectContent />
    <Hide maxMd="none">
      <SocialNetworks />
    </Hide>
  </Container>
);
const container = css`
  padding: 0.5em;

  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    padding: 0 3em;
    height: 87vh;
    grid-row-gap: 1em;
  }
`;
