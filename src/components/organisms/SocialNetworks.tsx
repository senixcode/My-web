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
import {
  ICON_GITHUB,
  ICON_LINKEDIN,
  ICON_TELEGRAM,
  ICON_TWITTER,
} from "../../globalVariables/icons";
import { PropStyleTheme } from "../../types";
const socialNetworks: Array<{ link: string; name: string; icon: string }> = [
  {
    link: "https://twitter.com/senixcode",
    name: "twitter",
    icon: ICON_TWITTER,
  },
  { link: "https://t.me//senixcode", name: "telegram", icon: ICON_TELEGRAM },
  { link: "https://github.com/senixcode/", name: "github", icon: ICON_GITHUB },
  {
    link: "https://www.linkedin.com/in/senixcode-developer/",
    name: "linkedin",
    icon: ICON_LINKEDIN,
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
    {socialNetworks.map((socialNetwork, i) => (
      <ContainerImage key={i} {...socialNetwork} />
    ))}
  </Container>
);

const ContainerImage: FC<{ link: string; name: string; icon: string }> = ({
  link,
  name,
  icon,
}) => (
  <a
    href={link}
    target="_blank"
    title={`icon ${name}`}
    style={{ textDecoration: "none" }}
  >
    <Container styles={imageContainer}>
      <i className={icon} />
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
  & > i {
    color: ${(props: PropStyleTheme) => props.theme.colors.secondaryVariant};
    font-size: 25px;
  }
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.sm}) {
    background-color: ${(props: PropStyleTheme) =>
      props.theme.colors.secondary};
    & > i {
      color: ${(props: PropStyleTheme) => props.theme.colors.primaryVariant};
      font-size: 29px;
    }
  }
`;
