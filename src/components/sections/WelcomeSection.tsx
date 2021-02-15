import styled from "styled-components";
import { Section as SectionGlobal } from "../../../styles/StyleComponentGlobal";
import { PropStyleTheme } from "../../types";
import { Header } from "../organisms/Header";
import { WelcomeImg } from "../../image/background";
export const WelcomeSection = () => {
  return (
    <Section>
      <Header></Header>
      <div>
          
      <Img>
        <WelcomeImg />
      </Img>
      <Content>Hi , I’m senixcode a self-taughy developer.</Content>
      </div>
    </Section>
  );
};

const Section = styled(SectionGlobal)`
  display: grid;

  @media screen and (max-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    display: none;
  }
`;
const Img = styled.div`
  position: relative;
   @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
   left:2em;
  bottom:3em;
   
  }
 @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.lg}) {
          left:5em;
          bottom:.1em;
  }
`;
const Content = styled.h1`
 position:relative;
 @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
   
 width:10em;
 left:8em;
 bottom:5em;
 color:${(props:PropStyleTheme) => props.theme.colors.textPrimary}
  }
 @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.lg}) {
   
 width:10em;
 left:14em;
 bottom:5em;
 color:${(props:PropStyleTheme) => props.theme.colors.textPrimary}
  }

`
