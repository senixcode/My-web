import { ISections } from "../interface/Sections";

import {ExperienceSection,HomeSection,SkillSection} from "../components/sections"
export const sections:Array<ISections> = [
    {
        name:"aboutMe",
        Component:HomeSection
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