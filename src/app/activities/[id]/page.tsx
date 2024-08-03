import { Active } from "@/features/active"
import { getAllCMS } from "@/service/model"

export async function generateStaticParams() {
    const res = await getAllCMS()

    const paths = res.contents.map((post) => {
        return {
            id: post.id
        }
    })

    return [...paths]
}

const Activity = ({ params: { id } }: { params: { id: string } }) => {
    return <Active id={id} />
}

export default Activity
