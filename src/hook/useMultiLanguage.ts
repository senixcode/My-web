import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { translater } from "./language/helper"
import { getProjects } from "./language/projects"
import { IContentDisplay, INavbar, IProject, ITitelAboutMe, List } from "./language/types"

const getNavbar = (currentLanguagee: string): INavbar => ({
  aboutMe: translater(currentLanguagee, { es: "Sobre mi", en: "About me" }),
  projects: translater(currentLanguagee, { es: "Mis proyectos", en: "Projects" }),
})

const getTitleAboutMe = (currentLanguagee: string): ITitelAboutMe => ({
  first: translater(currentLanguagee, { es: 'Programador autodidacta "Full Stack JavaScript"', en: 'Self-taught "Full Stack JavaScript" programmer,' }),
  selfWritten: [
    translater(currentLanguagee, { es: "con experiencia en startups,", en: "with experience in startups," }),
    translater(currentLanguagee, { es: "nuevos conocimientos Docker Nextjs Nestjs Graphql,", en: "new knowledge Docker Nextjs Nestjs Graphql," }),
    translater(currentLanguagee, { es: "buscando nuevos desafíos.", en: "looking for new challenges." }),
  ]
})

const getContentDisplay = (currentLanguagee: string): IContentDisplay => ({
  seeMore: translater(currentLanguagee, { es: "...ver mas", en: "...see more" }),
  seeLess: translater(currentLanguagee, { es: "ver menos", en: "see less" }),
})
const getTopicTitle = (currentLanguagee: string): string => (
  translater(currentLanguagee, { es: "Temas", en: "Topics" })
)

export const useMultiLanguage = () => {
  const { locale: currentLanguage } = useRouter()
  const [navbar, setNavbar] = useState<INavbar>(getNavbar(currentLanguage))
  const [titleAboutMe, setTitleAboutMe] = useState<ITitelAboutMe>(getTitleAboutMe(currentLanguage))
  const [contentDisplayCardProject, setContentDisplayCardProject] = useState<IContentDisplay>(getContentDisplay(currentLanguage))
  const [topicTitle, setTopicTitle] = useState<string>(getTopicTitle(currentLanguage))
  const [projects, setProjects] = useState<List<IProject>>(getProjects(currentLanguage))

  useEffect(() => {
    if (currentLanguage) {
      setNavbar(getNavbar(currentLanguage))
      setTitleAboutMe(getTitleAboutMe(currentLanguage))
      setContentDisplayCardProject(getContentDisplay(currentLanguage))
      setTopicTitle(getTopicTitle(currentLanguage))
      setProjects(getProjects(currentLanguage))
    }
  }, [currentLanguage])

  return { currentLanguagee: currentLanguage, navbar, titleAboutMe, contentDisplayCardProject, projects, topicTitle }
}
