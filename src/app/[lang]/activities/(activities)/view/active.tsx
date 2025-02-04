import { CircleChevronRight } from "@yamada-ui/lucide"
import Link from "next/link"
import styles from "./style.css"
import { Header } from "@/components/header"
import { getAllContents } from "@/features/markdown/core"
import { i18n } from "@/shared/static/lang"
import { routingPath } from "@/shared/static/routingPaths"

interface props {
    currentLang: string
}

export const Activity = ({ currentLang }: props) => {
    const t = i18n(currentLang)
    const contents = getAllContents(currentLang)

    return (
        <>
            <Header title={t.active.title} currentLang={currentLang} />
            <main className={styles.container}>
                <h1 className={styles.title}>{t.active.title}</h1>
                <p className={styles.clickList}>{t.active.clickList}</p>
                <section className={styles.section}>
                    <ol>
                        {contents.map((item, index) => (
                            <li key={index} className={styles.li}>
                                <Link
                                    href={`${routingPath(currentLang).activity}/${item.id}`}
                                    className={styles.link}
                                >
                                    <h2 className={styles.heading2}>
                                        <span>{item.title}</span>
                                        <span className={styles.icon}>
                                            <CircleChevronRight />
                                        </span>
                                    </h2>
                                    <p className={styles.description}>
                                        {item.description}
                                    </p>
                                </Link>
                            </li>
                        ))}
                    </ol>
                </section>
            </main>
        </>
    )
}
