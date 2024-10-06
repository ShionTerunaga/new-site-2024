"use client"

import Image from "next/image"
import Link from "next/link"
import CardContainer from "../components/cardContainer/cardContainer.logic"
import Icon from "../components/icon/icon"
import { staticCard } from "../static/card"
import styles from "./styles.css"
import GITHUB from "@/assets/home/github-mark-white.svg"
import X from "@/assets/home/logo-white.png"
import { i18n } from "@/shared/static/lang"
import { Header } from "@/components/ui/header"

interface props {
    lang: string
}

export const Home = (props: props) => {
    const t = i18n(props.lang)
    const cards = staticCard(props.lang)

    return (
        <>
            <Header isHome {...props} />
            <main className={styles.container}>
                <section className={styles.iconBox}>
                    <Icon />
                </section>
                <section className={styles.greetingBox}>
                    <h1 className={styles.name}>{t.home.name}</h1>
                    <div className={styles.descriptionBox}>
                        <p>{t.home.description}</p>
                    </div>
                    <div className={styles.icons}>
                        <Link href="https://x.com/TERUSI1201" target="_blank">
                            <Image src={X} width={20} height={20} alt="" />
                        </Link>
                        <Link
                            href="https://github.com/ShionTerunaga"
                            target="_blank"
                        >
                            <Image src={GITHUB} width={22} height={22} alt="" />
                        </Link>
                    </div>
                </section>
                <section className={styles.cardContainer}>
                    {cards.map((item, index) => (
                        <CardContainer
                            lang={props.lang}
                            index={index}
                            item={item}
                            key={index}
                        />
                    ))}
                </section>
            </main>
        </>
    )
}
