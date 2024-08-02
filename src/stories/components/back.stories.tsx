import type { Meta, StoryFn } from "@storybook/react"
import { Back } from "@/components/ui/back"

const meta: Meta<typeof Back> = {
    component: Back
}

export default meta

type Story = StoryFn<typeof Back>

export const Basic: Story = () => {
    return <Back />
}
