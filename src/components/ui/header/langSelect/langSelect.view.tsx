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
        const pathArr = usePathname().split("/")
        pathArr.splice(0, 2)
        return `/${path}/${pathArr.join("/")}`
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
                {lang.map((ln, index) => (
                    <li className={dropLi} key={index}>
                        <Link
                            href={getLinkPath(ln)}
                            className={styles.langLink}
                        >
                            {ln}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LangSelect
