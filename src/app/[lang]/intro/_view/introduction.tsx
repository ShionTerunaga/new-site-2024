import CarrierCard from "../_components/carrie-card/carrier-card";
import IntroContents from "../_components/intro-contents/introduction";
import IntroModal from "../_components/intro-modal/intro-modal";
import IntroPopup from "../_components/intro-popup/intro-popup";
import { introData } from "../_static/introduction.data";
import styles from "./style.css";
import { Header } from "@/components/layouts/header";
import { CheckerProps } from "@/shared/types/props";
import { i18n, Language } from "@/utils/lang";

interface Props {
    currentLang: Language;
}

export function Introduction<T extends Props>({
    currentLang
}: CheckerProps<T, Props>) {
    const t = i18n(currentLang);
    const introModal = introData(currentLang);

    return (
        <>
            <Header title={t.intro.title} currentLang={currentLang} />
            <main className={styles.container}>
                <h1 className={styles.title}>
                    {t.intro.introduction.sectionTitle}
                </h1>
                <IntroContents lang={currentLang} />
                <h1 className={styles.title}>{t.intro.carrier.title}</h1>
                <CarrierCard lang={currentLang} />
                <h1 className={styles.title}>{t.intro.introData.title}</h1>
                <div className={styles.box}>
                    {introModal.map(
                        (
                            { image, title, headerContents, bodyContents },
                            index
                        ) => (
                            <IntroModal key={index} title={title}>
                                <IntroPopup
                                    answer={headerContents}
                                    description={bodyContents}
                                    image={image}
                                />
                            </IntroModal>
                        )
                    )}
                </div>
            </main>
        </>
    );
}
