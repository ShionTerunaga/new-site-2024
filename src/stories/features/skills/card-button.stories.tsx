import type { Meta, StoryFn } from "@storybook/react"
import SPITZ from "@/assets/introduction/spitz.png"
import CardButton from "@/features/skills/components/cardView/card-button/card-button"
const meta: Meta<typeof CardButton> = {
    component: CardButton
}

export default meta

type Story = StoryFn<typeof CardButton>

export const Basic: Story = () => {
    return (
        <CardButton title="こんにちは" image={SPITZ}>
            <></>
        </CardButton>
    )
}
