import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import styled, { css } from "styled-components";
import { Container } from "../../../styles/system/Container";
import { startContent, startItems } from "../../../styles/system/styles";
import { GET_TOPIC } from "../../graphql/querys/topic";
import { ITopic } from "../../interface/Topic";
import { PropStyleTheme } from "../../types";
import { MiddlwareHookApolloClient } from "../common/MiddelwareHookApolloClient";
import { Topics as TopicsFlex } from "../molecules/cardProjects/Topics";

export const Topics = () => {
  const getTopic = useQuery(GET_TOPIC);
  const topics: Array<ITopic> =
    getTopic.data && (getTopic.data.data as Array<ITopic>);

  const { locale } = useRouter();
  return (
    <Container gridTemplateRowsMd={`1fr 12fr`} styles={container}>
      <Title>{locale === "en" ? "TOPICS" : "TEMAS"}</Title>
      <MiddlwareHookApolloClient {...getTopic}>
        <div>{topics && <TopicsFlex topics={topics} />}</div>
      </MiddlwareHookApolloClient>
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
