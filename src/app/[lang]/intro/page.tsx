import { Introduction } from "./_view/introduction";
import { NotFoundComponent } from "@/app/(not-found)/_view/not-found";
import { getLangList } from "@/utils/get-lang-list";
import { isLanguage } from "@/utils/lang";

export const generateStaticParams = () => getLangList();

type Props = Promise<{ lang: string }>;

async function Intro({ params }: { params: Props }) {
    const { lang } = await params;

    if (!isLanguage(lang)) {
        return <NotFoundComponent />;
    }

    return <Introduction currentLang={lang} />;
}

export default Intro;
