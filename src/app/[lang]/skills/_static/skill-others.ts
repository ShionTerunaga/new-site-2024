import GIT_B from "@/assets/skills/git&github-b.svg"
import GIT from "@/assets/skills/git&github.svg"
import PYTHON from "@/assets/skills/python.svg"
import RASPI from "@/assets/skills/raspberry-pi.svg"
import { CardType } from "@/components/elements/card"

export const skillOthers = (t: any): CardType[] => {
    return [
        {
            ...t.skills.otherSkill.skill1,
            image: PYTHON
        },
        {
            ...t.skills.otherSkill.skill2,
            image: RASPI
        },
        {
            ...t.skills.otherSkill.skill3,
            image: GIT,
            imageB: GIT_B
        }
    ]
}
