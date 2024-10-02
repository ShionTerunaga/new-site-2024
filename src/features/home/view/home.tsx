"use client"

import Image from "next/image"
import Link from "next/link"
import CardContainer from "../components/cardContainer/cardContainer.logic"
import Icon from "../components/icon/icon"
import { staticCard } from "../static/card"
import styles from "./styles.css"
import GITHUB from "@/assets/home/github-mark-white.svg"
import X from "@/assets/home/logo-white.png"
import { en } from "@/shared/lang/en"

export const Home = () => {
    return (
        <main className={styles.container}>
            {/* <div> */}
                <section className={styles.iconBox}>
                    <Icon />
                </section>
            {/* </div> */}
            {/* <div> */}
                <section className={styles.greetingBox}>
                    <h1 className={styles.name}>{en.home.name}</h1>
                    <div className={styles.descriptionBox}>
                        <p>{en.home.description}</p>
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
            {/* </div> */}
            <section className={styles.cardContainer}>
                {staticCard.map((item, index) => (
                    <CardContainer index={index} item={item} key={index} />
                ))}
            </section>
        </main>
    )
}
