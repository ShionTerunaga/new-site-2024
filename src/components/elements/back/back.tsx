import { Home } from "@yamada-ui/lucide";
import { ArrowLeft } from "@yamada-ui/lucide";
import Link from "next/link";
import styles from "./style.css";
import { routingPath } from "@/utils/routing-paths";

interface Props {
    /**
     * 戻る時のパス
     */
    path?: string;
    /**
     * 言語
     */
    currentLang: string;
}

export const Back = ({ path, currentLang }: Props) => {
    const pathName = path || routingPath(currentLang).home;

    return (
        <Link href={pathName} className={styles.link} aria-label="go to home">
            <div className={styles.linkContent}>
                <div className={styles.icon}>
                    {pathName.includes("/home") ? <Home /> : <ArrowLeft />}
                </div>
            </div>
        </Link>
    );
};
