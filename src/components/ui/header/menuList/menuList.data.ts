import { menuType } from "./menuList.type"
import { en } from "@/shared/lang/en"
import { routingPaths } from "@/shared/static/routingPaths"

export const staticMenu: menuType[] = [
    {
        path: routingPaths.intro,
        pageName: en.home.card.card1.title
    },
    {
        path: routingPaths.skills,
        pageName: en.home.card.card2.title
    },
    {
        path: routingPaths.activity,
        pageName: en.home.card.card3.title
    }
]
