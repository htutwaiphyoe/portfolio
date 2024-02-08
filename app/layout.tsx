import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";
import { cn } from "@/utils/helpers";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Htut Wai Phyoe - Software Engineer",
  description:
    "Htut Wai Phyoe, a experienced software engineer based in Myanmar",
};

function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={cn("bg-gray-lightest", font.className)}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
