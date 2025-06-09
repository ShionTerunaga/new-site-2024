"use client";

import { ReactNode } from "react";
import styles from "./style.css";
import { PopupContents } from "@/features/popup";
import { usePopup } from "@/features/popup";

interface Props {
    /**
     * item
     */
    title: string;
    /**
     * contents
     */
    children: ReactNode;
}

function IntroModal({ title, children }: Props) {
    const { openPopup } = usePopup();

    const handleClick = () => {
        openPopup(<PopupContents>{children}</PopupContents>);
    };

    return (
        <button
            className={styles.button}
            onClick={handleClick}
            aria-label="Open popup"
        >
            {title}
        </button>
    );
}

export default IntroModal;
