import type { Preview } from "@storybook/react";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        backgrounds: {
            default: "dark",
            values: [
                {
                    name: "dark",
                    value: "#000000"
                }
            ]
        },
        layout: "fullscreen"
    },
    decorators: [
        (Story) => {
            return (
                <div
                    style={{
                        boxSizing: "border-box",
                        padding: 0,
                        margin: 0
                    }}
                >
                    <Story />
                </div>
            );
        }
    ]
};

export default preview;
