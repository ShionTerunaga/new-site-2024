import { ABOUT_ICON, INTRO_ICON, PRODUCT_ICON, SKILL_ICON } from "./assets";
import { CardType } from "@/components/elements/card";
import { i18n, Language } from "@/utils/lang";
import { routingPath } from "@/utils/routing-paths";

export const staticCard = (lang: Language): CardType[] => {
    const t = i18n(lang);
    const paths = routingPath(lang);

    return [
        {
            path: paths.intro,
            image: INTRO_ICON,
            title: t.home.card.card1.title,
            description: t.home.card.card1.description
        },
        {
            path: paths.skills,
            image: SKILL_ICON,
            title: t.home.card.card2.title,
            description: t.home.card.card2.description
        },
        {
            path: paths.activity,
            image: PRODUCT_ICON,
            title: t.home.card.card3.title,
            description: t.home.card.card3.description
        },
        {
            path: paths.about,
            image: ABOUT_ICON,
            title: t.home.card.card4.title,
            description: t.home.card.card4.description
        }
    ];
};
