import { FC } from "react";
import styled from "styled-components";
import { Slides } from "../../../styles/StyleComponentGlobal";
import { IExperience } from "../../interface/Experience";
import { CardExperience } from "../molecules/CardExperience";

type Props = {
  experiences:Array<IExperience>
}

export const ContainerExperience:FC<Props> = ({experiences}) => (
  <Container>
    <Slides>
    {experiences.map((experience, index) => (
      <CardExperience key={index} {...experience} />
      ))}
    </Slides>
  </Container>
);
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

