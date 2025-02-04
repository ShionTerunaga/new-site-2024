import ABOUT from "@/assets/home/about.png"
import INTRO from "@/assets/home/introduction.png"
import PRODUCTION from "@/assets/home/product.png"
import SKILL from "@/assets/home/skill.png"
import { cardType } from "@/components/card"
import { i18n } from "@/shared/static/lang"
import { routingPath } from "@/shared/static/routingPaths"

export const staticCard = (lang: string): cardType[] => {
    const t = i18n(lang)
    const paths = routingPath(lang)

    return [
        {
            path: paths.intro,
            image: INTRO,
            title: t.home.card.card1.title,
            description: t.home.card.card1.description
        },
        {
            path: paths.skills,
            image: SKILL,
            title: t.home.card.card2.title,
            description: t.home.card.card2.description
        },
        {
            path: paths.activity,
            image: PRODUCTION,
            title: t.home.card.card3.title,
            description: t.home.card.card3.description
        },
        {
            path: paths.about,
            image: ABOUT,
            title: t.home.card.card4.title,
            description: t.home.card.card4.description
        }
    ]
}
