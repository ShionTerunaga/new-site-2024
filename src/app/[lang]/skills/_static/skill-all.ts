import { ContentsAll } from "../_components/card-collection/contents-all.type";
import { skillNative } from "./skill-native";
import { skillOthers } from "./skill-others";
import { skillWeb } from "./skill-web";
import { i18n, Language } from "@/utils/lang";

export const allSkills = (lang: Language): ContentsAll[] => {
    const t = i18n(lang);

    return [
        {
            title: t.skills.webSkills.title,
            contents: skillWeb(t)
        },
        {
            title: t.skills.nativeSkill.title,
            contents: skillNative(t)
        },
        {
            title: t.skills.otherSkill.title,
            contents: skillOthers(t)
        }
    ];
};
