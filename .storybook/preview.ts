import type { Preview } from "@storybook/react"

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
        }
    }
}

export default preview