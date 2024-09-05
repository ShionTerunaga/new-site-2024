import type { Preview } from "@storybook/react"
import React from "react"
import { PopupLayout } from "../src/layout/popupLayout/popupLayout.logic"
import { PopupContextProvider } from "../src/store/popup/popupContext"

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
                    <PopupContextProvider>
                        <PopupLayout />
                        <Story />
                    </PopupContextProvider>
                </div>
            )
        }
    ]
}

export default preview
