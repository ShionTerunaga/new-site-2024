import type { StorybookConfig } from "@storybook/nextjs";
import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { createRequire } from "module";
import path from "path";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcPath = path.resolve(__dirname, "../src");
const styleLoader = require.resolve("style-loader");
const cssLoader = require.resolve("css-loader");

const config: StorybookConfig = {
    stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-onboarding",
        "@storybook/addon-links",
        "@chromatic-com/storybook",
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
                            styleLoader,
                            {
                                loader: styleLoader,
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
                                loader: cssLoader,
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
                "@": srcPath
            };
        }

        return config;
    }
};
export default config;
