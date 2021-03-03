import { css } from "styled-components";
import { FC } from "react";
import { Container } from "../../../styles/system/Container";
import { startContent,startItems } from "../../../styles/system/styles";
import { PropStyleTheme } from "../../types";
import { Topics } from "../molecules/cardProjects/Topics";
import { IProjects } from "../../cmsFaker/projects/interfaces";

export const DetailContainer: FC<IProjects> = ({ title, descriptions, topics }) => (
  <Container gridRowGap="1em" styles={container}>
    <h2>{title}</h2>
    <Container gridRowGap="1em" styles={descriptionContainer}>
    {
      descriptions && descriptions.map((description,id) => (
        <p key={id}>{description}</p>
      ))
    }
    </Container>
    <Topics topics={topics}/>
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