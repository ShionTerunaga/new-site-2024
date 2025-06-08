import { AboutComponent } from "./_view/about";
import { getLangList } from "@/utils/get-lang-list";
import { Language } from "@/utils/lang";

export const generateStaticParams = () => getLangList();

type Props = Promise<{
    lang: Language;
}>;

const About = async ({ params }: { params: Props }) => {
    const { lang } = await params;

    return <AboutComponent currentLang={lang} />;
};

export default About;
