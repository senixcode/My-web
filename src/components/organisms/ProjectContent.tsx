import { FC } from "react";
import styled, { css } from "styled-components";
import { Container } from "../../../styles/system/Container";
import { IProjects } from "../../cmsFaker/getProjects";
import { getResumeProject } from "../../helper/getResumeProject";
import { PropStyleTheme } from "../../types";
import { ProjectCard } from "../molecules/ProjectCard";
const Projects: FC<{ projects: Array<IProjects> }> = (props) => (
  <Container gridTemplateRowsMd={`1fr 1fr`} gridRowGap=".5em" styles={projects}>
    {props.projects.map((project) => {
      const {description} = getResumeProject(project.description)
      return(
      <ProjectCard
      key={project.id}
        title={project.title}
        description={description}
        topics={project.topics}
      />
    )})}
  </Container>
);
export const ProjectContent:FC<{ projects: Array<IProjects> }> = (props) => (
  <Container gridTemplateRowsMd={`2fr 12fr`} styles={container}>
    {/* <Hide maxMd="none" styles={filter}>
      <Container >
        <p>filter</p>
      </Container>
    </Hide> */}
    <Projects projects={props.projects} />
  </Container>
);
const container = css`
  width: 100%;
  height: 77vh;
  justify-items: start;
`;

const filter = css`
  height: 100%;
  width: 100%;
`;
const projects = css`
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-items: start;

  @media screen and (max-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;
