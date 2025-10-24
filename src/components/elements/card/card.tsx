import Image, { StaticImageData } from "next/image";
import styles from "./style.css";
import { CheckerProps } from "@/shared/types/props";

interface Props {
    image?: string | StaticImageData;
    title: string;
    description: string;
    isSkills?: boolean;
}

export function Card<T extends Props>({
    image,
    title,
    description,
    isSkills
}: CheckerProps<T, Props>) {
    const containerClass = isSkills ? styles.isSkills : "";
    const descriptionClass = description === "" ? styles.noneContents : "";

    return (
        <div className={`${styles.box} ${containerClass}`}>
            <picture>
                <Image
                    src={image ? image : "https://placehold.jp/200x125.png"}
                    width={200}
                    height={125}
                    alt=""
                    className={styles.image}
                />
            </picture>
            <div className={descriptionClass}>
                <h2
                    className={`${styles.h2} ${isSkills ? styles.isSkillsH2 : ""}`}
                >
                    {title}
                </h2>
                {description !== "" && (
                    <div className={styles.descriptionBox}>
                        <p className={styles.description}>{description}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
