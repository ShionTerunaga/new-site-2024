import styles from "./style.css";
import { CheckerProps } from "@/shared/types/props";

interface Props {
    items: string[];
}

function ListBox<T extends Props>({ items }: CheckerProps<T, Props>) {
    return (
        <section className={styles.section}>
            <ul className={styles.container}>
                {items.map((item, index) => (
                    <li key={index} className={styles.list}>
                        {item}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ListBox;
