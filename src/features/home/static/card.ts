import { cardType } from "../types/card"
import CONTACT from "@/assets/contact.png"
import INTRO from "@/assets/introduction.png"
import PRODUCTION from "@/assets/product.png"
import SKILL from "@/assets/skill.png"
import { en } from "@/shared/lang/en"

export const staticCard: cardType[] = [
    {
        path: "",
        image: INTRO,
        title: en.home.card.card1.title,
        description: en.home.card.card1.description
    },
    {
        path: "",
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
