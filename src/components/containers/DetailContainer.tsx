import { css } from "styled-components";
import { FC } from "react";
import { Container } from "../../../styles/system/Container";
import { IProjects } from "../../cmsFaker/getProjects";
import { PropStyleTheme } from "../../types";

export const DetailContainer: FC<IProjects> = ({ title, description }) => (
  <Container styles={container}>
    <h2>{title}</h2>
    <p>{description}</p>
  </Container>
);
const container = css`
  padding: 0 1em;
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    padding: 0 3em;
  }
`;
