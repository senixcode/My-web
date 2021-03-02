import { SEO_SEPARATOR } from "../../globalVariables";
import { IProjects } from "./interfaces";

export const getProjectByTitle = (
  projects: Array<IProjects>,
  titleSeo: string
): IProjects => {
  const project = projects.filter(
    (project) => project.titleSeo === titleSeo
  )[0];
  return project;
};

export const seoTitle = (title: string, lenguage: string = "en"): string => {
  const newTitle = `${title.toLowerCase()} ${SEO_SEPARATOR} Senixcode`;
  return lenguage === "en" ? `Details ${newTitle}` : `Detalles ${newTitle}`;
};