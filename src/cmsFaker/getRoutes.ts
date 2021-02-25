import { ILenguage } from "../interface/Lenguages";

export const getRoutes = (lenguage: string = "en"): Array<IRoutes> => {
  const routes: ILenguage<Array<IRoutes>> = {
    en: [
      {
        path: "/",
        title: "About me",
      },
      {
        path: "/projects",
        title: "Projects",
      },
    ],
    es: [
      {
        path: "/",
        title: "Sobre mi",
      },
      {
        path: "/projects",
        title: "Mis proyectos",
      },
    ],
  };
  return lenguage === "en" ? routes.en : routes.es;
};

export interface IRoutes {
  path: string;
  title: string;
}