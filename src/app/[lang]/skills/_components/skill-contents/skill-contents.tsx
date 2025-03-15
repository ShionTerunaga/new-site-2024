import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./style.css";
import { en } from "@/shared/lang/en";

interface Props {
    /** title of contents */
    title: string;
    /** contents of popup */
    contents: string;
    /** image of popup */
    image: StaticImageData;
    imageB?: StaticImageData;
    /** official URL  */
    url: string;
}

const SkillContents = ({ title, contents, image, imageB, url }: Props) => {
    return (
        <>
            <h2 className={styles.heading2}>{title}</h2>
            <div className={styles.image}>
                <Image
                    src={
                        image
                            ? (imageB ?? image)
                            : "https://placehold.jp/200x125.png"
                    }
                    width={200}
                    height={125}
                    alt=""
                    className={styles.imageContents}
                />
            </div>
            <div className={styles.description}>
                <p>{contents}</p>
                <Link href={url} target="_blank">
                    {en.skills.official}
                </Link>
            </div>
        </>
    );
};

export default SkillContents;
