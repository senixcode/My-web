import { useRouter } from "next/router";
import { Container } from "../../../styles/system/Container";
import { getProjects, getProjectById, IProjects } from "../../cmsFaker/getProjects";
import { DetailContainer } from "../../components/containers/DetailContainer";

export default function Detail() {
  const { query } = useRouter();
  let { locale } = useRouter();
  let projects = getProjects(locale);
  const idProject = parseInt(query.project as string);
  let project:IProjects = getProjectById(projects, idProject);
  return <DetailContainer {...project}/>
}
