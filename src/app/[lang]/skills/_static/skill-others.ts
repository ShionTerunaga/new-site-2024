import { GIT_MAIN, GIT_SUB, PYTHON, RASPI } from "./assets";
import { CardType } from "@/components/elements/card";

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
            image: GIT_MAIN,
            imageB: GIT_SUB
        }
    ];
};
