import styled from 'styled-components'
import { Section as SectionGlobal } from "../../../styles/StyleComponentGlobal";
import { experiences } from '../../cmsFaker/experiences';
import { ContainerExperience } from '../organisms/ContainerExperience';

const Content = () => (<ContainerExperience experiences={experiences}/>)
const ExperienceSection = () => (
  <Section id="about-me">
    <Content />
  </Section>
);
export default ExperienceSection
const Section = styled(SectionGlobal)`
  display: grid;
`;