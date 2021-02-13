import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import { PropStyleTheme } from "../../types";
import { Section as SectionGLobal } from "../../../styles/StyleComponentGlobal";
import { paragraphs } from "../../cmsFaker/aboutMe";

const Content = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 1024, itemsToShow: paragraphs.length, itemsToScroll: paragraphs.length },
  ];
  return (
    <Center>
      <Carousel isRTL={false} breakPoints={breakPoints} className="carusel">
        {paragraphs.map((paragraph,index) => (
          <Paragraph key={index}>{paragraph}</Paragraph>
        ))}
      </Carousel>
    </Center>
  );
};

const AboutMeSection = () => (
  <Section id="about-me">
    <Content />
  </Section>
);
export default AboutMeSection;
const Section = styled(SectionGLobal)`
  display: grid;
`;
const Center = styled.h3`
  display: flex;
  align-items: center;
  text-align: center;
`;
const Paragraph = styled.div`
  line-height: 1.05em;
  color: ${(props: PropStyleTheme) => props.theme.colors.textPrimary};
  font-size: 1.7em;
  padding: 0.2em;
  height: 100%;
  font-weight: 365;
  border-color: ${(props: PropStyleTheme) => props.theme.colors.textPrimary};
  outline: none;
`;
