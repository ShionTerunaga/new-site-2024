"use client"

import { StaticImageData } from "next/image"
import { ReactNode } from "react"
import styles from "./style.css"
import { Card } from "@/components/ui/card"
import { PopupContents } from "@/components/ui/popup"
import { usePopup } from "@/hooks/popup"

interface props {
    /** カードのタイトル */
    title: string
    /** カードの画像 */
    image: StaticImageData | string
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
            <Card description="" isSkills {...props} />
        </button>
    )
}

export default CardButton
