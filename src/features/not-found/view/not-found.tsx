import SelectLanguageGoHome from "../components/select-langage-go-home/select-language-go-home"
import styles from "./style.css"

export const NotFoundComponent = () => {
    return (
        <main className={styles.container}>
            <section className={styles.section}>
                <h1 className={styles.heading}>404 NOT FOUND🤪🤪</h1>

                <p className={styles.comment}>
                    You`re not where you should be, so go back to `home`🏠
                </p>

                <SelectLanguageGoHome />
            </section>
        </main>
    )
}
