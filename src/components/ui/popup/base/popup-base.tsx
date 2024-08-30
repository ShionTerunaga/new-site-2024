import { motion } from "framer-motion"
import { ReactNode } from "react"
import styles from "./style.css"

interface props {
    children: ReactNode
}

export const PopupBase = (props: props) => {
    return (
        <>
            <div className={styles.background} />
            <div className={styles.mainContainer}>
                <motion.div
                    initial={{ x: 0, y: "100%" }}
                    animate={{ x: 0, y: 0 }}
                    exit={{ x: 0, y: "100%" }}
                    transition={{ duration: 0.3 }}
                    className={styles.container}
                >
                    {props.children}
                </motion.div>
            </div>
        </>
    )
}
