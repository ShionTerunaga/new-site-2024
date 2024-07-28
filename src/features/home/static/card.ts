import { cardType } from "../../../components/card/card.type"
import CONTACT from "@/assets/home/contact.png"
import INTRO from "@/assets/home/introduction.png"
import PRODUCTION from "@/assets/home/product.png"
import SKILL from "@/assets/home/skill.png"
import { en } from "@/shared/lang/en"
import { routingPaths } from "@/shared/static/routingPaths"

export const staticCard: cardType[] = [
    {
        path: routingPaths.intro,
        image: INTRO,
        title: en.home.card.card1.title,
        description: en.home.card.card1.description
    },
    {
        path: routingPaths.skills,
        image: SKILL,
        title: en.home.card.card2.title,
        description: en.home.card.card2.description
    },
    {
        path: "",
        image: PRODUCTION,
        title: en.home.card.card3.title,
        description: en.home.card.card3.description
    },
    {
        path: "",
        image: CONTACT,
        title: en.home.card.card4.title,
        description: en.home.card.card4.description
    }
]
