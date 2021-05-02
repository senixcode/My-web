import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import { TypeSwitchLoading } from "../components/molecules/loadings/SwitchLoading";
import { GET_PROJECT } from "../graphql/querys/project";
import { IProjects } from "../interface/Project";

export const useProject = () => {
  let { locale } = useRouter();
  const [seeMoreLang, setSeeMoreLang] = React.useState<string>(
    locale === "en" ? "see more" : "ver mas"
  );
  const [seeLessLang, setSeeLessLang] = React.useState<string>(
    locale === "en" ? "see less" : "ver menos"
  );
  const LANGUAGE = (locale as string).toLocaleUpperCase();
  let getProject = useQuery(GET_PROJECT, {
    variables: { param: LANGUAGE },
  });
  React.useEffect(() => {
    if (locale) {
      setSeeMoreLang(locale === "en" ? "...see more" : "...ver mas");
      setSeeLessLang(locale === "en" ? "see less" : "ver menos");
    }
  }, [locale]);

  const projects: Array<IProjects> = getProject.data && getProject.data.data;
  const getProjectLoading = {
    ...getProject,
    ...{ typeLoading: TypeSwitchLoading.CARD },
  };

  return { getProjectLoading, projects, seeMoreLang, seeLessLang };
};
