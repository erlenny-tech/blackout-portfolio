import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BLACKOUT — Funksjonelt sengetøy for folk som sover hardt",
  description:
    "BLACKOUT lager sengetøy for hud, hår, varme og alt kroppen driver med etter leggetid. Ikke for boligstylisten.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb">
      <body>{children}</body>
    </html>
  );
}
