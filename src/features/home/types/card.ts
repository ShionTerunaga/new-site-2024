import { StaticImageData } from "next/image"

export type cardType = {
    path: string
    image: string | StaticImageData
    title: string
    description: string
}
