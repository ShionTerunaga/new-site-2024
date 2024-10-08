import CarrierCard from "../components/carrierCard/carrierCard"
import IntroContents from "../components/introContents/introduction"
import IntroModal from "../components/introModal/introModal"
import IntroPopup from "../components/introPopup/introPopup"
import { introData } from "../static/introduction.data"
import styles from "./style.css"
import { Header } from "@/components/ui/header"
import { i18n } from "@/shared/static/lang"

interface props {
    lang: string
}

export const Introduction = (props: props) => {
    const t = i18n(props.lang)
    const introModal = introData(props.lang)

    return (
        <>
            <Header title={t.intro.title} {...props} />
            <main className={styles.container}>
                <h1 className={styles.title}>
                    {t.intro.introduction.sectionTitle}
                </h1>
                <IntroContents lang={props.lang} />
                <h1 className={styles.title}>{t.intro.carrier.title}</h1>
                <CarrierCard lang={props.lang} />
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
