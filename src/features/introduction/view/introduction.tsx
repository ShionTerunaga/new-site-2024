import IntroModal from "../components/introModal/introModal"
import { introData } from "../static/introduction.data"
import styles from "./style.css"
import { en } from "@/shared/lang/en"

const Introduction = () => {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>{en.intro.title}</h1>
            <section>
                {introData.map((item, index) => (
                    <div key={index}>
                        <IntroModal {...item} />
                    </div>
                ))}
            </section>
        </main>
    )
}

export default Introduction
