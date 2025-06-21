import { i18n, Language } from "@/utils/lang";

export function getAppeal(lang: Language): string[] {
    const t = i18n(lang);

    const appeals: string[] = [
        t.about.appeal.point1,
        t.about.appeal.point2,
        t.about.appeal.point3,
        t.about.appeal.point4,
        t.about.appeal.point5
    ];

    return appeals;
}
