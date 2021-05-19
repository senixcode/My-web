import { Dispatch } from "react"
import { getContentDisplay } from "./state/contentDisplay"
import { getNavbar } from "./state/navbar"
import { getProjects } from "./state/projects"
import { getTitleAboutMe } from "./state/titleAboutMe"
import { getTopicTitle } from "./state/topicTitle"
import { IActionReducerMultiLanguage, multiLanguageReducer, TypeReducerMultiLanguage } from "./types"

export const initialState = (currentLanguage: string): multiLanguageReducer => ({
    [TypeReducerMultiLanguage.NAVBAR]: getNavbar(currentLanguage),
    [TypeReducerMultiLanguage.TITLE_ABOUTME]: getTitleAboutMe(currentLanguage),
    [TypeReducerMultiLanguage.CONTENT_DISPLAY]: getContentDisplay(currentLanguage),
    [TypeReducerMultiLanguage.TOPIC_TITLE]: getTopicTitle(currentLanguage),
    [TypeReducerMultiLanguage.PROJECT]: getProjects(currentLanguage),
})

export const reducer = (state: multiLanguageReducer, action: IActionReducerMultiLanguage) => {
    const { type } = action
    const TYPES = {
        [TypeReducerMultiLanguage.NAVBAR]: () => ({ ...state, navbar: action.value } as multiLanguageReducer),
        [TypeReducerMultiLanguage.TITLE_ABOUTME]: () => ({ ...state, titleAboutMe: action.value } as multiLanguageReducer),
        [TypeReducerMultiLanguage.CONTENT_DISPLAY]: () => ({ ...state, contentDisplay: action.value } as multiLanguageReducer),
        [TypeReducerMultiLanguage.TOPIC_TITLE]: () => ({ ...state, topicTitle: action.value } as multiLanguageReducer),
        [TypeReducerMultiLanguage.PROJECT]: () => ({ ...state, projects: action.value } as multiLanguageReducer),
    }
    return TYPES[type] ? TYPES[type]() : state
}

export const ACTIONS = (type: TypeReducerMultiLanguage, currentLanguage: string, dispatch: Dispatch<IActionReducerMultiLanguage>) => ({
    [TypeReducerMultiLanguage.NAVBAR]: () => dispatch({ type, value: getNavbar(currentLanguage) }),
    [TypeReducerMultiLanguage.TITLE_ABOUTME]: () => dispatch({ type, value: getTitleAboutMe(currentLanguage) }),
    [TypeReducerMultiLanguage.CONTENT_DISPLAY]: () => dispatch({ type, value: getContentDisplay(currentLanguage) }),
    [TypeReducerMultiLanguage.TOPIC_TITLE]: () => dispatch({ type, value: getTopicTitle(currentLanguage) }),
    [TypeReducerMultiLanguage.PROJECT]: () => dispatch({ type, value: getProjects(currentLanguage) }),
})