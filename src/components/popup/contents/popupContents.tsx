"use client"

import { X } from "@yamada-ui/lucide"
import styles from "./style.css"
import { usePopup } from "@/hooks/popup"

interface props {
    title: string
    answer: string
    description: string
}

export const PopupContents = (props: props) => {
    const { closePopup } = usePopup()

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.heading1}>{props.title}</h1>
                <button className={styles.button} onClick={closePopup}>
                    <X />
                </button>
            </div>
            <h2 className={styles.heading2}>{props.answer}</h2>
            <div className={styles.description}>{props.description}</div>
        </div>
    )
}
