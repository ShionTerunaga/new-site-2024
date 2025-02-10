import { SkillsPage } from "./view/skills-page"
import { getLangList } from "@/utils/get-lang-list"

export const generateStaticParams = () => getLangList()

type props = Promise<{ lang: string }>

const Skills = async ({ params }: { params: props }) => {
    const { lang } = await params

    return <SkillsPage currentLang={lang} />
}

export default Skills
