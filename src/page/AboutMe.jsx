import React from "react";
import { TitleCustom } from "../components/atoms/TitleCustom";
import { AboutMeStepperContainer } from "../components/organisms/AboutMeStepperContainer";
import SectionAboutMe from "../components/organisms/SectionsAboutMe";
export const AboutMe = () => {
  console.log("log", new Date().getTimezoneOffset() / 60);
  return (
    <>
      <TitleCustom menssage="Sobre mi" />
      <SectionAboutMe />
      {/* <AboutMeStepperContainer></AboutMeStepperContainer> */}
    </>
  );
};
