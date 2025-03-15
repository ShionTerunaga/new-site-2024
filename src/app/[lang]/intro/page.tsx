import { Introduction } from "./_view/introduction";
import { getLangList } from "@/utils/get-lang-list";

export const generateStaticParams = () => getLangList();

type Props = Promise<{ lang: string }>;

const Intro = async ({ params }: { params: Props }) => {
    const { lang } = await params;

    return <Introduction currentLang={lang} />;
};

export default Intro;
