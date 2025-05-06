import {
    BUN_JS,
    EXPRESS,
    JS,
    NEXT,
    REACT_PIC,
    STORY_BOOK,
    TS,
    VANILLA_EXTRACT,
    VT
} from "./assets";
import { CardType } from "@/components/elements/card/card.type";
import { Lang } from "@/shared/lang/ja";

export const skillWeb = (t: Lang): CardType[] => {
    return [
        {
            ...t.skills.webSkills.skill1,
            image: JS
        },
        {
            ...t.skills.webSkills.skill2,
            image: TS
        },
        {
            ...t.skills.webSkills.skill3,
            image: REACT_PIC
        },
        {
            ...t.skills.webSkills.skill4,
            image: NEXT
        },
        {
            ...t.skills.webSkills.skill5,
            image: VANILLA_EXTRACT
        },
        {
            ...t.skills.webSkills.skill6,
            image: STORY_BOOK
        },
        {
            ...t.skills.webSkills.skill7,
            image: EXPRESS
        },
        {
            ...t.skills.webSkills.skill8,
            image: VT
        },
        {
            ...t.skills.webSkills.skill9,
            image: BUN_JS
        }
    ];
};
