import { lang, Language } from "@/utils/lang";

export function getLangList(): Record<string, Language>[] {
    return lang.map((ln) => {
        return {
            lang: ln
        };
    });
}
