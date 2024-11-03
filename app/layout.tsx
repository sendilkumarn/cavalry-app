'use client'
import { useEffect } from "react";
import { Theme } from "@radix-ui/themes";
import localFont from "next/font/local";

import AOS from "aos";

import "./globals.css";
import "aos/dist/aos.css"
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Theme accentColor="red" grayColor="gray" radius="large" scaling="95%">
          {children}
        </Theme>
      </body>
      <GoogleAnalytics gaId="G-S2R03MH16W" />
    </html>
  );
}
