import BUN from "@/assets/skills/bun-js.png"
import JS from "@/assets/skills/javascript.png"
import NEXT_B from "@/assets/skills/next-js-b.svg"
import NEXT from "@/assets/skills/next-js.svg"
import EXPRESS from "@/assets/skills/node&exp.svg"
import EXPRESS_B from "@/assets/skills/node-b.svg"
import REACT from "@/assets/skills/react.svg"
import STORYBOOK from "@/assets/skills/storybook.svg"
import TS from "@/assets/skills/ts.svg"
import VANILLA_EXTRACT from "@/assets/skills/vanilla-extract.png"
import VITEST from "@/assets/skills/vitest.svg"
import { CardType } from "@/components/card/card.type"

export const skillWeb = (t: any): CardType[] => {
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
            image: NEXT,
            imageB: NEXT_B
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
            image: EXPRESS,
            imageB: EXPRESS_B
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
