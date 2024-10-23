import { Home } from "@/features/home"
import { getLangList } from "@/utils/getLangList"

export const generateStaticParams = () => getLangList()

const HomePage = async ({ params }: { params: { lang: string } }) => {
    const { lang } = await params

    return <Home lang={lang} />
}

export default HomePage
