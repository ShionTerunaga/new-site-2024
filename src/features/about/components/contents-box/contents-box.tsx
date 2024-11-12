import styles from "./style.css"

interface props {
    contents: string
    link: string
    linkTitle: string
}

const ContentsBox = (props: props) => {
    return (
        <section className={styles.section}>
            <p>{props.contents}</p>
            <div className={styles.linkContainer}>
                <a href={props.link} target="_blank" className={styles.link}>
                    {props.linkTitle}
                </a>
            </div>
        </section>
    )
}

export default ContentsBox
