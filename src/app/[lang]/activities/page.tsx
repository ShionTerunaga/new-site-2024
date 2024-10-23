import { Activity } from "@/features/activities"
import { getLangList } from "@/utils/getLangList"

export const generateStaticParams = () => getLangList()

const Activities = async ({ params }: { params: { lang: string } }) => {
    const { lang } = await params

    return <Activity lang={lang} />
}

export default Activities
