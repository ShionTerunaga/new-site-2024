import { Home } from "./_view/home";
import { getLangList } from "@/utils/get-lang-list";

export const generateStaticParams = () => getLangList();

type Props = Promise<{ lang: string }>;

const HomePage = async ({ params }: { params: Props }) => {
    const { lang } = await params;

    return <Home currentLang={lang} />;
};

export default HomePage;
