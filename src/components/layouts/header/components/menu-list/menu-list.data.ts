import { i18n, Language } from "@/utils/lang";
import { routingPath } from "@/utils/routing-paths";

export const staticMenu = (lang: Language) => {
    const t = i18n(lang);
    const paths = routingPath(lang);

    return [
        {
            path: paths.home,
            pageName: t.home.title
        },
        {
            path: paths.intro,
            pageName: t.home.card.card1.title
        },
        {
            path: paths.skills,
            pageName: t.home.card.card2.title
        },
        {
            path: paths.activity,
            pageName: t.home.card.card3.title
        },
        {
            path: paths.about,
            pageName: t.home.card.card4.title
        }
    ];
};
