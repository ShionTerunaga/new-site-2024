import type { Meta, StoryFn } from "@storybook/react"
import { PopupBase, PopupContents } from "@/components/ui/popup"
import { usePopup } from "@/hooks/popup"

const meta: Meta<typeof PopupBase> = {
    component: PopupBase
}

export default meta

type Story = StoryFn<typeof PopupBase>

export const Basic: Story = () => {
    const { openPopup } = usePopup()

    const handleClick = () => {
        openPopup(
            <PopupContents
                title={"あいうえお"}
                answer={"かきくけこ"}
                description={"さしすせそ"}
            />
        )
    }

    return <button onClick={handleClick}>Open</button>
}
