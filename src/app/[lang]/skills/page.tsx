import { SkillsPage } from "@/features/skills"
import { getLangList } from "@/utils/getLangList"

export const generateStaticParams = () => getLangList()

const Skills = ({ params: { lang } }: { params: { lang: string } }) => {
    return <SkillsPage lang={lang} />
}

export default Skills
