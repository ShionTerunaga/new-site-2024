import BUN from "@/assets/skills/bun-js.png"
import EXPRESS from "@/assets/skills/express.png"
import JS from "@/assets/skills/js.png"
import NEXT from "@/assets/skills/next-js.png"
import REACT from "@/assets/skills/react.png"
import STORYBOOK from "@/assets/skills/storybook.png"
import TS from "@/assets/skills/ts.png"
import VANILLA_EXTRACT from "@/assets/skills/vanilla-extract.png"
import VITEST from "@/assets/skills/vitest.png"
import { cardType } from "@/components/ui/card/card.type"

export const skillWeb = (t: any): cardType[] => {
    return [
        {
            ...t.skills.webSkills.skill1,
            image: JS
        },
        {
            ...t.skills.webSkills.skill2,
            image: TS
        },
        {
            ...t.skills.webSkills.skill3,
            image: REACT
        },
        {
            ...t.skills.webSkills.skill4,
            image: NEXT
        },
        {
            ...t.skills.webSkills.skill5,
            image: VANILLA_EXTRACT
        },
        {
            ...t.skills.webSkills.skill6,
            image: STORYBOOK
        },
        {
            ...t.skills.webSkills.skill7,
            image: EXPRESS
        },
        {
            ...t.skills.webSkills.skill8,
            image: VITEST
        },
        {
            ...t.skills.webSkills.skill9,
            image: BUN
        }
    ]
}
