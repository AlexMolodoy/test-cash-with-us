import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const robotoLight = localFont({
  src: "./fonts/roboto-light.woff",
  variable: "--font-roboto-light",
  weight: "100 400",
});
const robotoRegular = localFont({
  src: "./fonts/roboto-regular.woff",
  variable: "--font-roboto-regular",
  weight: "100 700",
});
const robotoBold = localFont({
  src: "./fonts/roboto-bold.woff",
  variable: "--font-roboto-bold",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cash with us",
  description: "Cash with us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoLight.variable} ${robotoRegular.variable} ${robotoBold.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
