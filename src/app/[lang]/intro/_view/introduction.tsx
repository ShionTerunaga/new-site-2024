import CarrierCard from "../_components/carrie-card/carrier-card";
import IntroContents from "../_components/intro-contents/introduction";
import styles from "./style.css";
import { Header } from "@/components/layouts/header";
import { CheckerProps } from "@/shared/types/props";
import { i18n, Language } from "@/utils/lang";
import { IntroductionButton } from "./introduction-button";

interface Props {
    currentLang: Language;
}

export function Introduction<T extends Props>({
    currentLang
}: CheckerProps<T, Props>) {
    const t = i18n(currentLang);

    return (
        <>
            <Header currentLang={currentLang} />
            <main className={styles.container}>
                <h1 className={styles.title}>
                    {t.intro.introduction.sectionTitle}
                </h1>
                <IntroContents lang={currentLang} />
                <h1 className={styles.title}>{t.intro.carrier.title}</h1>
                <CarrierCard lang={currentLang} />
                <h1 className={styles.title}>{t.intro.introData.title}</h1>
                <IntroductionButton currentLang={currentLang} />
            </main>
        </>
    );
}
