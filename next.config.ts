import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin({
    unstable_turbopack: { mode: "auto" }
});

const nextConfig = {
    images: {
        localPatterns: [
            {
                pathname: "/src/assets/**/*"
            }
        ],
        domains: ["placehold.jp", "images.microcms-assets.io"]
    },
    transpilePackages: ["next-mdx-remote"],
    reactCompiler: true
};

export default withVanillaExtract(nextConfig);
