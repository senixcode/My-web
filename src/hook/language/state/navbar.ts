import { translater } from "../helper";
import { INavbar } from "../types";

export const getNavbar = (currentLanguagee: string): INavbar => ({
    aboutMe: translater(currentLanguagee, { es: "Sobre mi", en: "About me" }),
    projects: translater(currentLanguagee, { es: "Mis proyectos", en: "Projects" }),
})
