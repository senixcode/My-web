import { routes } from "./projects/dataByLanguage";
import { IProjects } from "./projects/interfaces";

export const getProjects = (lenguage: string = "en"): Array<IProjects> => {
  return lenguage === "en" ? routes.en : routes.es;
};
