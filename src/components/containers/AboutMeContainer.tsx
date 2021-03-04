import { css } from "styled-components";
import { Container } from "../../../styles/system/Container";
import { Image } from "../../../styles/system/Image";
import { Hide } from "../../../styles/system/Hide";
import { Content } from "../organisms/AboutMeContent";
import { SocialNetworks } from "../organisms/SocialNetworks";
import { PropStyleTheme } from "../../types";
import { FC } from "react";

export const AboutMeContainer: FC<{ content: string }> = ({ content }) => {
  return (
    <Container
      gridTemplateColumnsXs="1fr"
      gridTemplareRowsXs={`8fr 2fr`}
      gridTemplateColumnsMd={`4fr 6fr 1fr`}
      height="87vh"
      styles={container}
    >
      <Hide maxMd="none" styles={image}>
        <Image alt="image about me" src="/static/aboutMe.svg" styles={image} />
      </Hide>
      <Content content={content} />
      <Hide maxMd="none">
        <SocialNetworks />
      </Hide>
    </Container>
  );
};

const container = css`
  padding: 0 1em;
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    height: 87vh;
    padding: 0 3em;
  }
`;
const image = css`
  height: 90%;
`;
