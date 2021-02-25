import { FC } from "react";
import styled, { css } from "styled-components";
import { Container } from "../../../styles/system/Container";
import { PropStyleTheme } from "../../types";
import {ProjectCard} from '../molecules/ProjectCard'
const Projects = () => (
  <Container gridTemplateRowsMd={`1fr 1fr`} gridRowGap=".5em" styles={projects}>
    <ProjectCard 
    title="title" 
    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel ipsa aliquam." 
    topics={["example","example"]}
    />
    <ProjectCard 
    title="title" 
    description="Adipisicing elit. Vel ipsa aliquam." 
     topics={["example","example","example","example","example"]}
    />
  </Container>
);
export const ProjectContent = () => (
  <Container gridTemplateRowsMd={`2fr 12fr`} styles={container}>
    {/* <Hide maxMd="none" styles={filter}>
      <Container >
        <p>filter</p>
      </Container>
    </Hide> */}
    <Projects />
  </Container>
);
const container = css`
  width: 100%;
  height: 77vh;
  justify-items:start;
`;


const filter = css`
  height: 100%;
  width: 100%;
`;
const projects = css`
  width: 100%;
  height: 100%;
  align-items:flex-start;
  justify-items:start;

     @media screen and (max-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
        display:flex;
        flex-wrap:wrap;
        flex-direction:column;
  }
`;
