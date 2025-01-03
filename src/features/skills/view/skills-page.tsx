import { allSkills } from "../static/skill-all"
import styles from "./style.css"
import { Header } from "@/components/ui/header"
import { CardView } from "@/features/skills/components/cardView/cardView"
import { i18n } from "@/shared/static/lang"

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
                <CardView pageTitle={t.skills.title} contents={skills} />
                <div className={styles.space} />
            </main>
        </>
    )
}
