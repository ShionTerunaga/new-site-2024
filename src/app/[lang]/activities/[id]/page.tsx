import { Active } from "./_view/active";
import { getAllContents } from "@/features/markdown/core";
import { getLangList } from "@/utils/get-lang-list";
import { Language } from "@/utils/lang";

export const generateStaticParams = () => {
    const lang = getLangList();

    const overviews = getAllContents("en");

    lang.forEach((i) => {
        overviews.map((j) => {
            i["id"] = j.id;
        });
    });

    return lang;
};

type Props = Promise<{
    lang: Language;
    id: string;
}>;

const Activity = async ({ params }: { params: Props }) => {
    const { id, lang } = await params;

    return <Active id={id} currentLang={lang} />;
};

export default Activity;
