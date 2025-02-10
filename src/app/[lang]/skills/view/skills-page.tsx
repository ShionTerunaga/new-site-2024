import { allSkills } from "../static/skill-all"
import styles from "./style.css"
import { CardView } from "@/app/[lang]/skills/components/card-view/card-view"
import { Header } from "@/components/header"
import { i18n } from "@/utils/lang"

interface props {
    currentLang: string
}

export const SkillsPage = ({ currentLang }: props) => {
    const t = i18n(currentLang)
    const skills = allSkills(currentLang)

    return (
        <>
            <Header title="" currentLang={currentLang} />
            <main className={styles.container}>
                <CardView contents={skills} />
                <div className={styles.space} />
            </main>
        </>
    )
}
