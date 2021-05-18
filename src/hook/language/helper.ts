import { ILanguage, Language } from "./types"

export const paserDescription = (description: string): Array<string> => (
    // eslint-disable-next-line no-useless-escape
    description.match(/([^\.!\?]+[\.!\?]+)|([^\.!\?]+$)/g).map(paraphos => paraphos.trim())
)

export const translater = (locale: string, language: ILanguage): string => (
    locale === Language.ES ? language.es : language.en
)
