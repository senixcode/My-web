import { useRouter } from "next/router"
import { useEffect, useReducer } from "react"
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
interface multiLanguageReducer {
  navbar?: INavbar,
  titleAboutMe?: ITitelAboutMe,
  contentDisplay?: IContentDisplay,
  topicTitle?: string,
  projects?: List<IProject>
}
const initialState = (currentLanguage: string): multiLanguageReducer => ({
  navbar: getNavbar(currentLanguage),
  titleAboutMe: getTitleAboutMe(currentLanguage),
  contentDisplay: getContentDisplay(currentLanguage),
  topicTitle: getTopicTitle(currentLanguage),
  projects: getProjects(currentLanguage),
})
export enum TypeReducerMultiLanguage {
  NAVBAR = "NAVBAR",
  TITLE_ABOUTME = "TITLE_ABOUTME",
  CONTENT_DISPLAY = "CONTENT_DISPLAY",
  TOPIC_TITLE = "TOPIC_TITLE",
  PROJECT = "PROJECT"
}
interface IActionReducerMultiLanguage {
  type: TypeReducerMultiLanguage,
  value: any,
}
const reducer = (state: multiLanguageReducer, action: IActionReducerMultiLanguage) => {
  switch (action.type) {
    case TypeReducerMultiLanguage.NAVBAR:
      return { ...state, navbar: action.value } as multiLanguageReducer
    case TypeReducerMultiLanguage.TITLE_ABOUTME:
      return { ...state, titleAboutMe: action.value } as multiLanguageReducer
    case TypeReducerMultiLanguage.CONTENT_DISPLAY:
      return { ...state, contentDisplay: action.value } as multiLanguageReducer
    case TypeReducerMultiLanguage.TOPIC_TITLE:
      return { ...state, topicTitle: action.value } as multiLanguageReducer
    case TypeReducerMultiLanguage.PROJECT:
      return { ...state, projects: action.value } as multiLanguageReducer
    default:
      return state
  }
}
export const useMultiLanguage = (type: TypeReducerMultiLanguage) => {
  const { locale: currentLanguage } = useRouter()
  const [state, dispatch] = useReducer(reducer, initialState(currentLanguage))

  useEffect(() => {
    if (currentLanguage) {
      switch (type) {
        case TypeReducerMultiLanguage.NAVBAR:
          return dispatch({ type, value: getNavbar(currentLanguage) })
        case TypeReducerMultiLanguage.TITLE_ABOUTME:
          return dispatch({ type, value: getTitleAboutMe(currentLanguage) })
        case TypeReducerMultiLanguage.CONTENT_DISPLAY:
          return dispatch({ type, value: getContentDisplay(currentLanguage) })
        case TypeReducerMultiLanguage.TOPIC_TITLE:
          return dispatch({ type, value: getTopicTitle(currentLanguage) })
        case TypeReducerMultiLanguage.PROJECT:
          return dispatch({ type, value: getProjects(currentLanguage) })
        default:
          break;
      }
    }
  }, [currentLanguage])

  return state
}
