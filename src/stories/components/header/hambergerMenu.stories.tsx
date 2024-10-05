import type { Meta, StoryFn } from "@storybook/react"
import MenuList from "@/components/ui/header/menuList/menuList.logic"

const meta: Meta<typeof MenuList> = {
    component: MenuList
}

export default meta

type Story = StoryFn<typeof MenuList>

export const Basic: Story = () => {
    return <MenuList lang="" />
}
