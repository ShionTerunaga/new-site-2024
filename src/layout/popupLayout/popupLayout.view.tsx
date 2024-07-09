"use client"

import styles from "./style.css"
import { popState } from "@/store/popup/popup.type"

interface props {
    state: popState
    onClose: () => void
}

const PopupLayoutView = (props: props) => {
    return (
        <>
            {props.state.state && (
                <section className={styles.background}>
                    <main className={styles.container}>
                        {props.state.children}
                    </main>
                </section>
            )}
        </>
    )
}

export default PopupLayoutView
