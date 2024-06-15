import { Card } from "@/components/card/card"
import Icon from "./components/icon/icon"
import styles from "./styls.css"
import { en } from "@/shared/lang/en"

export const Home = () => {
    return (
        <main style={{ width: "100vw", height: "100wh" }}>
            <div>
                <section className={styles.iconBox}>
                    <Icon />
                </section>
            </div>
            <div>
                <section className={styles.greetingBox}>
                    <h1 className={styles.name}>{en.home.name}</h1>
                    <div className={styles.descriptionBox}>
                        <p>{en.home.description}</p>
                    </div>
                </section>
            </div>
            <div>
                <section style={{ display: "flex", justifyContent: "center" }}>
                    <Card
                        title="introduction"
                        description="hogehogehoruhaorguhauigrhaiurghaigh"
                    />
                </section>
            </div>
        </main>
    )
}
