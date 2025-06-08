import { Introduction } from "./_view/introduction";
import { getLangList } from "@/utils/get-lang-list";
import { Language } from "@/utils/lang";

export const generateStaticParams = () => getLangList();

type Props = Promise<{ lang: Language }>;

const Intro = async ({ params }: { params: Props }) => {
    const { lang } = await params;

    return <Introduction currentLang={lang} />;
};

export default Intro;
