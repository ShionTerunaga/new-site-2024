import { Activity } from "./(activities)/view/active"
import { getLangList } from "@/utils/get-lang-list"

export const generateStaticParams = () => getLangList()

type Props = Promise<{ lang: string }>

const Activities = async ({ params }: { params: Props }) => {
    const { lang } = await params

    return <Activity currentLang={lang} />
}

export default Activities
