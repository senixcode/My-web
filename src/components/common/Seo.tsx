import { DefaultSeo } from "next-seo";
import SEO from "../../../next-seo.config";
export default function Seo() {
  return (
    <DefaultSeo
      {...SEO}
      additionalMetaTags={[
        {
          property: "dc:creator",
          content: "senixcode",
        },
        {
          name: "senixcode",
          content: "About me, full stack developer, open source projects.",
        },
        {
          httpEquiv: "x-ua-compatible",
          content: "IE=edge; chrome=1",
        },
      ]}
      languageAlternates={[
        {
          hrefLang: "es",
          href: "https://www.senixcode.dev/es",
        },
      ]}
    />
  );
}
