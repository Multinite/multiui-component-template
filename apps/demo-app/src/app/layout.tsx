import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Theme } from "@multinite_official/multiui";
import { default_theme } from "@/multiui/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js | MultiUI",
  description: "A MultiUI component library running on Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " overflow-hidden"}>
        <Theme $themeId="default" $theme={default_theme} className="w-screen h-screen bg-background text-foreground">
          {children}
        </Theme>
      </body>
    </html>
  );
}
