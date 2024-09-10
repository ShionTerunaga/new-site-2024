import styles from "./style.css"
import { en } from "@/shared/lang/en"

const IntroContents = () => {
    return (
        <section className={styles.section}>
            <div className={styles.intro}>
                <div className={styles.titleBox}>
                    <h2>{en.intro.introduction.title}</h2>
                </div>
                <div className={styles.introductionContents}>
                    {en.intro.introduction.contents}
                </div>
            </div>
        </section>
    )
}

export default IntroContents
