import Link from "next/link";
import ActiveCard from "../_components/active-card/active-card";
import MotionChildren from "../_components/motion-children/motion-children";
import styles from "./style.css";
import { Header } from "@/components/layouts/header";
import { getAllContents } from "@/features/markdown/core";
import { CheckerProps } from "@/shared/types/props";
import { i18n, Language } from "@/utils/lang";
import { routingPath } from "@/utils/routing-paths";

interface Props {
    currentLang: Language;
}

export function Activity<T extends Props>({
    currentLang
}: CheckerProps<T, Props>) {
    const t = i18n(currentLang);
    const contents = getAllContents(currentLang);

    return (
        <>
            <Header title={t.active.title} currentLang={currentLang} />
            <main className={styles.container}>
                <h1 className={styles.title}>{t.active.title}</h1>
                <p className={styles.clickList}>{t.active.clickList}</p>
                <ul className={styles.section}>
                    {contents.map((item, index) => (
                        <MotionChildren key={index} index={index}>
                            <Link
                                href={`${routingPath(currentLang).activity}/${item.id}`}
                                className={styles.link}
                            >
                                <ActiveCard
                                    icon={item.icon}
                                    title={item.title}
                                />
                            </Link>
                        </MotionChildren>
                    ))}
                </ul>
            </main>
        </>
    );
}
