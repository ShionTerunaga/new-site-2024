"use client"

import { X } from "@yamada-ui/lucide"
import { ReactNode } from "react"
import styles from "./style.css"
import { usePopup } from "@/features/popup"

interface props {
    children: ReactNode
}

export const PopupContents = ({ children }: props) => {
    const { closePopup } = usePopup()

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <button className={styles.button} onClick={closePopup}>
                        <X />
                    </button>
                </div>
            </div>
            {children}
        </div>
    )
}
