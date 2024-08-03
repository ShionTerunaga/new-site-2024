import { CardView } from "@/components/view/cardView/view/cardView"
import { pageInterface } from "@/service/interface/pageInterface"
import { en } from "@/shared/lang/en"

export const Activity = async () => {
    const data = await pageInterface()

    return <CardView pageTitle={en.active.title} contents={data} />
}
