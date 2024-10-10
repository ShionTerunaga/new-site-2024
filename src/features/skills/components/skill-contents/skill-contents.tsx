import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import styles from "./style.css"
import { en } from "@/shared/lang/en"

interface props {
    /** title of contents */
    title: string
    /** contents of popup */
    contents: string
    /** image of popup */
    image: StaticImageData | string
    imageB?: StaticImageData | string
    /** official URL  */
    url: string
}

const SkillContents = (props: props) => {
    return (
        <>
            <h2 className={styles.heading2}>{props.title}</h2>
            <div className={styles.image}>
                <Image
                    src={
                        props.image
                            ? props.imageB ?? props.image
                            : "https://placehold.jp/200x125.png"
                    }
                    width={200}
                    height={125}
                    alt=""
                    className={styles.imageContents}
                />
            </div>
            <div className={styles.description}>
                <p>{props.contents}</p>
                <Link href={props.url} target="_blank">
                    {en.skills.official}
                </Link>
            </div>
        </>
    )
}

export default SkillContents
