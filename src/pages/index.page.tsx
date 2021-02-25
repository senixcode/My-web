import Layout from "../layout";
import { useRouter } from "next/router";
import { getAboutMe } from "../cmsFaker/getAboutMe";
import { AboutMeContainer } from "../components/containers/AboutMeContainer";

const AboutMe = () => {
  let { locale } = useRouter();
  let content = getAboutMe(locale);
  return (
    <Layout>
      <AboutMeContainer content={content} />
    </Layout>
  );
};

export default AboutMe;
