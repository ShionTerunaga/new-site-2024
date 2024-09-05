import styles from "./style.css"
import { Header } from "@/components/ui/header"
import { en } from "@/shared/lang/en"
import IntroContents from "../components/introContents/introduction"
import CarrierCard from "../components/carrierCard/carrierCard"

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
        </main>
    )
}
