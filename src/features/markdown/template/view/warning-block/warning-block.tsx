import { TriangleAlert } from "lucide-react";
import React from "react";
import styles from "./style.css";

const WarningBlock = (props: any) => {
    return (
        <div className={styles.container}>
            <TriangleAlert className={styles.triangle} />
            <p className={styles.text}>{props.children}</p>
        </div>
    );
};

export default WarningBlock;
