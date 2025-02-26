import { StaticImageData } from "next/image"

export type CardType = {
    path: string
    image: string | StaticImageData
    title: string
    description: string
}
