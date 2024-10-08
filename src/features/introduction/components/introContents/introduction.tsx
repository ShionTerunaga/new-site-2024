import styles from "./style.css"
import { i18n } from "@/shared/static/lang"

interface props {
    lang: string
}

const IntroContents = (props: props) => {
    const t = i18n(props.lang)

    return (
        <section className={styles.section}>
            <div className={styles.intro}>
                <div className={styles.titleBox}>
                    <h2 className={styles.title}>{t.intro.introduction.title}</h2>
                </div>
                <div className={styles.introductionContents}>
                    {t.intro.introduction.contents}
                </div>
            </div>
        </section>
    )
}

export default IntroContents
