import { Active } from "@/features/active"
import { getAllContents } from "@/services/lib"
import { getLangList } from "@/utils/getLangList"

export const generateStaticParams = () => {
    const lang = getLangList()

    const overviews = getAllContents("en")

    lang.forEach((i) => {
        overviews.map((j) => {
            i["id"] = j.id
        })
    })

    return lang
}

type props = Promise<{
    lang: string
    id: string
}>

const Activity = async ({ params }: { params: props }) => {
    const { id, lang } = await params

    return <Active id={id} lang={lang} />
}

export default Activity
