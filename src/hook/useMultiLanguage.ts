import { useRouter } from "next/router"
import { useEffect, useState } from "react"
enum Language {
  EN = "en",
  ES = "es",
}
export interface INavbar {
  aboutMe: string
  projects: string
}
export interface ITitelAboutMe {
  first: string,
  selfWritten: Array<string>
}
interface IContentDisplay {
  seeMore: string
  seeLess: string
}
export const useMultiLanguage = () => {
  const { locale } = useRouter()
  const translater = ({ es, en }): string => (locale === Language.ES ? es : en)
  const getNavbar: INavbar = {
    aboutMe: translater({ es: "Sobre mi", en: "About me" }),
    projects: translater({ es: "Mis proyectos", en: "Projects" }),
  }
  const getTitleAboutMe: ITitelAboutMe = {
    first: translater({ es: 'Programador autodidacta "Full Stack JavaScript"', en: 'Self-taught "Full Stack JavaScript" programmer,' }),
    selfWritten: [
      translater({ es: "con experiencia en startups,", en: "with experience in startups," }),
      translater({ es: "nuevos conocimientos Docker Nextjs Nestjs Graphql,", en: "new knowledge Docker Nextjs Nestjs Graphql," }),
      translater({ es: "buscando nuevos desafíos.", en: "looking for new challenges." }),
    ]
  }
  const getContentDisplay: IContentDisplay = {
    seeMore: translater({ es: "...ver mas", en: "...see more" }),
    seeLess: translater({ es: "ver menos", en: "see less" }),
  }
  const [navbar, setNavbar] = useState<INavbar>(getNavbar)
  const [titleAboutMe, setTitleAboutMe] = useState<ITitelAboutMe>(getTitleAboutMe)
  const [contentDisplayCardProject, setContentDisplayCardProject,] = useState<IContentDisplay>(getContentDisplay)

  useEffect(() => {
    if (locale) {
      setNavbar(getNavbar)
      setTitleAboutMe(getTitleAboutMe)
      setContentDisplayCardProject(getContentDisplay)
    }
  }, [locale])

  return { locale, navbar, titleAboutMe, contentDisplayCardProject }
}
