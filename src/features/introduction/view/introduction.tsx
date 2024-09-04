import IntroModal from "../components/introModal/introModal"
import IntroPopup from "../components/introPopup/introPopup"
import { introData } from "../static/introduction.data"
import styles from "./style.css"
import { Header } from "@/components/ui/header"
import { en } from "@/shared/lang/en"

const Introduction = () => {
    return (
        <main className={styles.container}>
            <Header title={en.intro.title} />
            <section className={styles.section}>
                <div className={styles.intro}>
                    <div className={styles.titleBox}>
                        <h2>introduction</h2>
                    </div>
                    <div className={styles.introductionContents}>
                        Hello. My name is TERUSI. I am software engineer. I
                        became engineer in 2023. Currently, the main focus is on
                        the front end.
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Introduction
