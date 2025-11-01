import Footer from "@/components/ui/footer";
import { Navbar } from "@/app/_components/navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Victor Kang | Frontend Engineer & UI/UX Designer",
  description:
    "Frontend Engineer specializing in React, Next.js, and UI/UX design. Creating seamless digital experiences and responsive web platforms with a design-first approach.",
  keywords: [
    "Frontend Engineer",
    "UI/UX Designer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Web Development",
    "Victor Kang",
  ],
  authors: [{ name: "Victor Kang" }],
  creator: "Victor Kang",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Victor Kang | Frontend Engineer & UI/UX Designer",
    description:
      "Frontend Engineer specializing in React, Next.js, and UI/UX design. Creating seamless digital experiences and responsive web platforms.",
    siteName: "Victor Kang Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Kang | Frontend Engineer & UI/UX Designer",
    description:
      "Frontend Engineer specializing in React, Next.js, and UI/UX design. Creating seamless digital experiences and responsive web platforms.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
