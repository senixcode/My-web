import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { IProjects } from "../../cmsFaker/projects/interfaces";
import { seoTitle } from "../../cmsFaker/projects/function";
import { DetailContainer } from "../../components/containers/DetailContainer";
import { useEffect, useState } from "react";
import { GET_PROJECT_ONE } from "../../graphql/querys/project";
import { useQuery } from "@apollo/client";
import { MiddlwareHookApolloClient } from "../../components/common/MiddelwareHookApolloClient";

export default function Detail() {
  const { isReady, query, locale } = useRouter();
  const [SEO, setSEO] = useState({});
  const LANGUAGE = (locale as string).toLocaleUpperCase();
  const getProjectOne = useQuery(GET_PROJECT_ONE, {
    variables: { titleSeo: query.project as string, language: LANGUAGE },
  });

  const projectOne =
    getProjectOne.data && (getProjectOne.data.data as IProjects);
    
  useEffect(() => {
    if (isReady && projectOne) {
      const title = seoTitle(projectOne.title, locale);

      setSEO({
        title: title,
        description: projectOne.summary,
        openGraph: {
          title: title,
          description: projectOne.summary,
        },
      });
    }
  }, [isReady, projectOne, setSEO]);

  return (
    <>
      {isReady && SEO && (
        <>
          <NextSeo {...SEO} />
          <MiddlwareHookApolloClient {...getProjectOne}>
            {projectOne && <DetailContainer {...projectOne} />}
          </MiddlwareHookApolloClient>
        </>
      )}
    </>
  );
}
