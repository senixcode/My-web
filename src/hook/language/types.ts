
export type List<T> = Array<T>
export enum Language {
    EN = "en",
    ES = "es",
}

export enum Topics {
    TYPESCRIPT = "TypeScript",
    GRAPHQL = "Graphql",
    VERCEL = "Vercel",
    REACT = "Reactjs",
    NEST = "Nestjs",
    NEXT = "Nextjs",
    BOOTSWATCH = "Bootswatch",
    REACT_NATIVE = "React Native",
    CSS = "css",
    EXPO = "expo",
    DIGITAL_OCEAN = "Digital Ocean",
    TERRAFORM = "Terraform",
    DOCKER = "Docker",
    NODE = "Nodejs",
}

export enum CategoryLink {
    VIDEO = "video",
    ICON = "icon",
    IMAGE = "image",
    CODE_LIVE = "code live",
}

export interface ILanguage {
    [Language.EN]: string
    [Language.ES]: string
}

export interface INavbar {
    aboutMe: string
    projects: string
}

export interface ITitelAboutMe {
    first: string,
    selfWritten: List<string>
}

export interface IContentDisplay {
    seeMore: string
    seeLess: string
}

export interface ILink {
    name: string
    href: string
    icon?: string
    category: CategoryLink
}

export interface IProject {
    title: string
    titleSeo: string
    summary: string
    description: List<string>
    topic: List<Topics>
    links: List<ILink>
}