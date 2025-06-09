"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";
import styles from "./styles.css";

interface Props {
    children: ReactNode;
    index: number;
}

function CardContainer({ children, index }: Props) {
    return (
        <motion.div
            className={styles.container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 + index }}
        >
            {children}
        </motion.div>
    );
}

export default CardContainer;
