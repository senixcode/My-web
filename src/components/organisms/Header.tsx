import { FC } from "react";
import styled from "styled-components";
import { NavbarIcon, LogoXs } from "../../image";
import { useMediaQuery } from "../../hook/useMediaQuery";
import { IMQuery } from "../../interface/Mquery";
import { useScrollSections } from "../../scroll-section";
import { separateCamelCase } from "../../helper/separateCamelCase";
import { PropStyleTheme } from "../../types";
type Props = {
  title?: string;
  changeShowNavxs?: () => void;
};
const Navs = () => {
  const sections = useScrollSections();
  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `;
  return (
    <Container>
      {sections.map(({ id: section, onClick, selected }) => (
        <h2 key={section} onClick={onClick}>
          {separateCamelCase(section)}
        </h2>
      ))}
    </Container>
  );
};
export const Header: FC<Props> = ({ title, changeShowNavxs }) => {
const {mQuery}:{mQuery:IMQuery} = useMediaQuery()
  return(
  <Navbar>
    <Center>
      <LogoXs />
    </Center>
        { mQuery && !mQuery.matches && (
          <Center>
            <h2>{title}</h2>
            </Center>
        )
      }
      { mQuery && !mQuery.matches ? (
    <Center>
        <NavbarIcon onClick={() => changeShowNavxs()}/> 
    </Center>
      ):
       <Navs/>
      }
  </Navbar>
)};

const Navbar = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 6fr 1fr;
  z-index:100;
  cursor: pointer;
  @media screen and (min-width:${(props:PropStyleTheme) => props.theme.screen.md} ){
    grid-template-columns:4fr 6fr;
  }
  @media screen and (min-width:${(props:PropStyleTheme) => props.theme.screen.lg} ){
    grid-template-columns:6fr 6fr;
  }
`;
const Center = styled.div`
  display: flex;
  align-items: center;
`;
