import React, { FC, useState } from "react";
import {
  ScrollingProvider,
  useScrollSections,
  Section,
} from "./scroll-section";
import { Header } from "./components/organisms/Header";
import { Footer } from "./components/organisms/Footer";
import styled from "styled-components";
import { PropStyleTheme } from "./types";
import { MenuMobile } from "./components/organisms/MenuMobile";
import {separateCamelCase} from "./helper/separateCamelCase"
import { sections } from "./cmsFaker/sections";
type Props = {
  changeShowNavxs: () => void;
};
const DynamicMenu: FC<Props> = ({ changeShowNavxs }) => {
  const sections = useScrollSections();
  return (
    <>
      {sections.map(({ id: section, selected }) => {
        if (selected == true) {
          return (
            <FixedTop key={section}>
              <Header
                title={separateCamelCase(section)}
                changeShowNavxs={changeShowNavxs}
              />
            </FixedTop>
          );
        }
      })}
    </>
  );
};

const App = () => {
  const [showNavxs, setShowNavxs] = useState(false);
  const changeShowNavxs = (closeOnly?:boolean) => {
    if(closeOnly){
      setShowNavxs(false);
    }else {
      setShowNavxs(!showNavxs);
    }
  };
  return (
    <>
      <ScrollingProvider>
        {showNavxs && <MenuMobile/>}
        <DynamicMenu changeShowNavxs={changeShowNavxs} />
        {
          sections.map(({name,Component}) => (
            <Section 
            key={name} 
            id={name}
            onClick={() => changeShowNavxs(true)}>
                <Component/>
            </Section>
          ))
        }
        <Footer/>
      </ScrollingProvider>
    </>
  );
};
export default App;

const FixedTop = styled.div`
  position: fixed;
  width: calc(100vw - ${({ theme }: PropStyleTheme) => theme.sizes.xs});
  top: 1.4em;
  padding: 0 18px;
`;
