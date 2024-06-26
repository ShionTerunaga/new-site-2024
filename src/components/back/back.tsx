import { MoveLeftIcon } from "@yamada-ui/lucide"
import Link from "next/link"
import styles from "./style.css"
import { en } from "@/shared/lang/en"

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
        <Link href={path} className={styles.link}>
            <div className={styles.linkContent}>
                <div className={styles.icon}>
                    <MoveLeftIcon size="larger" />
                </div>
                <div>{en.component.back.title}</div>
            </div>
        </Link>
    )
}
