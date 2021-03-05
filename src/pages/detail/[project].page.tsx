import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { getProjects } from "../../cmsFaker/getProjects";
import { IProjects } from "../../cmsFaker/projects/interfaces";
import { getProjectByTitle, seoTitle } from "../../cmsFaker/projects/function";
import { DetailContainer } from "../../components/containers/DetailContainer";
import { useEffect, useState } from "react";

export default function Detail() {
  const { isReady, query, locale } = useRouter();
  const [project, setProject] = useState<IProjects>();
  const [SEO, setSEO] = useState({});
  useEffect(() => {
    if (isReady) {
      const projects: Array<IProjects> = getProjects(locale);
      setProject(getProjectByTitle(projects, query.project as string));
      project &&
        setSEO({
          title: seoTitle(project.title, locale),
          description: project.summary,
          openGraph: {
            title: seoTitle(project.title, locale),
            description: project.summary,
          },
        });
    }
  }, [isReady, setProject, setSEO]);

  return (
    <>
      {isReady && project && SEO && (
        <>
          <NextSeo {...SEO} />
          <DetailContainer {...project} />
        </>
      )}
    </>
  );
}
