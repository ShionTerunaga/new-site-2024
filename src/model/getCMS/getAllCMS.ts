import { MicroCMSQueries } from "microcms-js-sdk"
import { activeType } from "./getCMS.type"
import { cardType } from "@/components/ui/card"
import { contentsAll } from "@/components/view/cardView/types/contents-all.type"
import { client } from "@/lib/client"
import { routingPaths } from "@/shared/static/routingPaths"

export const getAllCMS = async (
    queries?: MicroCMSQueries
): Promise<contentsAll> => {
    const listData = await client.getList<activeType>({
        endpoint: "active",
        queries
    })

    const card: cardType[] = listData.contents.map((item) => {
        return {
            path: `${routingPaths.activity}${item.id}`,
            title: item.title,
            image: item.image.url,
            description: item.description
        }
    })

    const res: contentsAll = {
        contents: card
    }

    return res
}
