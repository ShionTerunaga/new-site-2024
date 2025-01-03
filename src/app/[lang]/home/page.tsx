import { Home } from "@/features/home"
import { getLangList } from "@/utils/getLangList"

export const generateStaticParams = () => getLangList()

type props = Promise<{ lang: string }>

const HomePage = async ({ params }: { params: props }) => {
    const { lang } = await params

    return <Home currentLang={lang} />
}

export default HomePage
