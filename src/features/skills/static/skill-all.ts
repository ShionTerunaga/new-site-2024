import { skillAll } from "../types/skills-all.type"
import { skillWeb } from "./skill-web"
import { en } from "@/shared/lang/en"

export const allSkills: skillAll[] = [
    {
        title: en.skills.webSkills.title,
        skills: skillWeb
    }
]
