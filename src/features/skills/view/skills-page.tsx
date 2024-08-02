import { allSkills } from "../static/skill-all"
import { CardView } from "@/components/view/cardView/view/cardView"
import { en } from "@/shared/lang/en"

export const SkillsPage = () => {
    return <CardView pageTitle={en.skills.title} contents={allSkills} />
}
