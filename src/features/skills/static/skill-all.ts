import { skillNative } from "./skill-native"
import { skillOthers } from "./skill-others"
import { skillWeb } from "./skill-web"
import { contentsAll } from "@/features/skills/components/cardView/card-collection/contents-all.type"
import { i18n } from "@/shared/static/lang"

export const allSkills = (lang: string): contentsAll[] => {
    const t = i18n(lang)

    return [
        {
            title: t.skills.webSkills.title,
            contents: skillWeb(t)
        },
        {
            title: t.skills.nativeSkill.title,
            contents: skillNative(t)
        },
        {
            title: t.skills.otherSkill.title,
            contents: skillOthers(t)
        }
    ]
}
