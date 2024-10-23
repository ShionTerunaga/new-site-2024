import { Introduction } from "@/features/introduction"
import { getLangList } from "@/utils/getLangList"

export const generateStaticParams = () => getLangList()

const Intro = async ({ params }: { params: { lang: string } }) => {
    const { lang } = await params

    return <Introduction lang={lang} />
}

export default Intro
