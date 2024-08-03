import parse from "html-react-parser"
import styles from "./style.css"
import { Header } from "@/components/ui/header"
import { getCMS } from "@/service/model"
import { en } from "@/shared/lang/en"

interface props {
    id: string
}

export const Active = async (props: props) => {
    const res = await getCMS(props.id)

    return (
        <main>
            <Header title={en.active.title} />

            <section className={styles.container}>
                <h2 className={styles.heading}>{res.title}</h2>
                <div className={styles.contents}>
                    <div className={styles.contentsBody}>{parse(res.body)}</div>
                </div>
            </section>
        </main>
    )
}
