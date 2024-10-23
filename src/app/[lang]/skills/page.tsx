import { SkillsPage } from "@/features/skills"
import { getLangList } from "@/utils/getLangList"

export const generateStaticParams = () => getLangList()

const Skills = async ({ params }: { params: { lang: string } }) => {
    const { lang } = await params

    return <SkillsPage lang={lang} />
}

export default Skills
