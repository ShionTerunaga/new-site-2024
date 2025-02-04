import Image from "next/image"
import styles from "./style.css"

interface props {
    answer: string
    description: string
    image?: any
}

const IntroPopup = ({ answer, description, image }: props) => {
    return (
        <>
            <h2 className={styles.heading2}>{answer}</h2>
            <div className={styles.description}>
                <p className={styles.contents}>{description}</p>
                {image && (
                    <Image
                        src={image}
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
