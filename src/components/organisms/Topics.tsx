import { FC } from "react";
import styled, { css } from "styled-components";
import { Container } from "../../../styles/system/Container";
import { Hide } from "../../../styles/system/Hide";
import { PropStyleTheme } from "../../types";
import { Topic } from "../molecules/Topic";
const topics: Array<string> = [
  "docker",
  "node js",
  "react js",
  "next js",
  "atom desing",
  "svg",
  "vue js",
];

export const Topics = () => (
  <Container styles={container}>
    <Card>
      {topics.map((topic) => (
        <Topic key={topic} name={topic}/>
      ))}
    </Card>
  </Container>
);
const Card = styled(Container)`
    display:grid;
  grid-template-columns: repeat(auto-fill, minMax(6.5em, 1fr));
  grid-template-rows: repeat(auto-fill, minMax(2.5em,1fr));
  align-items: auto;
  justify-items: auto;
  width: 100%;
  height: 100%;
`;
const container = css`
  background-color: ${(props: PropStyleTheme) =>
    props.theme.colors.primaryVariant};
  width: 100%;
height:77vh;
  @media screen and (max-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    display: none;
  }
`;
