import { css } from "styled-components";
import { FC } from "react";
import { Container } from "../../../styles/system/Container";
import { IProjects } from "../../cmsFaker/getProjects";
import { startContent,startItems } from "../../../styles/system/styles";
import { PropStyleTheme } from "../../types";

export const DetailContainer: FC<IProjects> = ({ title, descriptions }) => (
  <Container gridRowGap="1em" styles={container}>
    <h2>{title}</h2>
    <Container gridRowGap="1em" styles={descriptionContainer}>
    {
      descriptions && descriptions.map((description,id) => (
        <p key={id}>{description}</p>
      ))
    }
    </Container>
  </Container>
);
const container = css`
  padding: 0 1em;
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    padding: 0 3em;
  }
`;
const descriptionContainer = css`
  ${startContent}
  ${startItems}
  /* @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    padding: 0 3em;
  } */
`;