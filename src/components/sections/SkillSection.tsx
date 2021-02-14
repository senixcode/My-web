import styled from "styled-components";
import { Section as SectionGlobal } from "../../../styles/StyleComponentGlobal";
import { skills } from "../../cmsFaker/skills";
import { PropStyleTheme } from "../../types";
import { ContainerSkill } from "../organisms/ContainerSkill";

const Content = () => <ContainerSkill skills={skills} />;

const SkillSection = () => (
  <Section>
    <Content />
  </Section>
);
export default SkillSection;
const Section = styled(SectionGlobal)`
  display: grid;
   background: ${(props: PropStyleTheme) => props.theme.colors.primaryVariant};
      @media screen and (min-width: ${(props: PropStyleTheme) => props.theme.screen.md}){
                   background: ${(props: PropStyleTheme) => props.theme.colors.primary};
        }
`;
