import type { Meta, StoryFn } from "@storybook/react";
import CarrierCard from "@/app/[lang]/intro/_components/carrie-card/carrier-card";

const meta: Meta<typeof CarrierCard> = {
    component: CarrierCard
};

export default meta;

type Story = StoryFn<typeof CarrierCard>;

export const Basic: Story = () => {
    return <CarrierCard lang="ja" />;
};
