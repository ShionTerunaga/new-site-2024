import { StaticImageData } from "next/image"

export type IntroType = {
    /**
     * item
     */
    title: string
    /**
     * answer
     */
    headerContents: string
    /**
     * description
     */
    bodyContents: string
    /**
     * image
     */
    image?: StaticImageData
}
