"use client"

import styles from "./style.css"
import { PopupContents } from "@/components/popup"
import { usePopup } from "@/hooks/popup"

interface props {
    /**
     * item
     */
    title: string
    /**
     * answer
     */
    headerContents: string
    /**
     * description
     */
    bodyContents: string
}

const IntroModal = (props: props) => {
    const { openPopup } = usePopup()

    const handleClick = () => {
        openPopup(
            <PopupContents
                title={props.title}
                answer={props.headerContents}
                description={props.bodyContents}
            />
        )
    }

    return (
        <button
            className={styles.button}
            onClick={handleClick}
            aria-label="Open popup"
        >
            {props.title}
        </button>
    )
}

export default IntroModal
