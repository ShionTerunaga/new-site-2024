import { CardView } from "@/components/view/cardView/view/cardView"
import { getAllCMS } from "@/model/getCMS"
import { en } from "@/shared/lang/en"

export const Active = async () => {
    const data = await getAllCMS()

    return <CardView pageTitle={en.active.title} contents={data} />
}
