import styles from "./style.css";

interface Props {
    contents: string;
    link: string;
    linkTitle: string;
}

function ContentsBox({ contents, link, linkTitle }: Props) {
    return (
        <section className={styles.section}>
            <p>{contents}</p>
            <div className={styles.linkContainer}>
                <a href={link} target="_blank" className={styles.link}>
                    {linkTitle}
                </a>
            </div>
        </section>
    );
}

export default ContentsBox;
