import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin"

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        localPatterns: [
            {
                pathname: "/src/assets/**/*"
            }
        ],
        domains: ["placehold.jp", "images.microcms-assets.io"]
    }
}

export default withVanillaExtract(nextConfig)
