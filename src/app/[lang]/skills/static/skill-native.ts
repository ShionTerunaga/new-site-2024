import REACT from "@/assets/skills/react-native.svg"
import { cardType } from "@/components/card"

export const skillNative = (t: any): cardType[] => {
    return [
        {
            ...t.skills.nativeSkill.skill1,
            image: REACT
        }
    ]
}
