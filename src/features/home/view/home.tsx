"use client"

import CardContainer from "../components/cardContainer/cardContainer.logic"
import Icon from "../components/icon/icon"
import { staticCard } from "../static/card"
import styles from "./styles.css"
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
                <section className={styles.cardContainer}>
                    {staticCard.map((item, index) => (
                        <CardContainer index={index} item={item} key={index} />
                    ))}
                </section>
            </div>
        </main>
    )
}
