import { ITopic } from "../../interface/Topic";

export interface ILink {
  href?: string;
  icon?: string;
  name?: string;
  category?: string;
  __typename?: string;
}
export interface RepeatPropertiesProject {
  titleSeo: string;
  topics: Array<ITopic>;
  links?: Array<ILink>;
}
export interface IProjects extends RepeatPropertiesProject {
  id: number;
  title: string;
  summary: string;
  descriptions: Array<string>;
  __typename?: string;
}
