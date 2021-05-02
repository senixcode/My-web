import React from "react";
import { css } from "styled-components";
import { Container } from "../../../styles/system/Container";
import { PropStyleTheme } from "../../types";
import { MiddlwareHookApolloClient } from "../common/MiddelwareHookApolloClient";
import { ProjectCard } from "../molecules/ProjectCard";
import { useProject } from "../../hook/useProject";

export const ProjectContent = () => {
  const {
    getProjectLoading,
    projects,
    seeMoreLang,
    seeLessLang,
  } = useProject();

  return (
    <Container
      gridTemplateRowsMd={`1fr 12fr`}
      gridRowGap="1em"
      styles={container}
    >
      <MiddlwareHookApolloClient {...getProjectLoading}>
        {projects && (
          <Container gridRowGap="1em" styles={projectStyles}>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                seeMoreLang={seeMoreLang}
                seeLessLang={seeLessLang}
              />
            ))}
          </Container>
        )}
      </MiddlwareHookApolloClient>
    </Container>
  );
};

const container = css`
  width: 100%;
  justify-items: start;
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    grid-template-rows: 1fr;
    width: 100%;
    justify-items: start;
  }
`;

export const projectStyles = css`
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-items: start;
  transition: 0.3s all ease;

  @media screen and (max-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;
