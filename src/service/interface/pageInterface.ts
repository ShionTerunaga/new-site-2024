import { getAllCMS } from "../model"
import { cardType } from "@/components/ui/card"
import { routingPaths } from "@/shared/static/routingPaths"

export const pageInterface = async () => {
    const list = await getAllCMS()

    const card: cardType[] = list.contents.map((item) => {
        return {
            path: `${routingPaths.activity}${item.id}`,
            title: item.title,
            image: item.image.url,
            description: item.description
        }
    })

    return { contents: card }
}
