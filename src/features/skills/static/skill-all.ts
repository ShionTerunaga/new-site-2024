import { skillWeb } from "./skill-web"
import { contentsAll } from "@/components/view/cardView/types/contents-all.type"
import { en } from "@/shared/lang/en"

export const allSkills: contentsAll[] = [
    {
        title: en.skills.webSkills.title,
        contents: skillWeb
    }
]
