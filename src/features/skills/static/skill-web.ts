import JS from "@/assets/skills/js.png"
import NEXT from "@/assets/skills/next-js.png"
import REACT from "@/assets/skills/react.png"
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
    },
    {
        ...en.skills.webSkills.skill3,
        image: REACT
    },
    {
        ...en.skills.webSkills.skill4,
        image: NEXT
    }
]
