import { FC } from "react";
import styled from "styled-components";
import { Slides } from "../../../styles/StyleComponentGlobal";
import { useMediaQuery } from "../../hook/useMediaQuery";
import { ExperienceImg } from "../../image/background";
import { IExperience } from "../../interface/Experience";
import { IMQuery } from "../../interface/Mquery";
import { PropStyleTheme } from "../../types";
import { CardExperience } from "../molecules/CardExperience";

type Props = {
  experiences: Array<IExperience>;
};
const Experiences: FC<Props> = ({ experiences }) => (
  <>
    {experiences.map((experience, index) => (
      <CardExperience key={index} {...experience} />
    ))}
  </>
);

const SizeMd: FC<Props> = ({ experiences }) => {
  const Img = styled.span`
     @media screen and (min-width: ${(props: PropStyleTheme) => props.theme.screen.md}) {

    display: flex;
    justify-content: center;
    /* width: auto; */
    background-color: red;
    /* height: auto; */
    /* @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.lg}) {
      width: auto;
    } */
  }

  `;
  const Container = styled.div`

    /* background-color: red; */

    @media screen and (max-width: ${(props: PropStyleTheme) => props.theme.screen.md}) {
    display:none;
   }
  `;
  const Content = styled.div`
     @media screen and (min-width: ${(props: PropStyleTheme) => props.theme.screen.md}) {
    display: grid;
    grid-template-columns: 6fr 6fr;
  }
  `;
  const Grid = styled.div`
    display: grid;
    grid-template-rows: repeat(auto-fill, 1fr);
    grid-row-gap: 0.1em;
  `;
  return (
    <Container>
      <h2>Experience</h2>
      <Content>
        <Grid>
          <Experiences experiences={experiences} />
        </Grid>

        <ExperienceImg />
        
      </Content>
    </Container>
  );
};
const SizeXs: FC<Props> = ({ experiences }) =>{
   const Container = styled(Slides)`
    @media screen and (min-width: ${(props: PropStyleTheme) => props.theme.screen.md}) {
    display:none;
  }
`;
  return(
  <Container>
    <Experiences experiences={experiences} />
  </Container>
)};
export const ContainerExperience: FC<Props> = ({ experiences }) => {
 
  return (
    <Container>
        <SizeMd experiences={experiences} />
        <SizeXs experiences={experiences} />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    display: grid;
    width: auto;
  }
`;
