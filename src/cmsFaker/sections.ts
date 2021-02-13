import { ISections } from "../interface/Sections";

import {ExperienceSection,AboutMeSection,SkillSection} from "../components/sections"
export const sections:Array<ISections> = [
    {
        name:"aboutMe",
        Component:AboutMeSection
    },
    {
        name:"skill",
        Component:SkillSection
    },
    {
        name:"experience",
        Component:ExperienceSection
    }
]