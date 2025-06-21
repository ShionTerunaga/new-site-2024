import styles from "./style.css";
import { CheckerProps } from "@/shared/types/props";

interface Props {
    contents: string;
    href: string;
    linkTitle: string;
}

function ContentsBox<T extends Props>({
    contents,
    href,
    linkTitle
}: CheckerProps<T, Props>) {
    return (
        <section className={styles.section}>
            <p>{contents}</p>
            <div className={styles.linkContainer}>
                <a href={href} target="_blank" className={styles.link}>
                    {linkTitle}
                </a>
            </div>
        </section>
    );
}

export default ContentsBox;
