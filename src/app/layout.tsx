import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PopupProvider } from "@/features/popup";
import { InitialStateProvider } from "@/features/whole";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "TERUSI's portfolio site",
    description: "This is site about me."
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body className={inter.className}>
                <InitialStateProvider>
                    <PopupProvider>{children}</PopupProvider>
                </InitialStateProvider>
            </body>
        </html>
    );
}
