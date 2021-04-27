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

const Projects: FC<{
  projects: Array<IProjects>;
  seeMoreLang: string;
  seeLessLang: string;
}> = ({projects,seeLessLang,seeMoreLang}) => (
  <Container gridTemplateRowsMd={`1fr 1fr`} gridRowGap=".5em" styles={projects}>
    {projects.map((project) => {
      // const { description } = getResumeProject(project.summary);
      // project.summary = description;
      return <ProjectCard key={project.id}
       project={project} 
       seeMoreLang={seeMoreLang}
       seeLessLang={seeLessLang}
       />;
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
      setSeeMoreLang(locale === "en" ? "see more" : "ver mas");
      setSeeLessLang(locale === "en" ? "see less" : "ver menos");
    }
  }, [locale]);

  console.log("aqui senixcode", getProject.data?.data);

  const projects: Array<IProjects> = getProject.data && getProject.data.data;
  return (
    <Container gridTemplateRowsMd={`2fr 12fr`} styles={container}>
      {/* <Hide maxMd="none" styles={filter}>
      <Container >
        <p>filter</p>
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
    height: 77vh;
  }
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
