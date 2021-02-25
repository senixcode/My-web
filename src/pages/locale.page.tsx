import { useRouter } from 'next/router';
export default function Home() {
  let router = useRouter();
  let greeting =
  router.locale === "en"
  ? 'Hello world'
  :router.locale === "es"
  ? 'Hola mundo' : ''
console.log(router);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
}
