import { ISkill } from "../interface/Skill";
const URL_ICONS = "https://raw.githubusercontent.com/senixcode/My-web/feat/new-web/src/image/skills/"
const FORMAT:string = ".svg"
const Concat = (skill:string):string => `${URL_ICONS}${skill}${FORMAT}`
export const skills: Array<ISkill> = [
  {
    icon: Concat("ts"),
    name: "Typescript" ,
  },
  {
    icon: Concat("react"),
    name: "React js",
  },
  {
    icon: Concat("vue"),
    name: "Vue js",
  },
  {
    icon: Concat("node"),
    name: "Node js",
  },
  {
    icon: Concat("graphql"),
    name: "Graphql",
  },
  {
    icon: Concat("jwt"),
    name: "jwt",
  },
  {
    icon: Concat("mongo"),
    name: "Mongodb",
  },
  {
    icon: Concat("docker"),
    name: "Docker",
  },
];
