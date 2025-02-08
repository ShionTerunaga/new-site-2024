import { Activity } from "./(activities)/view/active"
import { getLangList } from "@/utils/get-lang-list"

export const generateStaticParams = () => getLangList()

type props = Promise<{ lang: string }>

const Activities = async ({ params }: { params: props }) => {
    const { lang } = await params

    return <Activity currentLang={lang} />
}

export default Activities
