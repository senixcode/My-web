import { useRouter } from "next/router";
import { FC } from "react";
import styled, { css } from "styled-components";
import { Container } from "../../../styles/system/Container";
import { startContent, startItems } from "../../../styles/system/styles";
import { getTopics } from "../../cmsFaker/projects/function";
import { IProjects } from "../../cmsFaker/projects/interfaces";
import { PropStyleTheme } from "../../types";
import { Topics as TopicsFlex } from "../molecules/cardProjects/Topics";

export const Topics: FC<{ projects: Array<IProjects> }> = ({ projects }) => {
  const topics = getTopics(projects);
  const {locale} = useRouter();
  return (
    <Container gridTemplateRowsMd={`1fr 12fr`} styles={container}>
      <Title>{locale ==="en"? "TOPICS":"TEMAS"}</Title>
      <div>
        <TopicsFlex topics={topics} />
      </div>
    </Container>
  );
};

const container = css`
  background-color: ${(props: PropStyleTheme) =>
    props.theme.colors.primaryVariant};
  width: 100%;
  height: 80vh;
  padding: 0.5em;
  ${startContent}
  ${startItems}
  @media screen and (max-width: ${(props: PropStyleTheme) =>
    props.theme.screen.md}) {
    display: none;
  }
`;
const Title = styled.h3`
  color: ${(props: PropStyleTheme) => props.theme.colors.textPrimary};
  font-size: 18px;
  font-weight: normal;
`;
