import { AboutMeContainer } from "../components/containers/AboutMeContainer";
import { FC } from "react";
import { IAboutMe } from "../interface/aboutMe";
import { GET_ABOUTME } from "../graphql/querys/aboutMe";
import { useRouter } from "next/router";
import {  useQuery } from "@apollo/client";
export type PropsAboutMe = {
  data: IAboutMe;
};
const AboutMe: FC<PropsAboutMe> = () => {
  const { locale } = useRouter();
  const LANGUAGE = (locale as string).toLocaleUpperCase();
  let { data, error, loading } = useQuery(GET_ABOUTME, {
    variables: { param: LANGUAGE },
  });
  
  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;
  
  return <AboutMeContainer data={data.data[0]} />;
};

export default AboutMe;
