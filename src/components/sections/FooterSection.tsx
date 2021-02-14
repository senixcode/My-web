import styled from "styled-components";
import { Section as SectionGlobal } from "../../../styles/StyleComponentGlobal";
import {
  TelegramIcon,
  TwitterIcon,
  GithubIcon,
  LinkedinIcon,
} from "../../image/socialNetworks";
import { PropStyleTheme } from "../../types";
const SocialMedia = () => {
  const Container = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    justify-content: center;
     width:100%;
     /* background-color:blue; */
  `;
  const Img = styled.div`
    display: flex;
    flex-direction: column;
    background: ${(props: PropStyleTheme) => props.theme.colors.secondary};
    width: 3em;
    height: 3em;
    border-radius: 50%;
    align-content: center;
    justify-content: center;
    justify-items: center;
    align-items: center;
    cursor: pointer;
  `;
  const Imgs = styled.div`
   display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    justify-content: center;
    grid-column-gap:1.5em;
    width:100%;
  `;
  return (
    <Container>
      <Imgs>
        <Img>
          <TelegramIcon />
        </Img>
        <Img>
          <TwitterIcon />
        </Img>
        <Img>
          <GithubIcon />
        </Img>
        <Img>
          <LinkedinIcon />
        </Img>
      </Imgs>
    </Container>
  );
};
const ContactMe = () => {
  const Container = styled.div`
    display: flex;
    /* background-color:blue; */
    width: 100%;
    justify-items: center;
    align-items: center;
    justify-content: center;
  `;
  const InputContainer = styled.div`
    position: relative;
    margin-bottom: 1px;
    width: 75%;
    & > label {
      position: absolute;
      top: -10px;
      left: 0px;
      font-size: 21px;
      color: ${(props: PropStyleTheme) => props.theme.colors.secondary};

      transition: all 0.5s ease-in-out;
    }
    & input {
      border: 0;
      border-bottom: 2px solid
        ${(props: PropStyleTheme) => props.theme.colors.secondary};
      background: transparent;
      width: 100%;
      padding: 20px 0 5px 0;
      font-size: 16px;
      font-weight:300;
      color: #fff;
    }
    & input:focus {
      border: none;
      outline: none;
      border-bottom: 3px solid
        ${(props: PropStyleTheme) => props.theme.colors.secondary};
    }
  `;
  return (
    <Container>
      <InputContainer>
        <input type="text" onClick={() =>{return alert("it doesn't work yet")}}  />
        <label>Contact me</label>
      </InputContainer>
    </Container>
  );
};
const FooterSection = () => {
  const Container = styled.div`
    display: grid;
    grid-template-columns: 8fr 6fr;
    grid-column-gap: 10%;
    width: 100%;
  `;
  return (
    <Section>
      <Container>
        <ContactMe />
        <SocialMedia />
      </Container>
      <Copyright>
        <p>
          copyright &copy;2021 <span>senixcode</span>
        </p>
      </Copyright>
    </Section>
  );
};
export default FooterSection;

const Section = styled(SectionGlobal)`
  display: grid;
  grid-template-rows: 8fr 1fr;
  /* justify-content: center;
  align-content: space-around; */
  height: 20vh;
  padding: 1em 2em;
  width: 100%;
  @media screen and (max-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    display: none;
  }
`;

const Copyright = styled.div`
  max-width: 500px;
  margin: 1px auto;
  line-height: 1px;
  & > p {
    font-size: 14px;
    font-family: "Open Sans";
  }
`;
