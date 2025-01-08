"use client"

import Link from "next/link"
import { useState } from "react"
import { languages, selectLanguage } from "../../static/language"
import styles from "./style.css"

const SelectLanguageGoHome = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true)

    const handleClick = () => setIsOpen(!isOpen)

    return (
        <section className={styles.container}>
            <div className={styles.wholeBox}>
                <button className={styles.button} onClick={handleClick}>
                    Back to home
                </button>
                {isOpen && (
                    <ul className={styles.listContainer}>
                        {languages.map(
                            (lang: selectLanguage, index: number) => (
                                <li key={index} className={styles.list}>
                                    <Link
                                        href={`/${lang.lang}/home`}
                                        className={styles.link}
                                    >
                                        {lang.text}
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>
                )}
            </div>
        </section>
    )
}

export default SelectLanguageGoHome
