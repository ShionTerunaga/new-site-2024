import Link from "next/link"
import Icon from "../components/icon/icon"
import { staticCard } from "../static/card"
import styles from "./styles.css"
import { Card } from "@/components/ui/card"
import { en } from "@/shared/lang/en"

export const Home = () => {
    return (
        <main className={styles.container}>
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
