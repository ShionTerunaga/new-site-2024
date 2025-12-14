"use client";

import { usePopup } from "@/features/popup";
import { AnimatePresence, motion } from "motion/react";
import styles from "./style.css";

export function PopupBase() {
    const popup = usePopup();

    return (
        <AnimatePresence>
            {popup.isOpen && (
                <>
                    <div className={styles.background} />
                    <div className={styles.mainContainer}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className={styles.container}
                        >
                            {popup.children}
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
