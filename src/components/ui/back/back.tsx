import { Home } from "@yamada-ui/lucide"
import { ArrowLeft } from "@yamada-ui/lucide"
import Link from "next/link"
import styles from "./style.css"

interface props {
    /**
     * 戻る時のパス
     *
     * @default "/home"
     */
    path?: string
}

export const Back = (props: props) => {
    const { path = "/home" } = props

    return (
        <Link href={path} className={styles.link} aria-label="go to home">
            <div className={styles.linkContent}>
                <div className={styles.icon}>
                    {path === "/home" ? <Home /> : <ArrowLeft />}
                </div>
            </div>
        </Link>
    )
}
