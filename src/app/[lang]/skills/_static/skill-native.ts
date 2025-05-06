import { RN } from "./assets";
import { CardType } from "@/components/elements/card";
import { Lang } from "@/shared/lang/ja";

export const skillNative = (t: Lang): CardType[] => {
    return [
        {
            ...t.skills.nativeSkill.skill1,
            image: RN
        }
    ];
};
