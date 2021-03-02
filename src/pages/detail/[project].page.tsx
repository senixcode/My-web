import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import {
  getProjects,
} from "../../cmsFaker/getProjects";
import { IProjects } from "../../cmsFaker/projects/interfaces";
import { getProjectByTitle, seoTitle } from "../../cmsFaker/projects/projects";
import { DetailContainer } from "../../components/containers/DetailContainer";

export default function Detail() {
  const { query } = useRouter();
  let { locale } = useRouter();
  let projects = getProjects(locale);
  let project: IProjects = getProjectByTitle(projects, query.project as string);
  const SEO = {
    title: seoTitle(project.title, locale),
    description: project.summary,
    openGraph: {
      title: seoTitle(project.title, locale),
      description: project.summary,
    },
  };

  return (
    <>
      <NextSeo {...SEO} />
      <DetailContainer {...project} />
    </>
  );
}
