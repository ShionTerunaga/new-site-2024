import { Active } from "@/features/active"

const Activity = ({ params: { id } }: { params: { id: string } }) => {
    return <Active id={id} />
}

export default Activity
