import { MicroCMSContentId, MicroCMSDate, MicroCMSImage } from "microcms-js-sdk"

export type activeType = {
    description: string
    title: string
    body: string
    image: MicroCMSImage
} & MicroCMSDate &
    MicroCMSContentId
