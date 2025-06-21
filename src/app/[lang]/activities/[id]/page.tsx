import { Active } from "./_view/active";
import { NotFoundComponent } from "@/app/(not-found)/_view/not-found";
import { getAllContents } from "@/features/markdown/core";
import { getLangList } from "@/utils/get-lang-list";
import { isLanguage } from "@/utils/lang";

interface ActiveProps {
    lang: string;
    id: string;
}

export const generateStaticParams = () => {
    const lang = getLangList();
    const overviews = getAllContents("en");

    const allProps: Array<ActiveProps> = [];

    for (const ln in lang) {
        for (const { id } of overviews) {
            const props: ActiveProps = {
                lang: ln,
                id
            };

            allProps.push(props);
        }
    }

    return allProps;
};

type Props = Promise<ActiveProps>;

async function Activity({ params }: { params: Props }) {
    const { id, lang } = await params;

    if (!isLanguage(lang)) {
        return <NotFoundComponent />;
    }

    return <Active id={id} currentLang={lang} />;
}

export default Activity;
