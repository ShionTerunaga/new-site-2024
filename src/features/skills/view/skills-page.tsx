import { allSkills } from "../static/skill-all"
import styles from "./style.css"
import { Header } from "@/components/ui/header"
import { CardView } from "@/features/skills/components/cardView/cardView"
import { en } from "@/shared/lang/en"

export const SkillsPage = () => {
    return (
        <>
            <Header title="" />
            <div className={styles.container}>
                <CardView pageTitle={en.skills.title} contents={allSkills} />
                <div className={styles.space} />
            </div>
        </>
    )
}
