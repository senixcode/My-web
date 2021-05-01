import { AboutMeContainer } from "../components/containers/AboutMeContainer";
import { FC, Fragment } from "react";
import { IAboutMe } from "../interface/aboutMe";
import { GET_ABOUTME } from "../graphql/querys/aboutMe";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { MiddlwareHookApolloClient } from "../components/common/MiddelwareHookApolloClient";
export type PropsAboutMe = {
  data: IAboutMe;
};
const AboutMe: FC<PropsAboutMe> = () => {
  const { locale } = useRouter();
  const LANGUAGE = (locale as string).toLocaleUpperCase();
  let getAboutMe = useQuery(GET_ABOUTME, {
    variables: { param: LANGUAGE },
  });

  return (
    <MiddlwareHookApolloClient {...getAboutMe}>
      {getAboutMe.data && <AboutMeContainer data={getAboutMe.data.data[0]} />}
    </MiddlwareHookApolloClient>
  );
};



export default AboutMe;
