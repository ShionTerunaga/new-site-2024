import Image, { StaticImageData } from "next/image"
import styles from "./style.css"

interface props {
    image?: StaticImageData | string
    title: string
    description: string
}

export const Card = (props: props) => {
    return (
        <div className={styles.box}>
            <picture className={styles.picture}>
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
            <div className={styles.textBox}>
                <h2 className={styles.h2}>{props.title}</h2>
                <div className={styles.descriptionBox}>
                    <p className={styles.description}>{props.description}</p>
                </div>
            </div>
        </div>
    )
}
