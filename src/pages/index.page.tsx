import { useRouter } from "next/router";
import { getAboutMe } from "../cmsFaker/getAboutMe";
import { AboutMeContainer } from "../components/containers/AboutMeContainer";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { FC } from "react";
import { IAboutMe } from "../interface/aboutMe";
export type PropsAboutMe = {
  data: IAboutMe;
};
const AboutMe: FC<PropsAboutMe> = ({ data }) => {
  return <AboutMeContainer data={data} />;
};

export async function getStaticProps({ locale }) {
  const LANGUAGE = (locale as string).toLocaleUpperCase();

  const client = new ApolloClient({
    // uri: "https://cms-api-website.herokuapp.com/graphql",
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });
  const GET_ABOUTME = gql`
    query getAboutMeByLanguage($param: Language = ES) {
      data: aboutMeFindByLanguage(language: $param) {
        id
        name
        language
      }
    }
  `;

  let { data } = await client.query({
    query: GET_ABOUTME,
    variables: { params: LANGUAGE },
  });

  data = data.data[0];
  return {
    props: {
      data,
    },
  };
}
export default AboutMe;
