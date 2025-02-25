import type { Meta, StoryFn } from "@storybook/react"
import IntroModal from "@/app/[lang]/intro/_components/intro-modal/intro-modal"

const meta: Meta<typeof IntroModal> = {
    component: IntroModal
}

export default meta

type Story = StoryFn<typeof IntroModal>

export const Basic: Story = () => {
    return (
        <IntroModal title="あいうえお">
            <div>hogehoge</div>
        </IntroModal>
    )
}
