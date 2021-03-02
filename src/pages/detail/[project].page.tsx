import { useRouter } from "next/router";
export default function Detail() {
  const { query } = useRouter();
  return (
      <p>{JSON.stringify(query)}</p>
  );
}
