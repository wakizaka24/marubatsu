import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hello Marubatsu Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body>
        {children}
      </body>
    </html>
  );
}
