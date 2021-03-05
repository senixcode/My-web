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
      const _project_ = getProjectByTitle(projects, query.project as string)
      setProject(_project_);
      if (_project_) {
        const title = seoTitle(_project_.title, locale)        
        setSEO({
          title: title,
          description: _project_.summary,
          openGraph: {
            title: title,
            description: _project_.summary,
          },
        });
      }
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
