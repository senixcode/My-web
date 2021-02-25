import { useRouter } from "next/router";
import Layout from '../../layout/'
export default function Home() {
  const { query } = useRouter();
  return (
    <div>
      <p>{JSON.stringify(query)}</p>
    </div>
  );
}
