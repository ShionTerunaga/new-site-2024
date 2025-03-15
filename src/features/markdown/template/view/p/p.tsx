import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./style.css";

const P = (
    props: DetailedHTMLProps<
        HTMLAttributes<HTMLParagraphElement>,
        HTMLParagraphElement
    >
) => {
    if (!props.children) return;

    return <p {...props} className={styles.container} />;
};

export default P;
