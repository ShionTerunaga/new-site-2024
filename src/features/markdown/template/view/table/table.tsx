import { DetailedHTMLProps, TableHTMLAttributes } from "react";
import React from "react";
import styles from "./style.css";

const Table = (
    props: DetailedHTMLProps<
        TableHTMLAttributes<HTMLTableElement>,
        HTMLTableElement
    >
) => {
    return <table border={1} className={styles.container} {...props} />;
};

export default Table;
