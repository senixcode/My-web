import { useRouter } from "next/router";

export default function Home() {
  const { query } = useRouter();
  return (
    <p>{JSON.stringify(query)}</p>
  );
}
