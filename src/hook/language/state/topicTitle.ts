import { translater } from "../helper"

export const getTopicTitle = (currentLanguagee: string): string =>
  translater(currentLanguagee, { es: "Temas", en: "Topics" })
