import styled from "styled-components";
import { PropStyleTheme } from "../../types";
import { ITheme } from "../../interface/Theme";
import { useScrollSections } from "../../scroll-section";
import { separateCamelCase } from "../../helper/separateCamelCase";

const Content = () => {
  const sections = useScrollSections();
  return (
    <Navs>
      {sections.map(({ id:section, onClick, selected }) => (
        <Nav key={section} onClick={onClick} selected={selected}>
          {separateCamelCase(section)}
        </Nav>
      ))}
    </Navs>
  );
};

export const MenuMobile = () => (
  <Container>
    <Content />
  </Container>
);
const Container = styled.div`
  background: ${({ theme }: PropStyleTheme) => theme.colors.primaryVariant};
  position: fixed;
  width: 75%;
  height: 100%;
  padding: 1.5em;
  z-index: 100;
`;

const Navs = styled.div`
  padding-top: 3em;
  display: grid;
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-row-gap: 2em;
`;

const Nav = styled.h2<{ selected: boolean }>`
  color: ${({ selected, theme }: { selected: boolean; theme: ITheme }) =>
    selected ? theme.colors.secondary : theme.colors.textPrimary};
`;
