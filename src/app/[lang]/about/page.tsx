import { AboutComponent } from "./_view/about";
import { NotFoundComponent } from "@/app/(not-found)/_view/not-found";
import { getLangList } from "@/utils/get-lang-list";
import { isLanguage } from "@/utils/lang";

export const generateStaticParams = () => getLangList();

type Props = Promise<{
    lang: string;
}>;

const About = async ({ params }: { params: Props }) => {
    const { lang } = await params;

    if (!isLanguage(lang)) {
        return <NotFoundComponent />;
    }

    return <AboutComponent currentLang={lang} />;
};

export default About;
