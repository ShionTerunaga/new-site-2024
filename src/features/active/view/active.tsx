import styles from "./style.css"
import { Header } from "@/components/ui/header"
import { en } from "@/shared/lang/en"

interface props {
    id: string
}

export const Active = async (props: props) => {
    return (
        <main>
            <Header title={en.active.title} />

            <section className={styles.container}>
                <h2 className={styles.heading}>タイトル</h2>
                <div className={styles.contents}>
                    <></>
                </div>
            </section>
        </main>
    )
}
