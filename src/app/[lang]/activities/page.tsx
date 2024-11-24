import { Activity } from "@/features/activities"
import { getLangList } from "@/utils/getLangList"

export const generateStaticParams = () => getLangList()

type props = Promise<{ lang: string }>

const Activities = async ({ params }: { params: props }) => {
    const { lang } = await params

    return <Activity lang={lang} />
}

export default Activities
