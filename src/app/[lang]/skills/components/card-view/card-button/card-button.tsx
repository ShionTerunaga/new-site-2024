"use client"

import { ReactNode } from "react"
import styles from "./style.css"
import { Card } from "@/components/card"
import { PopupContents, usePopup } from "@/features/popup"

interface props {
    /** カードのタイトル */
    title: string
    /** カードの画像 */
    image: any
    /**ポップアップの中身 */
    children: ReactNode
}

const CardButton = (props: props) => {
    const { openPopup } = usePopup()

    const handleClick = () => {
        openPopup(<PopupContents {...props} />)
    }

    return (
        <button onClick={handleClick} className={styles.container}>
            <Card {...props} description="" isSkills />
        </button>
    )
}

export default CardButton
