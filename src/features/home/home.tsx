import { Card } from "@/components/card/card"
import Icon from "./components/icon/icon"
import styles from "./styls.css"
import { en } from "@/shared/lang/en"
import { staticCard } from "./static/card"
import Link from "next/link"

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
                <section>
                    {staticCard.map((item, index) => (
                        <div className={styles.itemBox} key={index}>
                            <Link href={item.path} className={styles.link}>
                                <Card {...item} />
                            </Link>
                        </div>
                    ))}
                </section>
            </div>
        </main>
    )
}
