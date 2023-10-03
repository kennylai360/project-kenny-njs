import type { Metadata } from "next";

import "../app/globals.css";

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
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {children}
      </body>
    </html>
  );
}
