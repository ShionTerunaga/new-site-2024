import { motion } from "framer-motion"
import { ReactNode } from "react"
import styles from "./style.css"

interface props {
    children: ReactNode
}

export const PopupBase = (props: props) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ property: 'opacity', duration: 0.5 }}
                className={styles.background}
            >
            </motion.div>
            <div className={styles.mainContainer}>
                <motion.div
                    initial={{ x: 0, y: 70, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    exit={{ x: 0, y: 70, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={styles.container}
                >
                    {props.children}
                </motion.div>
            </div>
        </>
    )
}
