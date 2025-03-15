import { i18n } from "@/utils/lang";

export const getAppeal = (lang: string): string[] => {
    const t = i18n(lang);

    const appeals: string[] = [
        t.about.appeal.point1,
        t.about.appeal.point2,
        t.about.appeal.point3,
        t.about.appeal.point4,
        t.about.appeal.point5
    ];

    return appeals;
};
