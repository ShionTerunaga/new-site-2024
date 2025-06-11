import { lang, Language } from "@/utils/lang";

export const getLangList = (): Record<string, Language>[] => {
    return lang.map((ln) => {
        return {
            lang: ln
        };
    });
};
