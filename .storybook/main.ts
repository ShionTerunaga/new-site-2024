import type { StorybookConfig } from "@storybook/nextjs"
import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import path from "path"

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-onboarding",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
        "@storybook/addon-styling-webpack",
        {
            name: "@storybook/addon-styling-webpack",
            options: {
                plugins: [
                    new VanillaExtractPlugin(),
                    new MiniCssExtractPlugin()
                ],
                rules: [
                    {
                        test: /\.css$/,
                        sideEffects: true,
                        use: [
                            require.resolve("style-loader"),
                            {
                                loader: require.resolve("style-loader"),
                                options: {}
                            }
                        ],
                        exclude: /\.vanilla\.css$/i
                    },
                    {
                        test: /\.vanilla\.css$/i,
                        sideEffects: true,
                        use: [
                            MiniCssExtractPlugin.loader,
                            {
                                loader: require.resolve("css-loader"),
                                options: {
                                    url: false
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ],
    framework: {
        name: "@storybook/nextjs",
        options: {}
    },
    staticDirs: ["../public"],
    webpackFinal: async (config) => {
        if (config.resolve) {
            config.resolve.alias = {
                ...config.resolve.alias,
                "@": path.resolve(__dirname, "./src")
            }
        }

        return config
    }
}
export default config
