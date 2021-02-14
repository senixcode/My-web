import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import { PropStyleTheme } from "../../types";
import { Section as SectionGLobal } from "../../../styles/StyleComponentGlobal";
import { paragraphs } from "../../cmsFaker/aboutMe";
import ThemeStyle from "../../../styles/theme";
import { getNumber } from "../../helper/getNumber";
import { useMediaQuery } from "../../hook/useMediaQuery";
import { IMQuery } from "../../interface/Mquery";
import { AboutMeImg } from "../../image/background";

const SizeLg = () => {
  const Container = styled.div`
    display: grid;
    grid-template-rows: 1.5fr 8fr;

  `;
  const Img = styled.div`
    display: flex;
    justify-content: center;
   width:30em;
    height:auto;
    @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.lg}) {
       width:45em;
    }
  `;

  const Grid = styled.div`
    display: grid;
    grid-template-columns: 8fr 4fr;
    @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.lg}) {
        grid-template-columns: 6fr 6fr;
        /* background-color:red; */
    }
  `;

  return (
    <div>
      <div>

      <h2>About Me</h2>
      </div>
      <Grid>
        <p>
          My name is Luis Romero, I’m preparing myself physically, mentally and
          psychologically to cross the border, I’m ready to face great
          challenges and I’m willing to make a difference with my discipline and
          dedication.
        </p>
        <Img>
          <AboutMeImg />
        </Img>
      </Grid>
    </div>
  );
};

const Content = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    {
      width: getNumber(ThemeStyle.screen.md),
      itemsToShow: paragraphs.length,
      itemsToScroll: paragraphs.length,
    },
  ];
  const { mQuery }: { mQuery: IMQuery } = useMediaQuery();

  return (
    <>
      {mQuery && !mQuery.matches ? (
        <Center>
          <Carousel isRTL={false} breakPoints={breakPoints} className="carusel">
            {paragraphs.map((paragraph, index) => (
              <Paragraph key={index}>{paragraph}</Paragraph>
            ))}
          </Carousel>
        </Center>
      ) : (
        <SizeLg />
      )}
    </>
  );
};

const AboutMeSection = () => (
  <Section>
    <Content />
  </Section>
);
export default AboutMeSection;
const Section = styled(SectionGLobal)`
  display: grid;
    @media screen and (min-width:${(props:PropStyleTheme) => props.theme.screen.md} ){
       background: ${(props: PropStyleTheme) => props.theme.colors.primaryVariant};
  }
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
