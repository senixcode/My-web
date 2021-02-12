import styled from "styled-components";
import { Section as SectionGlobal } from "../../../styles/StyleComponentGlobal";
import { skills } from "../../cmsFaker/skills";
import { PropStyleTheme } from "../../types";
import { ContainerSkill } from "../organisms/ContainerSkill";

const Content = () => <ContainerSkill skills={skills} />;

const SkillSection = () => (
  <Section id="skills">
    <Content />
  </Section>
);
export default SkillSection;
const Section = styled(SectionGlobal)`
  display: grid;
   background: ${(props: PropStyleTheme) => props.theme.colors.primaryVariant};
`;
