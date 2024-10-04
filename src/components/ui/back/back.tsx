import { Home } from "@yamada-ui/lucide"
import { ArrowLeft } from "@yamada-ui/lucide"
import Link from "next/link"
import styles from "./style.css"
import { routingPath } from "@/shared/static/routingPaths"

interface props {
    /**
     * 戻る時のパス
     *
     * @default "/home"
     */
    path?: string
    /**
     * 言語
     */
    lang: string
}

export const Back = (props: props) => {
    const path = props.path || routingPath(props.lang).home

    return (
        <Link href={path} className={styles.link} aria-label="go to home">
            <div className={styles.linkContent}>
                <div className={styles.icon}>
                    {path.includes("/home") ? <Home /> : <ArrowLeft />}
                </div>
            </div>
        </Link>
    )
}
