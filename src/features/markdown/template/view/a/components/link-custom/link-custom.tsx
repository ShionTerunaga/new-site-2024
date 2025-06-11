import React from "react";
import { getUrlContents } from "../../services/get-url-contents";
import styles from "./style.css";
import { RESULT_ERROR } from "@/utils/result";

interface Props {
    url?: string;
}

const LinkCustom = async ({ url }: Props) => {
    if (!url) return null;

    const ogp = await getUrlContents(url);

    if (ogp.kind === RESULT_ERROR) {
        return (
            <a href={url} target="_blank" className={styles.container}>
                <span className={`${styles.title} ${styles.link}`}>
                    {ogp.err}
                </span>
            </a>
        );
    }

    return (
        <a href={url} target="_blank" className={styles.container}>
            <span className={styles.contents}>
                <span className={styles.textContents}>
                    <span className={styles.title}>
                        {ogp.value["og:title"] ? (
                            <>{ogp.value["og:title"]}</>
                        ) : (
                            <>{url}</>
                        )}
                        <br />
                    </span>
                    <span className={styles.description}>
                        {ogp.value["og:description"]}
                    </span>
                </span>
                {ogp.value["og:image"] && (
                    <picture className={styles.picture}>
                        <img
                            src={ogp.value["og:image"]}
                            alt=""
                            className={styles.img}
                        />
                    </picture>
                )}
            </span>
        </a>
    );
};

export default LinkCustom;
