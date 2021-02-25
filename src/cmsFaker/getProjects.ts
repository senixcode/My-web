import { ILenguage } from "../interface/Lenguages";
export interface IProjects {
  id:number;
  title: string;
  description: string;
  topics: Array<string>;
}
export const getProjects = (lenguage: string = "en"): Array<IProjects> => {
  const routes: ILenguage<Array<IProjects>> = {
    en: [
      {
        id:1,
        title: "example1",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel ipsa aliquam accusamus ex dignissimos id, inventore pariatur ullam perferendis ipsam.",
        topics: ["example", "example", "example"],
      },
      {
        id:2,
        title: "example2",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel ipsa aliquam accusamus ex dignissimos id, inventore pariatur ullam perferendis ipsam.",
        topics: ["example", "example", "example"],
      },
    ],
    es: [
      {
        id:1,
        title: "ejemplo1",
        description:
          " Las plantillas de evitar el Lorem Ipsum, optando en su lugar para el texto de marcador de posición que está en la llanura Inglés y más de cerca se asemeja real de la copia.",
          topics: ["ejemplo", "ejemplo", "ejemplo"],
      },
      {
        id:2,
        title: "ejemplo2",
        description:
          " Las plantillas de evitar el Lorem Ipsum, optando en su lugar para el texto de marcador de posición que está en la llanura Inglés y más de cerca se asemeja real de la copia.",
        topics: ["ejemplo", "ejemplo", "ejemplo"],
      },
    ],
  };
  return lenguage === "en" ? routes.en : routes.es;
};
