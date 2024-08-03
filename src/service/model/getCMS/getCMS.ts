import { MicroCMSQueries } from "microcms-js-sdk"
import { activeType } from "./getCMS.type"
import { client } from "@/lib/client"

export const getCMS = async (contentId: string, queries?: MicroCMSQueries) => {
    const detailData = await client.getListDetail<activeType>({
        endpoint: "active",
        contentId,
        queries
    })

    return detailData
}
