"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import styles from "./styles.css"

interface props {
    children: ReactNode
    index: number
}

const CardContainer = (props: props) => {
    return (
        <motion.div
            className={styles.container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 + props.index }}
        >
            {props.children}
        </motion.div>
    )
}

export default CardContainer
