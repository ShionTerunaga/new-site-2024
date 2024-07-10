import { ReactNode } from "react"
import styles from "./style.css"

interface props {
    children: ReactNode
}

export const PopupBase = (props: props) => {
    return (
        <section className={styles.background}>
            <main className={styles.container}>{props.children}</main>
        </section>
    )
}
