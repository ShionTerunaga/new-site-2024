import { NotFoundComponent } from "@/app/(not-found)/_view/not-found";
import { Introduction } from "./_view/introduction";
import { getLangList } from "@/utils/get-lang-list";
import { isLanguage, Language } from "@/utils/lang";

export const generateStaticParams = () => getLangList();

type Props = Promise<{ lang: string }>;

const Intro = async ({ params }: { params: Props }) => {
    const { lang } = await params;

    if (!isLanguage(lang)) {
        return <NotFoundComponent />;
    }

    return <Introduction currentLang={lang} />;
};

export default Intro;
