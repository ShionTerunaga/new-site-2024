"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";
import styles from "./style.css";
import { CheckerProps } from "@/shared/types/props";

interface Props {
    key: number | string;
    children: ReactNode;
    index: number;
}

function MotionChildren<T extends Props>({
    children,
    index
}: CheckerProps<T, Props>) {
    return (
        <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 + index }}
            className={styles.box}
        >
            {children}
        </motion.li>
    );
}

export default MotionChildren;
