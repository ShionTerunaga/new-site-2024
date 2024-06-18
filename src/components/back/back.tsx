import { MoveLeftIcon } from "@yamada-ui/lucide"
import Link from "next/link"
import styles from "./style.css"
import { en } from "@/shared/lang/en"

export const Back = () => {
    return (
        <Link href="/home" className={styles.link}>
            <div className={styles.linkContent}>
                <div className={styles.icon}>
                    <MoveLeftIcon size="larger" />
                </div>
                <div>{en.component.back.title}</div>
            </div>
        </Link>
    )
}
