import { FC } from "react";
import { css } from "styled-components";
import { Container } from "../../../styles/system/Container";
import { Hide } from "../../../styles/system/Hide";
import { IProjects } from "../../cmsFaker/projects/interfaces";
import { PropStyleTheme } from "../../types";
import { ProjectContent } from "../organisms/ProjectContent";
import { SocialNetworks } from "../organisms/SocialNetworks";
import { Topics } from "../organisms/Topics";

export const ProjectsContainer: FC<{ projects: Array<IProjects> }> = ({
  projects,
}) => (
  <Container
    gridTemplateColumnsXs="1fr"
     gridTemplareRowsXs={`1fr`}
    gridTemplateColumnsMd={`2.5fr 8fr 1fr`}
    gridColumGap="1em"
    styles={container}
  >
    <Topics />
    <ProjectContent projects={projects} />
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
