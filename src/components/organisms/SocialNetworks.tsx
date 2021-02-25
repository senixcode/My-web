import { FC } from "react";
import styled, { css } from "styled-components";
import { Container } from "../../../styles/system/Container";
import { Hide } from "../../../styles/system/Hide";
import { Image } from "../../../styles/system/Image";
import {
  centerContent,
  centerItems,
  cursorPointer,
  centerAbsolute,
} from "../../../styles/system/styles";
import { PropStyleTheme } from "../../types";
const socialNetworks: Array<{ link: string; name: string }> = [
  { link: "https://twitter.com/senixcode", name: "twitter" },
  { link: "https://t.me//senixcode", name: "telegram" },
  { link: "https://github.com/senixcode/", name: "github" },
  {
    link: "https://www.linkedin.com/in/senixcode-developer/",
    name: "linkedin",
  },
];
const gridSocialNetworks: string = `1fr 1fr 1fr 1fr`;
export const SocialNetworks = () => (
  <Container
    gridTemplateRowsXs="1fr"
    gridTemplateColumnsXs={gridSocialNetworks}
    gridTemplateColumnsMd="1fr"
    gridTemplateRowsMd={gridSocialNetworks}
    gridGap=".8em"
    styles={container}
  >
    {socialNetworks.map(({ link, name }) => (
      <ContainerImage key={name} href={link} icon={name} />
    ))}
  </Container>
);

const ContainerImage: FC<{ href: string; icon: string }> = ({ icon, href }) => (
  <a href={href} target="_blank">
    <Container styles={imageContainer}>
      <Hide maxSm="none">
        <Image
          alt={`icon ${icon}`}
          src={`/static/socialNetworks/${icon}.svg`}
          widthMd="25px"
        />
      </Hide>
      <Hide minSm="none">
        <Image
          alt={`icon ${icon}`}
          src={`/static/socialNetworks/${icon}-xs.svg`}
          widthMd="25px"
        />
      </Hide>
    </Container>
  </a>
);

const container = css`
  ${centerAbsolute}
  bottom:1em;
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    display: grid;
    position: static;
  }
`;
const imageContainer = css`
  ${cursorPointer}
  width: 2.8em;
  height: 2.8em;
  border-radius: 50%;
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.sm}) {
    background-color: ${(props: PropStyleTheme) =>
      props.theme.colors.secondary};
  }
`;
