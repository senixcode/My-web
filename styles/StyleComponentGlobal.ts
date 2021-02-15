import styled from "styled-components";
import { PropStyleTheme } from "../src/types";

export const Section = styled.div`
  height: 100vh;
  padding: ${(props: PropStyleTheme) => props.theme.sizes.xs};
  background: ${(props: PropStyleTheme) => props.theme.colors.primary};
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    padding: ${({ theme }: PropStyleTheme) => theme.sizes.md};
  }
`;
export const Slides = styled.div`

  display: flex;
  overflow-x: auto;
  padding: 0.5em 0;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  --webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props: PropStyleTheme) => props.theme.colors.secondary};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: ${(props: PropStyleTheme) => props.theme.colors.primaryVariant};
  }
  & > div {
    scroll-snap-align: end;
    width: 100%;
    height: 300px;
    flex-shrink: 0;
    transform-origin: center center;
    transform: scale(1);
    transition: transform 0.5s;
    position: relative;
    margin-bottom: 0.5em;
  }
    /* @media screen and (min-width: ${(props: PropStyleTheme) => props.theme.screen.md}) {
    display:none;
  } */
`;
