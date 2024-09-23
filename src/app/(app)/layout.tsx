import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import NavBar from "@/components/nav/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <main className="flex min-h-screen bg-zinc-200 dark:bg-zinc-950 flex-col">
          <NavBar />
          <div className="px-4 py-8 w-full">{children}</div>
        </main>
        <script
          async
          src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"
        ></script>
      </body>
    </html>
  );
}
