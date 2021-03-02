import { useRouter } from "next/router";
import { getAboutMe } from "../cmsFaker/getAboutMe";
import { AboutMeContainer } from "../components/containers/AboutMeContainer";

const AboutMe = () => {
  let { locale } = useRouter();
  let content = getAboutMe(locale);
  return <AboutMeContainer content={content} />;
};

export default AboutMe;
