import { Active } from "./_view/active";
import { getAllContents } from "@/features/markdown/core";
import { getLangList } from "@/utils/get-lang-list";

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
    lang: string;
    id: string;
}>;

const Activity = async ({ params }: { params: Props }) => {
    const { id, lang } = await params;

    return <Active id={id} currentLang={lang} />;
};

export default Activity;
