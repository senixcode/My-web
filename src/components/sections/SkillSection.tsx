import styled from "styled-components";
import { Section as SectionGlobal } from "../../../styles/StyleComponentGlobal";
import { ContainerSkill } from "../organisms/ContainerSkill";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";

const Content = () => <ContainerSkill />;

const SkillSection = () => (
  <Section id="skills">
    <Header title="Skills" />
    <Content />
    <Footer />
  </Section>
);
export default SkillSection;
const Section = styled(SectionGlobal)`
  display: grid;
  grid-template-rows: 1fr 8fr 1fr;
`;
