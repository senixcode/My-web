export interface ILink {
  nameSeo?: string;
  name?: string;
  link?: string;
}
export interface RepeatPropertiesProject {
  titleSeo: string;
  topics: Array<string>;
  links?: Array<ILink>;
}
export interface IProjects extends RepeatPropertiesProject {
  id: number;
  title: string;
  summary: string;
  descriptions: Array<string>;
}
;