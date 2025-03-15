import { HTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./style.css";

const Pre = (
    props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>
) => {
    return <pre {...props} className={styles.pre} />;
};

export default Pre;
