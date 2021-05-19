import { translater } from "../helper";
import { IContentDisplay } from "../types";

export const getContentDisplay = (currentLanguagee: string): IContentDisplay => ({
    seeMore: translater(currentLanguagee, { es: "...ver mas", en: "...see more" }),
    seeLess: translater(currentLanguagee, { es: "ver menos", en: "see less" }),
})