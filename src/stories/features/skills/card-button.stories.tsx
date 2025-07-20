import type { Meta, StoryFn } from "@storybook/react";
import SPITZ from "@/assets/introduction/spitz.png";
import CardButton from "@/components/elements/card-button/card-button";
const meta: Meta<typeof CardButton> = {
    component: CardButton
};

export default meta;

type Story = StoryFn<typeof CardButton>;

export const Basic: Story = () => {
    return (
        <CardButton key={1} index={0} title="こんにちは" image={SPITZ}>
            <></>
        </CardButton>
    );
};
