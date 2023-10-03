import type { Metadata } from "next";

import "../app/globals.css";
import Menu from "@/components/menu";

export const metadata: Metadata = {
  title: "Kenny Portfolio",
  description: "Portfolio following nextjs documentation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Menu></Menu>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
