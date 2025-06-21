import { Activity } from "./(activities)/_view/active";
import { NotFoundComponent } from "@/app/(not-found)/_view/not-found";
import { getLangList } from "@/utils/get-lang-list";
import { isLanguage } from "@/utils/lang";

export const generateStaticParams = () => getLangList();

type Props = Promise<{ lang: string }>;

async function Activities({ params }: { params: Props }) {
    const { lang } = await params;

    if (!isLanguage(lang)) {
        return <NotFoundComponent />;
    }

    return <Activity currentLang={lang} />;
}

export default Activities;
