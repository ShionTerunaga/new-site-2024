"use client";

import { motion } from "motion/react";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import styles from "./style.css";
import { Card } from "@/components/elements/card";
import { PopupContents, usePopup } from "@/features/popup";

interface Props {
    /** カードのタイトル */
    title: string;
    /** カードの画像 */
    image: StaticImageData;
    /**ポップアップの中身 */
    children: ReactNode;
    index: number;
}

const CardButton = ({ index, ...rest }: Props) => {
    const { openPopup } = usePopup();

    const handleClick = () => {
        openPopup(<PopupContents {...rest} />);
    };

    return (
        <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 + index }}
            onClick={handleClick}
            className={styles.container}
        >
            <Card {...rest} description="" isSkills />
        </motion.button>
    );
};

export default CardButton;
