import { NotFoundComponent } from "@/app/(not-found)/_view/not-found";
import { SkillsPage } from "./_view/skills-page";
import { getLangList } from "@/utils/get-lang-list";
import { isLanguage, Language } from "@/utils/lang";

export const generateStaticParams = () => getLangList();

type Props = Promise<{ lang: string }>;

const Skills = async ({ params }: { params: Props }) => {
    const { lang } = await params;

    if (!isLanguage(lang)) {
        return <NotFoundComponent />;
    }

    return <SkillsPage currentLang={lang} />;
};

export default Skills;
