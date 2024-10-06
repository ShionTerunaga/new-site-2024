"use client"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { useState } from "react"
import type { headerProps } from "../header.type"
import styles, { dropLi } from "./styles.css"
import { lang } from "@/shared/static/lang"

interface props extends headerProps {}

const LangSelect = (props: props) => {
    const [isDrop, setIsDrop] = useState(false)
    const toggleDrop = () => setIsDrop((prev) => !prev)
    const pathArr = usePathname().split("/")
    const params = useParams().id || ""

    const getLinkPath = (path: string) => {
        return `/${path}/${pathArr[2]}/${params}`
    }

    return (
        <div className={styles.selectLang}>
            <button type="button" className={styles.box} onClick={toggleDrop}>
                <span className={styles.label}>lang:</span>
                <span className={styles.lang}>{props.lang}</span>
                <span className={styles.arrow}></span>
            </button>
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
