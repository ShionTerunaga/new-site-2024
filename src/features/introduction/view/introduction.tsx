import IntroModal from "../components/introModal/introModal"
import { introData } from "../static/introduction.data"
import styles from "./style.css"
import { Header } from "@/components/ui/header"
import { en } from "@/shared/lang/en"

const Introduction = () => {
    return (
        <main className={styles.container}>
            <Header title={en.intro.title} />
            <section className={styles.section}>
                <p className={styles.contents1}>
                    {en.intro.contents.contents1}
                </p>
                <div className={styles.box}>
                    {introData.map((item, index) => (
                        <div key={index}>
                            <IntroModal {...item} />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Introduction
