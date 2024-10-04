import type { Meta, StoryFn } from "@storybook/react"
import { Header } from "@/components/ui/header"

const meta: Meta<typeof Header> = {
    component: Header
}

export default meta

type Story = StoryFn<typeof Header>

export const Basic: Story = () => {
    return <Header title="" lang="" />
}
