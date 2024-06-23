import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";
import { cn } from "@/utils/helpers";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.htutwaiphyo.pro/"),
  title: "Htut Wai Phyoe - Software Engineer",
  description:
    "Htut Wai Phyoe, A skilled frontend developer with over 3 years of professional experience in designing, developing, and maintaining SaaS web applications.",
  openGraph: {
    images: "/images/avatar.png",
  },
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
