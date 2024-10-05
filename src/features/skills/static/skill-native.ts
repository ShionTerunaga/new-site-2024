import REACT from "@/assets/skills/react.png"
import { cardType } from "@/components/ui/card"

export const skillNative = (t: any): cardType[] => {
    return [
        {
            ...t.skills.nativeSkill.skill1,
            image: REACT
        }
    ]
}
