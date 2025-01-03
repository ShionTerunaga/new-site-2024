"use client"

import { ReactNode } from "react"
import styles from "./style.css"
import { PopupContents } from "@/components/ui/popup"
import { usePopup } from "@/hooks/popup"

interface props {
    /**
     * item
     */
    title: string
    /**
     * contents
     */
    children: ReactNode
}

const IntroModal = ({ title, children }: props) => {
    const { openPopup } = usePopup()

    const handleClick = () => {
        openPopup(<PopupContents>{children}</PopupContents>)
    }

    return (
        <button
            className={styles.button}
            onClick={handleClick}
            aria-label="Open popup"
        >
            {title}
        </button>
    )
}

export default IntroModal
