import styled from 'styled-components'
import { Section as SectionGlobal } from "../../../styles/StyleComponentGlobal";
import { experiences } from '../../cmsFaker/experiences';
import { ContainerExperience } from '../organisms/ContainerExperience';
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";

const Content = () => (<ContainerExperience experiences={experiences}/>)
const ExperienceSection = () => (
  <Section id="about-me">
    <Header title="Experiences"/>
    <Content />
    <Footer />
  </Section>
);
export default ExperienceSection
const Section = styled(SectionGlobal)`
  display: grid;
  grid-template-rows: 1fr 8fr 1fr;
`;