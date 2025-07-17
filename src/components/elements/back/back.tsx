import { House,ArrowLeft } from 'lucide-react'
import Link from "next/link";
import styles from "./style.css";
import { CheckerProps } from "@/shared/types/props";
import { Language } from "@/utils/lang";
import { routingPath } from "@/utils/routing-paths";

interface Props {
    /**
     * 戻る時のパス
     */
    path?: string;
    /**
     * 言語
     */
    currentLang: Language;
}

export function Back<T extends Props>({
    path,
    currentLang
}: CheckerProps<T, Props>) {
    const pathName = path || routingPath(currentLang).home;

    return (
        <Link href={pathName} className={styles.link} aria-label="go to home">
            <div className={styles.linkContent}>
                <div className={styles.icon}>
                    {pathName === routingPath(currentLang).home ? (
                        <House />
                    ) : (
                        <ArrowLeft />
                    )}
                </div>
            </div>
        </Link>
    );
}
