import styled from "styled-components";
import { Section as SectionGlobal } from "../../../styles/StyleComponentGlobal";
import { experiences } from "../../cmsFaker/experiences";
import { PropStyleTheme } from "../../types";
import { ContainerExperience } from "../organisms/ContainerExperience";

const ExperienceSection = () => (
  <Section>
    <ContainerExperience experiences={experiences}/>
  </Section>
);
export default ExperienceSection;
const Section = styled(SectionGlobal)`
  display: grid;
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    background: ${(props: PropStyleTheme) => props.theme.colors.primaryVariant};
  }
`;
