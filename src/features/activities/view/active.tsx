import { CircleChevronRight } from "@yamada-ui/lucide"
import Link from "next/link"
import styles from "./style.css"
import { Header } from "@/components/ui/header"
import { getAllContents } from "@/services/lib"
import { i18n } from "@/shared/static/lang"
import { routingPath } from "@/shared/static/routingPaths"

interface props {
    lang: string
}

export const Activity = (props: props) => {
    const t = i18n(props.lang)
    const contents = getAllContents(props.lang)

    return (
        <>
            <Header title="activity" {...props} />
            <main className={styles.container}>
                <h1 className={styles.title}>{t.active.title}</h1>
                <p className={styles.clickList}>{t.active.clickList}</p>
                <section className={styles.section}>
                    <ol>
                        {contents.map((item, index) => (
                            <li key={index} className={styles.li}>
                                <Link
                                    href={`${routingPath(props.lang).activity}/${item.id}`}
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
