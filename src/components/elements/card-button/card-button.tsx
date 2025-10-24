"use client";

import { motion } from "motion/react";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import styles from "./style.css";
import { Card } from "@/components/elements/card";
import { PopupContents, usePopup } from "@/features/popup";
import { CheckerProps } from "@/shared/types/props";
import { omitKeyObject } from "@/utils/omit-key-object";

interface Props {
    key: string | number;
    /** カードのタイトル */
    title: string;
    /** カードの画像 */
    image: string | StaticImageData;
    /**ポップアップの中身 */
    children: ReactNode;
    index: number;
}

function CardButton<T extends Props>(props: CheckerProps<T, Props>) {
    const { index, children } = props;
    const cardProps: Omit<Props, "children" | "index" | "key"> = omitKeyObject(
        props,
        ["children", "index", "key"]
    );

    const { openPopup } = usePopup();

    const handleClick = () => {
        openPopup(<PopupContents>{children}</PopupContents>);
    };

    return (
        <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 + index }}
            onClick={handleClick}
            className={styles.container}
        >
            <Card {...cardProps} description="" isSkills />
        </motion.button>
    );
}

export default CardButton;
