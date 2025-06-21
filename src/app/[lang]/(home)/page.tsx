import { HomeLayout } from "./_layouts/home-layout";
import { Home } from "./home/_view/home";
import { Opening } from "./opening/_view/opening";
import { NotFoundComponent } from "@/app/(not-found)/_view/not-found";
import { getLangList } from "@/utils/get-lang-list";
import { isLanguage } from "@/utils/lang";

export const generateStaticParams = () => getLangList();

type Props = Promise<{
    lang: string;
}>;

const HomePage = async ({ params }: { params: Props }) => {
    const { lang } = await params;

    if (!isLanguage(lang)) {
        return <NotFoundComponent />;
    }

    return (
        <HomeLayout
            openingChildren={<Opening />}
            homeChildren={<Home currentLang={lang} />}
        />
    );
};

export default HomePage;
