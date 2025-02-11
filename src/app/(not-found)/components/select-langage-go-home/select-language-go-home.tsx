"use client"

import Link from "next/link"
import { useState } from "react"
import { languages, SelectLanguage } from "../../static/language"
import styles from "./style.css"

const SelectLanguageGoHome = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleClick = () => setIsOpen(!isOpen)

    return (
        <section className={styles.container}>
            <div className={styles.wholeBox}>
                <button className={styles.button} onClick={handleClick}>
                    Back to home
                </button>

                <ul
                    className={`${styles.listContainer} ${isOpen ? styles.show : styles.hidden}`}
                >
                    {languages.map((lang: SelectLanguage, index: number) => (
                        <li key={index} className={styles.list}>
                            <Link
                                href={`/${lang.lang}/home`}
                                className={styles.link}
                            >
                                {lang.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default SelectLanguageGoHome
