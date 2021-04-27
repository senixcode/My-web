import { Language } from "./Lenguages";

export interface IRoutes {
  path: string;
  title: string;
  language?:Language;
   __typename?:string;
}