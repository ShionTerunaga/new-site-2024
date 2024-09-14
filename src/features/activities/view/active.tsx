import Link from "next/link"
import styles from "./style.css"
import { Header } from "@/components/ui/header"
import { getAllContents } from "@/services/lib"
import { en } from "@/shared/lang/en"

export const Activity = () => {
    const contents = getAllContents()

    return (
        <>
            <Header title="activity" />
            <main className={styles.container}>
                <h1 className={styles.title}>{en.active.title}</h1>
                <section className={styles.section}>
                    <ol>
                        {contents.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={`/activities/${item.id}`}
                                    className={styles.link}
                                >
                                    <h2>{item.title}</h2>
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
