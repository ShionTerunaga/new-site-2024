"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";
import styles from "./styles.css";
import { CheckerProps } from "@/shared/types/props";

interface Props {
    key: number | string;
    children: ReactNode;
    index: number;
}

function CardContainer<T extends Props>({
    children,
    index,
    key
}: CheckerProps<T, Props>) {
    return (
        <motion.div
            key={key}
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
