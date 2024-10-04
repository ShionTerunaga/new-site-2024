import GIT from "@/assets/skills/git-github.png"
import PYTHON from "@/assets/skills/python.png"
import RASPI from "@/assets/skills/raspi.png"
import { cardType } from "@/components/ui/card"

export const skillOthers = (t: any): cardType[] => {
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
            image: GIT
        }
    ]
}
