import { Card } from "@/components/card/card"
import type { Meta, StoryFn, StoryObj } from "@storybook/react"

const meta: Meta<typeof Card> = {
    component: Card
}

export default meta

type Story = StoryFn<typeof Card>

export const Basic: Story = () => {
    return (
        <Card
            title="title"
            description="hogehogehogehgoeruhaughaiurhgaiuhgaiuhgriauhrgiahgeriu"
        />
    )
}
