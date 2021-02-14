import Layout from "../src/layout";
import Main from "../src/main"

const Sections = () => <Main/>
const Home = () => {
  return (
    <Layout>
    <Sections/> 
    </Layout>
  );
};

export default Home;