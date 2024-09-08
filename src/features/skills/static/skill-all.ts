import { skillWeb } from "./skill-web"
import { contentsAll } from "@/features/skills/components/cardView/card-collection/contents-all.type"
import { en } from "@/shared/lang/en"

export const allSkills: contentsAll[] = [
    {
        title: en.skills.webSkills.title,
        contents: skillWeb
    }
]
