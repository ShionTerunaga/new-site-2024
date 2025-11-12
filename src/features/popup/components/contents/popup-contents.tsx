"use client";

import { X } from "lucide-react";
import { ReactNode } from "react";
import styles from "./style.css";
import { popupAction } from "@/features/popup";

interface Props {
    children: ReactNode;
}

export const PopupContents = ({ children }: Props) => {
    const { close } = popupAction;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <button className={styles.button} onClick={close}>
                        <X />
                    </button>
                </div>
            </div>
            {children}
        </div>
    );
};
