import { GIT_MAIN, PYTHON, RASPI, RUST } from "./assets";
import { CardType } from "@/components/elements/card";
import { Lang } from "@/shared/lang/ja";

export const skillOthers = (t: Lang): CardType[] => {
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
            image: GIT_MAIN
        },
        {
            ...t.skills.otherSkill.skill4,
            image: RUST
        }
    ];
};
