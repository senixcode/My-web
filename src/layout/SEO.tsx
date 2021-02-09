import Head from "next/head";
import { ISeoData } from "../interface/SeoData";
const seoData: ISeoData = {
  description:
    "self-taught full stack, with experience in different js stacks and integrating myself to the open source open",
  title: "senixcode",
  url: "https://senixcode.dev",
  author: "senixcode",
  keywords: ["senixcode", "software development"],
  img: "",
  twitterId: "@senixcode",
};
const SEO = () => (
  <Head>
    <meta property="og:title" content={seoData.title} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={seoData.url} />
    <meta property="og:image" content={seoData.img} />
    <meta property="og:description" content={seoData.description} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:card" content={seoData.twitterId} />
    <meta name="twitter:site" content={seoData.url} />
    <meta name="twitter:description" content={seoData.description} />
    <meta name="twitter:domain" content={seoData.url} />
    <meta name="twitter:image:src" content={seoData.img} />

    <meta name="description" content={seoData.description} />
    <meta name="keywords" content={seoData.keywords.join(",")} />
    <meta name="author" content={seoData.author} />
    <title>{seoData.title}</title>
    <html lang="en" />
  </Head>
);
export default SEO;
