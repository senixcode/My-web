import { ComponentType, ReactElement, ReactNode } from "react";
import { ICON_GITHUB, ICON_LINK, ICON_FIGMA } from "../../globalVariables/icons";
import { ILenguage } from "../../interface/Lenguages";
import { IProjects, RepeatPropertiesProject } from "./interfaces";
import { SEO_GITHUB, SEO_LINK, SEO_FIGMA } from "./variables";

const repeatPropertiesProject: Array<RepeatPropertiesProject> = [
  {
    titleSeo: "my-website",
    topics: [
      "Figma",
      "Next.js",
      "TypeScript",
      "yarn",
      "Font Awesome",
      "svg",
      "styled-components",
      "customized design system",
      "Vercel",
    ],
    links: [
      {
        nameSeo: SEO_GITHUB,
        name: ICON_GITHUB,
        link: "https://github.com/senixcode/my-website",
      },
      {
        nameSeo: SEO_LINK,
        name: ICON_LINK,
        link: "https://senixcode.dev/",
      },
      {
        nameSeo: SEO_FIGMA,
        name: ICON_FIGMA,
        link: "https://www.figma.com/file/JwPIDz1ElEbggvg38n9nyA/new-template-my-web?node-id=0%3A1",
      },
    ],
  },
  {
    titleSeo: "simple-ecommerce",
    topics: ["React","npm", "Local-storage", "Material-ui", "automic-geolocation"],
    links: [
      {
        nameSeo: SEO_GITHUB,
        name: ICON_GITHUB,
        link: "https://github.com/senixcode/lightweight-ecommerce-template",
      },
      {
        nameSeo: SEO_LINK,
        name: ICON_LINK,
        link: "https://lightweight-ecommerce-template.netlify.app/",
      },
    ],
  },
];

export const routes: ILenguage<Array<IProjects>> = {
  en: [
    {
      id: 1,
      title: "My website",
      titleSeo: repeatPropertiesProject[0].titleSeo,
      summary:
        'It is the combination of the professional and the personal, in this sprint I have only been able to complete the professional side.',
      descriptions: [
        'It is the combination of the professional and the personal, in this sprint I have only been able to complete the professional side.',
        'This website will always be updated with what I acquire, both the functional part (web) and the abstract (source code). ',
        'It is important to mention that "senixcode" I thought of it in an experimental way, to make myself known in a different way and because it has a more personal meaning.',
        'In conclusion this web will be a summary of what I want to highlight and being my letter of introduction to the world.'
      ],
      topics: repeatPropertiesProject[0].topics,
      links: repeatPropertiesProject[0].links,
    },
    {
      id: 2,
      title: "Simple ecommerce",
      titleSeo: repeatPropertiesProject[1].titleSeo,
      summary:
        "It is a practice project whose main objective was to learn the use of MATERIAL-UI, it has something very cool and that is that it will show you the code of your country automatically.",
      descriptions: [
        "It is a practice project whose main objective was to learn the use of MATERIAL-UI, it has something very cool and that is that it will show you the code of your country automatically.",
      ],
      topics: repeatPropertiesProject[1].topics,
      links: repeatPropertiesProject[1].links,
    },
  ],
  es: [
    {
      id: 1,
      title: "Mi pagina web",
      titleSeo: repeatPropertiesProject[0].titleSeo,
      summary:
        'En conclusión esta web será un resumen de lo que quiero destacar y siendo mi carta de presentación hacia el mundo.',
      descriptions: [
        'Es la combinación de lo profesionalmente y lo personal, en este sprint solo e podido culminar el lado profesional.',
        'Esta web siempre estará actualizada con lo que vaya adquiriendo, tanto la parte funcional (web) y lo abstracta ( código fuente). ',
        'Es importante mencionar que "senixcode" lo pensé de forma experimental,  para darme a conocer de forma distinta y porque tiene un significado mas personal.',
        'En conclusión esta web será un resumen de lo que quiero destacar y siendo mi carta de presentación hacia el mundo.',
      ],
      topics: repeatPropertiesProject[0].topics,
      links: repeatPropertiesProject[0].links,
    },
    {
      id: 2,
      title: "Ecommerce simple",
      titleSeo: repeatPropertiesProject[1].titleSeo,
      summary:
        "Es un proyecto de practica que como objetivo principal fue aprender el uso MATERIAL-UI, tiene algo muy genial y es que le mostrara el código de su país de forma automática.",
      descriptions: [
        "Es un proyecto de practica que como objetivo principal fue aprender el uso MATERIAL-UI, tiene algo muy genial y es que le mostrara el código de su país de forma automática.",
      ],
      topics: repeatPropertiesProject[1].topics,
      links: repeatPropertiesProject[1].links,
    },
  ],
};
