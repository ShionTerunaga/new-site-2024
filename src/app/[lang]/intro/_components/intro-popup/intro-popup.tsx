import Image, { StaticImageData } from "next/image";
import styles from "./style.css";

interface Props {
    answer: string;
    description: string;
    image?: StaticImageData;
}

const IntroPopup = ({ answer, description, image }: Props) => {
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
    );
};

export default IntroPopup;
