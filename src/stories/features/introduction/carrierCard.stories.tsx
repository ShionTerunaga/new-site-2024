import type { Meta, StoryFn } from "@storybook/react"
import CarrierCard from "@/features/introduction/components/carrierCard/carrierCard"

const meta: Meta<typeof CarrierCard> = {
    component: CarrierCard
}

export default meta

type Story = StoryFn<typeof CarrierCard>

export const Basic: Story = () => {
    return <CarrierCard lang="" />
}
