import { allSkills } from "../static/skill-all"
import styles from "./style.css"
import { Header } from "@/components/ui/header"
import { CardView } from "@/features/skills/components/cardView/cardView"
import { i18n } from "@/shared/static/lang"

interface props {
    lang: string
}

export const SkillsPage = (props: props) => {
    const t = i18n(props.lang)
    const skills = allSkills(props.lang)

    return (
        <>
            <Header title="" {...props} />
            <div className={styles.container}>
                <CardView pageTitle={t.skills.title} contents={skills} />
                <div className={styles.space} />
            </div>
        </>
    )
}
