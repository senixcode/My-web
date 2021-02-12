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
`;
const NavbarBottom = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1em;
  align-items: center;
  justify-items: center;
`;
export const Footer = () => (
  <FixedTop>
    <NavbarBottom>
      <TelegramIconXs />
      <TwitterIconXs />
      <GithubIconXs />
      <LinkedinIconXs />
    </NavbarBottom>
  </FixedTop>
);
