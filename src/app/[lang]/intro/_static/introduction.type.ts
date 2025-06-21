import { StaticImageData } from "next/image";

export interface IntroType {
    /**
     * item
     */
    title: string;
    /**
     * answer
     */
    headerContents: string;
    /**
     * description
     */
    bodyContents: string;
    /**
     * image
     */
    image?: StaticImageData;
}
