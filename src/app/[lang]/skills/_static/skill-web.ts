import {
    BUN_JS,
    EXPRESS,
    EXPRESS_B,
    JS,
    NEXT,
    NEXT_B,
    REACT_PIC,
    STORY_BOOK,
    TS,
    VANILLA_EXTRACT,
    VT
} from "./assets";
import { CardType } from "@/components/elements/card/card.type";

export const skillWeb = (t: any): CardType[] => {
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
            image: NEXT,
            imageB: NEXT_B
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
            image: EXPRESS,
            imageB: EXPRESS_B
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
