import Image, { StaticImageData } from "next/image"
import styles, { box } from "./style.css"

interface props {
    image?: StaticImageData | string
    title: string
    description: string
    isSkills?: boolean
}

export const Card = (props: props) => {
    return (
        <div className={`${box} ${props.isSkills ? styles.isSkills : null}`}>
            <picture>
                <Image
                    src={
                        props.image
                            ? props.image
                            : "https://placehold.jp/200x125.png"
                    }
                    width={200}
                    height={125}
                    alt=""
                    className={`${styles.image} ${props.isSkills ? styles.isSkillsImg : null}`}
                />
            </picture>
            <div
                className={
                    props.description === "" ? styles.noneContents : undefined
                }
            >
                <h2
                    className={`${styles.h2} ${props.isSkills ? styles.isSkillsH2 : null}`}
                >
                    {props.title}
                </h2>
                {props.description !== "" && (
                    <div className={styles.descriptionBox}>
                        <p className={styles.description}>
                            {props.description}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
