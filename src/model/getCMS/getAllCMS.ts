import { MicroCMSListResponse, MicroCMSQueries } from "microcms-js-sdk"
import { activeType } from "./getCMS.type"
import { client } from "@/lib/client"

export const getAllCMS = async (
    queries?: MicroCMSQueries
): Promise<MicroCMSListResponse<activeType>> => {
    const listData = await client.getList<activeType>({
        endpoint: "active",
        queries
    })

    return listData
}
