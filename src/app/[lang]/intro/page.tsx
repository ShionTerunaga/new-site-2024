import { Introduction } from "@/features/introduction"
import { getLangList } from "@/utils/getLangList"

export const generateStaticParams = () => getLangList()

const Intro = ({ params: { lang } }: { params: { lang: string } }) => {
    return <Introduction lang={lang} />
}

export default Intro
