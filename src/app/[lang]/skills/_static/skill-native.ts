import { RN } from "./assets";
import { CardType } from "@/components/elements/card";

export const skillNative = (t: any): CardType[] => {
    return [
        {
            ...t.skills.nativeSkill.skill1,
            image: RN
        }
    ];
};
