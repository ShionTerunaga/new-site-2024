"use client";

import { memo, ReactNode } from "react";
import styles from "./style.css";
import { PopupContents } from "@/features/popup";
import { usePopup } from "@/features/popup";
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
    children: ReactNode;
}

const IntroModal = memo(function <T extends Props>({
    title,
    children
}: CheckerProps<T, Props>) {
    const { open } = usePopup();

    const handleClick = () => {
        open(<PopupContents>{children}</PopupContents>);
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
});

IntroModal.displayName = "IntroModal";

export default IntroModal;
