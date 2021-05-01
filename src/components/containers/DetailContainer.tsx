import { css } from "styled-components";
import { FC } from "react";
import { Container } from "../../../styles/system/Container";
import { startContent, startItems } from "../../../styles/system/styles";
import { PropStyleTheme } from "../../types";
import { Topics } from "../molecules/cardProjects/Topics";
import { IProjects } from "../../interface/Project";
import { Icons } from "../molecules/cardProjects/IconsHeader";

export const DetailContainer: FC<IProjects> = ({
  title,
  descriptions,
  topics,
  links,
}) => {
  return(
  <Container gridRowGap="1em" styles={container}>
    <h2>{title}</h2>
    <Container gridRowGap="1em" styles={start}>
      {descriptions &&
        descriptions.map((description, id) => <p key={id}>{description}</p>)}
    </Container>
    <Container styles={start}>
      <Icons links={links} />
    </Container>
    <Topics topics={topics} />
  </Container>
)};

const container = css`
  padding: 0 1em;
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    padding: 0 3em;
  }
`;

const start = css`
  width: 100%;
  ${startContent}
  ${startItems}
`;