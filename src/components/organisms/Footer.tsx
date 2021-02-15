import styled from "styled-components";
import { PropStyleTheme } from "../../types";
import {
  GithubIconXs,
  LinkedinIconXs,
  TelegramIconXs,
  TwitterIconXs,
} from "../../image";

const FixedTop = styled.div`
  position: fixed;
  width: calc(100vw - ${({ theme }: PropStyleTheme) => theme.sizes.xs});
  bottom: 1.4em;
  padding: 0 18px;
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    display: none;
  }
`;
const NavbarBottom = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1em;
  align-items: center;
  justify-items: center;
`;
const a = styled.a``;
export const Footer = () => (
  <FixedTop>
    <NavbarBottom>
      <a href="https://t.me//senixcode" target="_blank">
        <TelegramIconXs />
      </a>
      <a href="https://twitter.com/senixcode" target="_blank">
        <TwitterIconXs />
      </a>
      <a href="https://github.com/senixcode/" target="_blank">
        <GithubIconXs />
      </a>
      <a
        href="https://www.linkedin.com/in/senixcode-developer/"
        target="_blank"
      >
        <LinkedinIconXs />
      </a>
    </NavbarBottom>
  </FixedTop>
);
