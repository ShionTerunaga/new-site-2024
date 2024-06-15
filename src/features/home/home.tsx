import Icon from "./components/icon/icon"
import styles from "./styls.css"
import { en } from "@/shared/lang/en"

export const Home = () => {
    return (
        <main>
            <section className={styles.iconBox}>
                <Icon />
            </section>
            <section className={styles.greetingBox}>
                <h1 className={styles.name}>{en.home.name}</h1>
                <div className={styles.descriptionBox}>
                    <p>{en.home.description}</p>
                </div>
            </section>
        </main>
    )
}
