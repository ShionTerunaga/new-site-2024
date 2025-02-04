import { Introduction } from "./view/introduction"
import { getLangList } from "@/utils/getLangList"

export const generateStaticParams = () => getLangList()

type props = Promise<{ lang: string }>

const Intro = async ({ params }: { params: props }) => {
    const { lang } = await params

    return <Introduction currentLang={lang} />
}

export default Intro
