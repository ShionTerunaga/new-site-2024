"use client"
import { useState } from "react"
import styles, { dropLi } from "./styles.css"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { headerProps } from "../header.type"
import { lang } from "@/shared/static/lang"

interface props extends headerProps {}

const LangSelect = (props: props) => {
    const [isDrop, setIsDrop] = useState(false)
    const toggleDrop = () => setIsDrop((prev) => !prev)

    const getLinkPath = (path: string) => {
        const _pathArr = usePathname().split("/")
        _pathArr.splice(0, 2)
        return `/${path}/${_pathArr.join("/")}`
    }

    return (
        <div className={styles.selectLang} onClick={toggleDrop}>
            <div className={styles.box}>
                <span className={styles.label}>lang:</span>
                <span className={styles.lang}>{props.lang}</span>
                <span className={styles.arrow}></span>
            </div>
            <ul
                className={`${styles.dropBox} ${isDrop ? styles.show : styles.hidden}`}
            >
                {lang.map((l, i) => (
                    <li className={dropLi} key={i}>
                        <Link href={getLinkPath(l)} className={styles.langLink}>
                            {l}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LangSelect
