import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./style.css";

const H1 = (
    props: DetailedHTMLProps<
        HTMLAttributes<HTMLHeadingElement>,
        HTMLHeadingElement
    >
) => {
    return (
        <>
            <h1 {...props} className={styles.h1}>
                {props.children}
            </h1>
            <hr className={styles.hr} />
        </>
    );
};

export default H1;
