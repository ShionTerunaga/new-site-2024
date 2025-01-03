import styles from "./style.css"

interface props {
    contents: string
    link: string
    linkTitle: string
}

const ContentsBox = ({ contents, link, linkTitle }: props) => {
    return (
        <section className={styles.section}>
            <p>{contents}</p>
            <div className={styles.linkContainer}>
                <a href={link} target="_blank" className={styles.link}>
                    {linkTitle}
                </a>
            </div>
        </section>
    )
}

export default ContentsBox
