import { Home } from "@/features/home"
import { getLangList } from "@/utils/getLangList"

export const generateStaticParams = () => getLangList()

const HomePage = ({ params: { lang } }: { params: { lang: string } }) => {
    return <Home lang={lang} />
}

export default HomePage
