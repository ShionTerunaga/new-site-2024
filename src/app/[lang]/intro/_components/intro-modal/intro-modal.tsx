"use client";

import styles from "./style.css";
import { CheckerProps } from "@/shared/types/props";

interface Props {
    key: string | number;
    /**
     * item
     */
    title: string;
    /**
     * contents
     */
    handlers: () => void;
}

function IntroModal<T extends Props>({
    title,
    handlers
}: CheckerProps<T, Props>) {
    return (
        <button
            className={styles.button}
            onClick={handlers}
            aria-label="Open popup"
        >
            {title}
        </button>
    );
}

export default IntroModal;
