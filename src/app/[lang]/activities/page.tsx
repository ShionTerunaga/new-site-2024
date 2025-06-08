import { Activity } from "./(activities)/_view/active";
import { getLangList } from "@/utils/get-lang-list";
import { Language } from "@/utils/lang";

export const generateStaticParams = () => getLangList();

type Props = Promise<{ lang: Language }>;

const Activities = async ({ params }: { params: Props }) => {
    const { lang } = await params;

    return <Activity currentLang={lang} />;
};

export default Activities;
