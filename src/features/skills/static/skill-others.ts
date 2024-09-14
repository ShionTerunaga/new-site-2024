import GIT from "@/assets/skills/git-github.png"
import PYTHON from "@/assets/skills/python.png"
import RASPI from "@/assets/skills/raspi.png"
import { cardType } from "@/components/ui/card"
import { en } from "@/shared/lang/en"

export const skillOthers: cardType[] = [
    {
        ...en.skills.otherSkill.skill1,
        image: PYTHON
    },
    {
        ...en.skills.otherSkill.skill2,
        image: RASPI
    },
    {
        ...en.skills.otherSkill.skill3,
        image: GIT
    }
]
