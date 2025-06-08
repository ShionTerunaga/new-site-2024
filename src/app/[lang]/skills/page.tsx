import { SkillsPage } from "./_view/skills-page";
import { getLangList } from "@/utils/get-lang-list";
import { Language } from "@/utils/lang";

export const generateStaticParams = () => getLangList();

type Props = Promise<{ lang: Language }>;

const Skills = async ({ params }: { params: Props }) => {
    const { lang } = await params;

    return <SkillsPage currentLang={lang} />;
};

export default Skills;
