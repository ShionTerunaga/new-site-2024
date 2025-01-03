import Image from "next/image"
import styles from "./style.css"

interface props {
    image?: any
    title: string
    description: string
    isSkills?: boolean
}

export const Card = ({ image, title, description, isSkills }: props) => {
    return (
        <div className={`${styles.box} ${isSkills ? styles.isSkills : null}`}>
            <picture>
                <Image
                    src={image ? image : "https://placehold.jp/200x125.png"}
                    width={200}
                    height={125}
                    alt=""
                    className={styles.image}
                />
            </picture>
            <div
                className={description === "" ? styles.noneContents : undefined}
            >
                <h2
                    className={`${styles.h2} ${isSkills ? styles.isSkillsH2 : null}`}
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
    )
}
