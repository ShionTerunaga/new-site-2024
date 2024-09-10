import CarrierCard from "../components/carrierCard/carrierCard"
import IntroContents from "../components/introContents/introduction"
import IntroModal from "../components/introModal/introModal"
import IntroPopup from "../components/introPopup/introPopup"
import { introData } from "../static/introduction.data"
import styles from "./style.css"
import { Header } from "@/components/ui/header"
import { en } from "@/shared/lang/en"

export const Introduction = () => {
    return (
        <main className={styles.container}>
            <Header title={en.intro.title} />
            <h1 className={styles.title}>
                {en.intro.introduction.sectionTitle}
            </h1>
            <IntroContents />
            <h1 className={styles.title2}>{en.intro.carrier.title}</h1>
            <CarrierCard />
            <h1>{en.intro.introData.title}</h1>
            <div className={styles.box}>
                {introData.map((item, index) => (
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
    )
}
