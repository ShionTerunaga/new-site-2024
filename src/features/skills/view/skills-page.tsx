import { allSkills } from "../static/skill-all"
import { CardView } from "@/features/skills/components/cardView/cardView"
import { en } from "@/shared/lang/en"
import styles from "./style.css"

export const SkillsPage = () => {
    return (
        <main className={styles.container}>
            <CardView pageTitle={en.skills.title} contents={allSkills} />
            <div className={styles.space} />
        </main>
    )
}
