import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import { PropStyleTheme } from "../../types";
import { Section as SectionGLobal } from "../../../styles/StyleComponentGlobal";
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/Footer";

const Content = () => {
  const paragraphs: Array<string> = [
    "Hi, I'm senixcode a self-taughy developer,",
    "With three years of experience",
  ];
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  ];
  return (
    <Center>
      <Carousel isRTL={false} breakPoints={breakPoints} className="carusel">
        {paragraphs.map((paragraph) => (
          <Paragraph>{paragraph}</Paragraph>
        ))}
      </Carousel>
    </Center>
  );
};

const HomeSection = () => (
  <Section id="about-me">
    <Header title="About me"/>
    <Content />
    <Footer />
  </Section>
);
export default HomeSection;
const Section = styled(SectionGLobal)`
  display: grid;
  grid-template-rows: 1fr 8fr 1fr;
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
