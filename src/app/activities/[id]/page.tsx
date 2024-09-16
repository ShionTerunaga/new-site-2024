import { Active } from "@/features/active"
import { getAllContents } from "@/services/lib"

export const generateStaticParams = () => {
    const overviews = getAllContents()

    return overviews.map((item) => {
        return {
            id: item.id
        }
    })
}

const Activity = ({ params: { id } }: { params: { id: string } }) => {
    return <Active id={id} />
}

export default Activity
