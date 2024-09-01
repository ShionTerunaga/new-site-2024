"use client"

import { X } from "@yamada-ui/lucide"
import { ReactNode } from "react"
import styles from "./style.css"
import { usePopup } from "@/hooks/popup"

interface props {
    title: string
    children: ReactNode
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
            {props.children}
        </div>
    )
}
