import { ILanguage, Language } from "./types"

export const paserDescription = (description: string): Array<string> =>
  description
    // eslint-disable-next-line no-useless-escape
    .match(/([^\.!\?]+[\.!\?]+)|([^\.!\?]+$)/g)
    .map((paraphos) => paraphos.trim())

export const translater = (locale: string, language: ILanguage): string =>
  locale === Language.ES ? language.es : language.en
