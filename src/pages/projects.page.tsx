import { ProjectsContainer } from "../components/containers/ProjectsContainer";
import { useRouter } from "next/router";
import { getProjects } from "../cmsFaker/getProjects";
export default function Home() {
  let { locale } = useRouter();
  let projects = getProjects(locale);
  return <ProjectsContainer projects={projects} />;
}
