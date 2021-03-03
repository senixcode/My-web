import styled, { css } from "styled-components";
import { FC } from "react";
import { Container } from "../../../styles/system/Container";
import { PropStyleTheme } from "../../types";
import { Header } from "./cardProjects/Header";
import { Topics } from "./cardProjects/Topics";
import { cursorPointer } from "../../../styles/system/styles";
import Link from 'next/link'
import { IProjects } from "../../cmsFaker/projects/interfaces";
export const ProjectCard: FC<IProjects> = (props) => (
  <Container gridTemplateRowsXs={`4fr 8fr`} styles={card}>
    <Header {...props} />
    <Link href={`/detail/${props.titleSeo}`}>
    
    <Summary>{props.summary}</Summary>
    </Link>
    <Topics topics={props.topics} />
  </Container>
);

const Summary = styled.p`
  font-size: 18px;
  font-weight: 300;
  &:hover {
    text-decoration: underline;
    ${cursorPointer};
    &:after {
      font-family: "Font Awesome 5 Free";
      content: "\f0c1";
      display: inline-block;
      padding-right: 3px;
      vertical-align: middle;
      font-weight: 900;
      font-size: 15px;
    }
  }
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
    padding: 0.5em;
    /* background-color:rosybrown; */
  }
`;
