import type { Metadata } from "next";
import { Inter, Rubik_Beastly } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

import Sidebar from "./_modules/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${"Francis"}'s Next Portfolio`,
  description: "My Next Js Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="flex">
            <Sidebar /> <div className="flex-1">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
