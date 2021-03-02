import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import {
  getProjects,
  getProjectById,
  IProjects,
  seoTitle,
} from "../../cmsFaker/getProjects";
import { DetailContainer } from "../../components/containers/DetailContainer";

export default function Detail() {
  const { query } = useRouter();
  let { locale } = useRouter();
  let projects = getProjects(locale);
  const idProject = parseInt(query.project as string);
  let project: IProjects = getProjectById(projects, idProject);
  const SEO = {
    title: seoTitle(project.title,locale),
    description: project.summary,
    openGraph: {
      title:seoTitle(project.title,locale),
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
