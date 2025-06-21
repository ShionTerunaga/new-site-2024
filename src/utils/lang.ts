import { en } from "../shared/lang/en";
import { ja } from "../shared/lang/ja";

export const JA = "ja" as const;
export const EN = "en" as const;

export const lang: Language[] = [JA, EN];

export type Language = typeof JA | typeof EN;

export function i18n(lang: Language) {
    switch (lang) {
        case "en":
            return en;
        case "ja":
            return ja;
    }
}

export function isLanguage(str: unknown): str is Language {
    return str === JA || str === EN;
}
