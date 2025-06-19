import styles from "./style.css";
import { CheckerProps } from "@/shared/types/props";
import { i18n, Language } from "@/utils/lang";

interface Props {
    lang: Language;
}

function IntroContents<T extends Props>({ lang }: CheckerProps<T, Props>) {
    const t = i18n(lang);

    return (
        <section className={styles.section}>
            <div className={styles.intro}>
                <div className={styles.titleBox}>
                    <h2 className={styles.title}>
                        {t.intro.introduction.title}
                    </h2>
                </div>
                <div className={styles.introductionContents}>
                    {t.intro.introduction.contents}
                </div>
            </div>
        </section>
    );
}

export default IntroContents;
