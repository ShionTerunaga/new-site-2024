"use client"

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import styles from "./style.css"
import ICON from "@/assets/icon.jpg"

const Icon = () => {
    return (
        <AnimatePresence>
            <motion.picture
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <Image
                    src={ICON}
                    width={100}
                    height={100}
                    alt="My Icon"
                    className={styles.icon}
                />
            </motion.picture>
        </AnimatePresence>
    )
}

export default Icon
