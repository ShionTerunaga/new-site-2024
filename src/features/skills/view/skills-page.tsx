import CardCollection from "../components/card-collection/card-collection"
import { allSkills } from "../static/skill-all"
import { Header } from "@/components/header"
import { en } from "@/shared/lang/en"

export const SkillsPage = () => {
    return (
        <main>
            <Header title={en.skills.title} />
            {allSkills.map((item, index) => (
                <CardCollection key={index} {...item} />
            ))}
        </main>
    )
}
