import styled, { css } from "styled-components";
import { FC } from "react";
import { Container } from "../../../styles/system/Container";
import { PropStyleTheme } from "../../types";
import { Header } from "./cardProjects/Header";
import { Topics } from "./cardProjects/Topics";

export const ProjectCard: FC<{ title: string; description: string; topics:Array<string> }> = ({
  title,
  description,
  topics
}) => (
  <Container gridTemplateRowsXs={`4fr 8fr`} styles={card}>
    <Header title={title} />
    <Summary>{description}</Summary>
    <Topics topics={topics} />
  </Container>
);

const Summary = styled.p`
  font-size: 18px;
  font-weight: 300;
`;

const card = css`
  background-color: ${(props: PropStyleTheme) =>
    props.theme.colors.primaryVariant};
  border-radius: 12px;
  padding: 0.8em;
  width: 100%;

  height: auto;
  justify-items: start;
  align-items: flex-start;
  @media screen and (max-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    height: auto;
      padding: .5em;
      /* background-color:rosybrown; */
  }
`;
