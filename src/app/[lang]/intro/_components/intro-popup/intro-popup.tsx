import Image, { StaticImageData } from "next/image";
import styles from "./style.css";
import { CheckerProps } from "@/shared/types/props";
import { memo } from "react";

interface Props {
    answer: string;
    description: string;
    image?: StaticImageData;
}

const IntroPopup = memo(function <T extends Props>({
    answer,
    description,
    image
}: CheckerProps<T, Props>) {
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
});

IntroPopup.displayName = "IntroPopup";

export default IntroPopup;
