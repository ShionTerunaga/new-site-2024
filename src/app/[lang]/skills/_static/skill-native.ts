import REACT from "@/assets/skills/react-native.svg"
import { CardType } from "@/components/elements/card"

export const skillNative = (t: any): CardType[] => {
    return [
        {
            ...t.skills.nativeSkill.skill1,
            image: REACT
        }
    ]
}
