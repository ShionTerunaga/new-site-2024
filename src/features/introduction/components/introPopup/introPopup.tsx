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
            <div className={styles.description}>{props.description}</div>
            <div>
                {props.image && (
                    <Image src={props.image} alt="" width={200} height={200} />
                )}
            </div>
        </>
    )
}

export default IntroPopup
