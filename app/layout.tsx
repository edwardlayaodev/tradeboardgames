import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import OrganismNavbar from "./_components/organisms/Navbar";
import OrganismFooter from "./_components/organisms/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trade Board Games",
  description: "A Community for exchanging Boardgames, Puzzles and much more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`text-base-content ${inter.className}`}>
        <OrganismNavbar />
        {children}
        <OrganismFooter />
      </body>
    </html>
  );
}
