import styled from 'styled-components'
import { Section as SectionGlobal } from "../../../styles/StyleComponentGlobal";
import { TelegramIcon,TwitterIcon,GithubIcon, LinkedinIcon } from '../../image/socialNetworks';
import { PropStyleTheme } from '../../types';
const FooterSection = () => (
    <Section>
      <Container>
        <Img>
            <TelegramIcon/>
        </Img>
        <Img>
            <TwitterIcon/>
        </Img>
        <Img>
            <GithubIcon/>
        </Img>
        <Img>
            <LinkedinIcon/>
        </Img>
      </Container>
    </Section>
)
export default FooterSection

const Section = styled(SectionGlobal)`
 
  display:grid;
justify-content:center;
 align-content:center;
 height:3vh;
    @media screen and (max-width: ${(props: PropStyleTheme) => props.theme.screen.md}) {
    display:none;
  }
`
const Container = styled.span`
 display:flex;
 justify-content:center;
 align-content:center;
`
const Img = styled.div`
    display:flex;
    flex-direction:column;
    background:${(props: PropStyleTheme) => props.theme.colors.secondary};
    width:4em;
    height:4em;
    border-radius:50%;
    align-content:center;
    justify-content:center;
    justify-items:center;
    align-items:center;
    margin:0 1em;
    cursor: pointer;
`