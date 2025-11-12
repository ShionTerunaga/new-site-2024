import type { Meta, StoryFn } from "@storybook/react";
import { popupAction, PopupContents, usePopup } from "@/features/popup";
import { PopupBase } from "@/features/popup/components/base/popup-base";

const meta: Meta<typeof PopupBase> = {
    component: PopupBase
};

export default meta;

type Story = StoryFn<typeof PopupBase>;

export const Basic: Story = () => {
    const { open } = popupAction;

    const handleClick = () => {
        open(
            <PopupContents>
                <div>hogehoge</div>
            </PopupContents>
        );
    };

    return <button onClick={handleClick}>Open</button>;
};
