import { i18n } from "@/shared/static/lang"
import { routingPath } from "@/shared/static/routingPaths"

export const staticMenu = (lang: string) => {
    const t = i18n(lang)
    const paths = routingPath(lang)

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
            path: paths.activity,
            pageName: t.home.card.card4.title
        }
    ]
}
