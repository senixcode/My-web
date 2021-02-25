import { Container } from "../../styles/system/Container";
import Layout from "../layout";
import { ProjectsContainer } from "../components/containers/ProjectsContainer";
export default function Home() {
  return (
    <Layout>
      <ProjectsContainer />
    </Layout>
  );
}
