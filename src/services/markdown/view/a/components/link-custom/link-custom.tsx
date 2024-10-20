import Link from "next/link"
import React from "react"
import { getUrlContents } from "../../model/get-url-contents/get-url-contents"
import styles from "./style.css"

interface props {
    url: string
}

const LinkCustom = async (props: props) => {
    try {
        const ogp = await getUrlContents(props.url)

        if (ogp.url) {
            return (
                <Link href={ogp.url}>
                    <iframe src={ogp.url} />
                </Link>
            )
        }

        return (
            <a href={props.url} target="_blank" className={styles.container}>
                <span className={styles.contents}>
                    <span className={styles.picture}>
                        {ogp["og:image"] && (
                            <picture>
                                <img
                                    src={ogp["og:image"]}
                                    width={150}
                                    height={75}
                                    alt=""
                                    className={styles.img}
                                />
                            </picture>
                        )}
                    </span>
                    <span className={styles.textContents}>
                        <span>
                            <span className={styles.title}>
                                {ogp["og:title"] ? (
                                    <>{ogp["og:title"]}</>
                                ) : (
                                    <>{props.url}</>
                                )}
                                <br />
                            </span>
                            <span className={styles.description}>
                                {ogp["og:description"]}
                            </span>
                        </span>
                    </span>
                </span>
            </a>
        )
    } catch {
        return null
    }
}

export default LinkCustom
