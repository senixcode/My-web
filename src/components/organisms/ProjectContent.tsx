import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { FC } from "react";
import styled, { css } from "styled-components";
import { Container } from "../../../styles/system/Container";
import { IProjects } from "../../interface/Project";
import { GET_PROJECT } from "../../graphql/querys/project";
import { PropStyleTheme } from "../../types";
import { MiddlwareHookApolloClient } from "../common/MiddelwareHookApolloClient";
import { ProjectCard } from "../molecules/ProjectCard";
import { Hide } from "../../../styles/system/Hide";
import { Topics } from "../molecules/cardProjects/Topics";
import { ITopic } from "../../interface/Topic";
import { startContent, startItems } from "../../../styles/system/styles";

const Projects: FC<{
  projects: Array<IProjects>;
  seeMoreLang: string;
  seeLessLang: string;
}> = ({ projects, seeLessLang, seeMoreLang }) => (
  <Container gridRowGap="1em" styles={projectStyles}>
    {projects.map((project) => {
      // const { description } = getResumeProject(project.summary);
      // project.summary = description;
      return (
        <ProjectCard
          key={project.id}
          project={project}
          seeMoreLang={seeMoreLang}
          seeLessLang={seeLessLang}
        />
      );
    })}
  </Container>
);

export const ProjectContent = () => {
  let { locale } = useRouter();
  const [seeMoreLang, setSeeMoreLang] = React.useState<string>(
    locale === "en" ? "see more" : "ver mas"
  );
  const [seeLessLang, setSeeLessLang] = React.useState<string>(
    locale === "en" ? "see less" : "ver menos"
  );
  const LANGUAGE = (locale as string).toLocaleUpperCase();
  let getProject = useQuery(GET_PROJECT, {
    variables: { param: LANGUAGE },
  });
  React.useEffect(() => {
    if (locale) {
      setSeeMoreLang(locale === "en" ? "...see more" : "...ver mas");
      setSeeLessLang(locale === "en" ? "see less" : "ver menos");
    }
  }, [locale]);

  console.log("aqui senixcode", getProject.data?.data);

  const projects: Array<IProjects> = getProject.data && getProject.data.data
  return (
    <Container
      gridTemplateRowsMd={`1fr 12fr`}
      gridRowGap="1em"
      styles={container}
    >
      {/* <Hide maxMd="none" styles={filter}>
        <Container>
        </Container>
      </Hide> */}
      <MiddlwareHookApolloClient {...getProject}>
        {projects && (
          <Projects
            projects={projects}
            seeMoreLang={seeMoreLang}
            seeLessLang={seeLessLang}
          />
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
        grid-template-rows:1fr;
          width: 100%;
            /* height:auto; */
    /* height: 77vh; */
     justify-items: start;
  
  }
`;

const filter = css`
  height: 100%;
  width: 100%;
`;
const projectStyles = css`
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
