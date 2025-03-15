import RUN from "@/assets/introduction/running.jpg";
import SPITZ from "@/assets/introduction/spitz.png";
import YAKINIKU from "@/assets/introduction/yakiniku.jpg";
import { i18n } from "@/utils/lang";

export const introData = (lang: string) => {
    const t = i18n(lang);

    return [
        {
            title: t.intro.introData.intro1.title,
            headerContents: t.intro.introData.intro1.headerContents,
            bodyContents: t.intro.introData.intro1.bodyContents,
            image: YAKINIKU
        },
        {
            title: t.intro.introData.intro2.title,
            headerContents: t.intro.introData.intro2.headerContents,
            bodyContents: t.intro.introData.intro2.bodyContents,
            image: RUN
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
            image: SPITZ
        }
    ];
};
