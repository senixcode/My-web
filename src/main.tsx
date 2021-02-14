import React, { useState } from "react";
import { ScrollingProvider, Section } from "./scroll-section";
import { Footer } from "./components/organisms/Footer";
import { MenuMobile } from "./components/organisms/MenuMobile";
import { sections } from "./cmsFaker/sections";
import { IMQuery } from "./interface/Mquery";
import { useMediaQuery } from "./hook/useMediaQuery";
import { DynamicMenu } from "./components/organisms/DynamicMenu";
import { FooterSection } from "./components/sections";
import { WelcomeSection } from "./components/sections/WelcomeSection";

const App = () => {
  const [showNavxs, setShowNavxs] = useState(false);
  const changeShowNavxs = (closeOnly?: boolean) => {
    if (closeOnly) {
      setShowNavxs(false);
    } else {
      setShowNavxs(!showNavxs);
    }
  };
  const { mQuery }: { mQuery: IMQuery } = useMediaQuery();
  return (
    <>
      <ScrollingProvider>
        <WelcomeSection/>
        {mQuery && !mQuery.matches && (
          <>
            {showNavxs && <MenuMobile />}
            <DynamicMenu changeShowNavxs={changeShowNavxs} />
          </>
        )}
        {sections.map(({ name, Component }) => (
          <Section key={name} id={name} onClick={() => changeShowNavxs(true)}>
            <Component />
          </Section>
        ))}
        <Footer />
         <FooterSection/>
      </ScrollingProvider>
    </>
  );
};
export default App;
