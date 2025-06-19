import { allSkills } from "../_static/skill-all";
import styles from "./style.css";
import { CardView } from "@/app/[lang]/skills/_components/card-view/card-view";
import { Header } from "@/components/layouts/header";
import { CheckerProps } from "@/shared/types/props";
import { Language } from "@/utils/lang";

interface Props {
    currentLang: Language;
}

export function SkillsPage<T extends Props>({
    currentLang
}: CheckerProps<T, Props>) {
    const skills = allSkills(currentLang);

    return (
        <>
            <Header title="" currentLang={currentLang} />
            <main className={styles.container}>
                <CardView contents={skills} />
                <div className={styles.space} />
            </main>
        </>
    );
}
