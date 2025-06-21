import { SkillsPage } from "./_view/skills-page";
import { NotFoundComponent } from "@/app/(not-found)/_view/not-found";
import { getLangList } from "@/utils/get-lang-list";
import { isLanguage } from "@/utils/lang";

export const generateStaticParams = () => getLangList();

type Props = Promise<{ lang: string }>;

async function Skills({ params }: { params: Props }) {
    const { lang } = await params;

    if (!isLanguage(lang)) {
        return <NotFoundComponent />;
    }

    return <SkillsPage currentLang={lang} />;
}

export default Skills;
