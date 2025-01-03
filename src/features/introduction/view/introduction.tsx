import CarrierCard from "../components/carrierCard/carrierCard"
import IntroContents from "../components/introContents/introduction"
import IntroModal from "../components/introModal/introModal"
import IntroPopup from "../components/introPopup/introPopup"
import { introData } from "../static/introduction.data"
import styles from "./style.css"
import { Header } from "@/components/ui/header"
import { i18n } from "@/shared/static/lang"

interface props {
    currentLang: string
}

export const Introduction = ({ currentLang }: props) => {
    const t = i18n(currentLang)
    const introModal = introData(currentLang)

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
                    {introModal.map((item, index) => (
                        <IntroModal key={index} title={item.title}>
                            <IntroPopup
                                answer={item.headerContents}
                                description={item.bodyContents}
                                {...item}
                            />
                        </IntroModal>
                    ))}
                </div>
            </main>
        </>
    )
}
