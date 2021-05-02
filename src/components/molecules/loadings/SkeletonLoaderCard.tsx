import styled, {css,keyframes } from "styled-components"
import { Container } from "../../../../styles/system/Container";
import { projectStyles } from "../../organisms/ProjectContent";
import { Flex } from "../cardProjects/Topics";
import { card } from "../ProjectCard";

export const SkeletonLoaderCard = () => (
  <Container gridRowGap="1em" styles={projectStyles}>
    <Container gridTemplateRowsMd={`1fr 1fr 1fr 1fr`} styles={card}>
      <BarLinearLoading width="40%" height="1em" />
      <BarLinearLoading width="86%" height="0.7em" />
      <BarLinearLoading width="34%" height="0.7em" />
      <BarLinearLoading width="20%" height="0.7em" />
      <Flex>
        <Container styles={topic}>
          <BarLinearLoading width="5em" height="1.6em" />
        </Container>
        <Container styles={topic}>
          <BarLinearLoading width="5em" height="1.6em" />
        </Container>
        <Container styles={topic}>
          <BarLinearLoading width="5em" height="1.6em" />
        </Container>
      </Flex>
    </Container>
  </Container>
);

const loadingLinear = keyframes`
  0% {
    background-position: -100px;
  }
  100% {
    background-position: 300px;
  }
`;

const BarLinearLoading = styled.div`
  border-radius: 7px;
  background-color: #ccc;
  background-image: linear-gradient(
    90deg,
    #16202a,
    rgba(22, 32, 42, 0.9) 90px,
    #16202a 150px
  );
  background-size: 600px;
  margin-top: 0.5em;
  animation: ${loadingLinear} 1s infinite;
  width: ${(props) => props.width};
  height: ${(props) => props.height};

`;
export const topic = css`
  margin: 0.2em;
`;