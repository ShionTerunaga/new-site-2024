import { Activity } from "@/features/activities"
import { getLangList } from "@/utils/getLangList"

export const generateStaticParams = () => getLangList()

const Activities = ({ params: { lang } }: { params: { lang: string } }) => {
    return <Activity lang={lang} />
}

export default Activities
