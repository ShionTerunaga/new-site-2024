import { CircleX } from "@yamada-ui/lucide";
import React from "react";
import styles from "./style.css";

const AlertBlock = (props: any) => {
    return (
        <div className={styles.container}>
            <CircleX className={styles.circleX} />
            <p className={styles.text}>{props.children}</p>
        </div>
    );
};

export default AlertBlock;
