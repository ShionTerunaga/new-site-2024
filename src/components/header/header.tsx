import { Menu } from "@yamada-ui/lucide"
import { Back } from "../back"
import styles from "./style.css"

interface props {
    /**
     * ページのタイトル
     */
    title: string
}

export const Header = (props: props) => {
    return (
        <header className={styles.header}>
            <Back />

            <h1 className={styles.heading1}>{props.title}</h1>

            <button className={styles.button}>
                <Menu />
            </button>
        </header>
    )
}
