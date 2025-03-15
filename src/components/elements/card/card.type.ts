import { StaticImageData } from "next/image";

export type CardType = {
    path: string;
    image: StaticImageData;
    title: string;
    description: string;
};
