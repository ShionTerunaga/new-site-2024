import { MEAT_PIC, RUN_PIC, SPITZ_PIC } from "./assets";
import { i18n, Language } from "@/utils/lang";

export function introData(lang: Language) {
    const t = i18n(lang);

    return [
        {
            title: t.intro.introData.intro1.title,
            headerContents: t.intro.introData.intro1.headerContents,
            bodyContents: t.intro.introData.intro1.bodyContents,
            image: MEAT_PIC
        },
        {
            title: t.intro.introData.intro2.title,
            headerContents: t.intro.introData.intro2.headerContents,
            bodyContents: t.intro.introData.intro2.bodyContents,
            image: RUN_PIC
        },
        {
            title: t.intro.introData.intro3.title,
            headerContents: t.intro.introData.intro3.headerContents,
            bodyContents: t.intro.introData.intro3.bodyContents
        },
        {
            title: t.intro.introData.intro4.title,
            headerContents: t.intro.introData.intro4.headerContents,
            bodyContents: t.intro.introData.intro4.bodyContents,
            image: SPITZ_PIC
        }
    ];
}
