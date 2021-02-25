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
      gridTemplateColumnsMd={`4fr 6fr 2fr`}
      height="87vh"
      styles={container}
    >
      <Hide maxMd="none">
        <Image alt="image about me" src="/static/aboutMe.svg" width="auto" />
      </Hide>
      <Content content={content} />
      <SocialNetworks />
    </Container>
  );
};

const container = css`
  padding: 0 1em;
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    height: 90vh;
  }
`;
