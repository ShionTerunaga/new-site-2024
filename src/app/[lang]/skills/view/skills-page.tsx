import { allSkills } from "../static/skill-all"
import styles from "./style.css"
import { CardView } from "@/app/[lang]/skills/components/card-view/card-view"
import { Header } from "@/components/header"

interface Props {
    currentLang: string
}

export const SkillsPage = ({ currentLang }: Props) => {
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
