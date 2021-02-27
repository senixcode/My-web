import { useRouter } from "next/router";
import Layout from '../../layout/'
export default function Home() {
  const { query } = useRouter();
  return (
    <Layout>
      <p>{JSON.stringify(query)}</p>
    </Layout>
  );
}
