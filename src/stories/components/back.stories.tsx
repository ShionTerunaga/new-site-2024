import { Back } from "@/components/back"
import type { Meta, StoryFn } from "@storybook/react"

const meta: Meta<typeof Back> = {
    component: Back
}

export default meta

type Story = StoryFn<typeof Back>

export const basic: Story = () => {
    return <Back />
}
