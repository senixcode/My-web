import Layout from "../layout";
import dynamic from 'next/dynamic'
import Main from "../main"

const Sections = dynamic(
 () => import('../main'),
 {ssr:false, loading: () => <p> cargando... </p>}
)
const Home = () => {
  return (
    <Layout>
    <Main/> 

    </Layout>
  );
};

export default Home;