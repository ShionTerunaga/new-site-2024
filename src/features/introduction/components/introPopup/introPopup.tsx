import Image, { StaticImageData } from "next/image"
import styles from "./style.css"

interface props {
    answer: string
    description: string
    image?: StaticImageData
}

const IntroPopup = (props: props) => {
    return (
        <>
            <h2 className={styles.heading2}>{props.answer}</h2>
                <div className={styles.description}>
                    <p className={styles.contents}>{props.description}</p>
                    {props.image && (
                        <Image
                            src={props.image}
                            alt=""
                            width={200}
                            height={200}
                            className={styles.img}
                        />
                    )}
                </div>
        </>
    )
}

export default IntroPopup
