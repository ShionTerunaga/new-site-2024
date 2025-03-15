import type { Meta, StoryFn } from "@storybook/react";
import { Card } from "@/components/elements/card";

const meta: Meta<typeof Card> = {
    component: Card
};

export default meta;

type Story = StoryFn<typeof Card>;

export const Basic: Story = () => {
    return (
        <Card
            title="title"
            description="hogehogehogehgoeruhaughaiurhgaiuhgaiuhgriauhrgiahgeriu"
        />
    );
};
