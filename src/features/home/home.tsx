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
                <div>
                    <p>{en.home.description1}</p>
                    <p>{en.home.description2}</p>
                    <p>{en.home.greeting}</p>
                </div>
            </section>
        </main>
    )
}
