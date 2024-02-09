import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Igor Tsygankov - CV",
  description:
    "Frontend Developer dedicated to crafting exceptional user experiences with a keen eye for detail."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          "min-h-screen bg-background p-4 font-sans antialiased md:p-16 print:p-12",
          fontSans.variable
        )}
      >
        <main className='relative mx-auto scroll-my-12 space-y-14 overflow-auto'>
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
