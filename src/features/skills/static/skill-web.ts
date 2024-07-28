import JS from "@/assets/skills/js.png"
import TS from "@/assets/skills/ts.png"
import { cardType } from "@/components/card/card.type"
import { en } from "@/shared/lang/en"

export const skillWeb: cardType[] = [
    {
        ...en.skills.webSkills.skill1,
        image: JS
    },
    {
        ...en.skills.webSkills.skill2,
        image: TS
    }
]
