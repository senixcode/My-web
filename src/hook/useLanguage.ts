import { useRouter } from "next/router"
import { useEffect, useState } from "react"
enum Language {
  EN = "en",
  ES = "es",
}

interface IContentDisplay {
  seeMore: string
  seeLess: string
}

export interface INavbar {
  aboutMe: string
  projects: string
}

export const useLanguage = () => {
  const { locale } = useRouter()
  const translater = ({ es, en }) => (locale === Language.ES ? es : en)
  const [navbar, setNavbar] = useState<INavbar>({
    aboutMe: translater({ es: "Sobre mi", en: "About me" }),
    projects: translater({ es: "Mis proyectos", en: "Projects" }),
  })
  const [
    contentDisplayCardProject,
    setContentDisplayCardProject,
  ] = useState<IContentDisplay>({
    seeMore: translater({ es: "...ver mas", en: "...see more" }),
    seeLess: translater({ es: "ver menos", en: "see less" }),
  })

  useEffect(() => {
    if (locale) {
      setNavbar({
        aboutMe: translater({ es: "Sobre mi", en: "About me" }),
        projects: translater({ es: "Mis proyectos", en: "Projects" }),
      })
      setContentDisplayCardProject({
        seeMore: translater({ es: "...ver mas", en: "...see more" }),
        seeLess: translater({ es: "ver menos", en: "see less" }),
      })
    }
  }, [locale])

  return {
    locale,
    contentDisplayCardProject,
    navbar
  }
}
