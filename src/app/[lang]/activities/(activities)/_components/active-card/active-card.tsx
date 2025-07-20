import styles from "./style.css";
import { CheckerProps } from "@/shared/types/props";

interface Props {
    icon: string;
    title: string;
}

function ActiveCard<T extends Props>({ icon, title }: CheckerProps<T, Props>) {
    return (
        <div className={styles.box}>
            <div className={styles.icon}>{icon}</div>
            <h3 className={styles.h3}>{title}</h3>
        </div>
    );
}

export default ActiveCard;
