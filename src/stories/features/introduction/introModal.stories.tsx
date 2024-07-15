import type { Meta, StoryFn } from "@storybook/react"
import IntroModal from "@/features/introduction/components/introModal/introModal"

const meta: Meta<typeof IntroModal> = {
    component: IntroModal
}

export default meta

type Story = StoryFn<typeof IntroModal>

export const Basic: Story = () => {
    return (
        <IntroModal
            title="あいうえお"
            headerContents="こんにちは"
            bodyContents="さようなら"
        />
    )
}
