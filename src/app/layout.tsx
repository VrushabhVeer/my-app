import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vrushabh Veer | Website",
  description:
    "Welcome to my portfolio. Explore projects and let's collaborate on building innovative web solutions.",
  keywords: [
    "Vrushabh Veer",
    "Developer",
    "Portfolio",
    "JavaScript",
    "React",
    "Next.js",
    "Web Development",
  ],
  authors: [{ name: "Vrushabh Veer" }],
  openGraph: {
    title: "Vrushabh Veer | Website",
    description:
      "Welcome to my portfolio. Explore projects and let's collaborate on building innovative web solutions.",
    url: "https://vrushabhveer.github.io",
    images: [
      {
        url: "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdeveloper.4c30ed23.png&w=1920&q=75",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vrushabh Veer | Website",
    description:
      "Welcome to my portfolio. Explore projects and let's collaborate on building innovative web solutions.",
    images: [
      "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdeveloper.4c30ed23.png&w=1920&q=75",
    ],
  },
  icons: {
    icon: "./favicon.ico",
    other: [{ rel: "apple-touch-icon", url: "./apple-touch-icon.png" }],
  },
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
