import styles from "./style.css"
import Image from "next/image"

interface props {
    image?: any
    title: string
    description: string
    isSkills?: boolean
}

export const Card = (props: props) => {
    return (
        <div
            className={`${styles.box} ${props.isSkills ? styles.isSkills : null}`}
        >
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
                    className={styles.image}
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
