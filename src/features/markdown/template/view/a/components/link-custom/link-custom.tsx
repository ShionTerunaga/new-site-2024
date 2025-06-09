import React from "react";
import { getUrlContents } from "../../services/get-url-contents";
import styles from "./style.css";

interface Props {
    url?: string;
}

const LinkCustom = async ({ url }: Props) => {
    if (!url) return null;

    try {
        const ogp = await getUrlContents(url);

        return (
            <a href={url} target="_blank" className={styles.container}>
                <span className={styles.contents}>
                    <span className={styles.textContents}>
                        <span className={styles.title}>
                            {ogp["og:title"] ? (
                                <>{ogp["og:title"]}</>
                            ) : (
                                <>{url}</>
                            )}
                            <br />
                        </span>
                        <span className={styles.description}>
                            {ogp["og:description"]}
                        </span>
                    </span>
                    {ogp["og:image"] && (
                        <picture className={styles.picture}>
                            <img
                                src={ogp["og:image"]}
                                alt=""
                                className={styles.img}
                            />
                        </picture>
                    )}
                </span>
            </a>
        );
    } catch (e) {
        console.log(e);
    }
};

export default LinkCustom;
