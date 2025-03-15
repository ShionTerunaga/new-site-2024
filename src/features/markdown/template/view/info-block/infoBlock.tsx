import { Info } from "@yamada-ui/lucide";
import React from "react";
import styles from "./style.css";

const InfoBlock = (props: any) => {
    return (
        <div className={styles.container}>
            <Info className={styles.info} />
            <p className={styles.text}>{props.children}</p>
        </div>
    );
};

export default InfoBlock;
