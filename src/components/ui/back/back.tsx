import { Home } from "@yamada-ui/lucide"
import { ArrowLeft } from "@yamada-ui/lucide"
import Link from "next/link"
import styles from "./style.css"
import { routingPath } from "@/shared/static/routingPaths"

interface props {
    /**
     * 戻る時のパス
     */
    path?: string
    /**
     * 言語
     */
    lang: string
}

export const Back = ({ path, lang }: props) => {
    const pathName = path || routingPath(lang).home

    return (
        <Link href={pathName} className={styles.link} aria-label="go to home">
            <div className={styles.linkContent}>
                <div className={styles.icon}>
                    {pathName.includes("/home") ? <Home /> : <ArrowLeft />}
                </div>
            </div>
        </Link>
    )
}
