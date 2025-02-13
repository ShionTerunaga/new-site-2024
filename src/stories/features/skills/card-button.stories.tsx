import type { Meta, StoryFn } from "@storybook/react"
import CardButton from "@/app/[lang]/skills/_components/card-view/card-button/card-button"
import SPITZ from "@/assets/introduction/spitz.png"
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
