import type { Metadata } from "next";
import "./globals.css";
import {Poppins} from 'next/font/google';
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";


const poppins = Poppins({
  subsets: ['latin'], 
  variable: '--font-poppins', 
  weight: ['100', '200', '400', '500', '700'],
  style: ['italic', 'normal']
})

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Hotel Booking Application",
  description: "Experience the best serivces with us",
};

export default function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-normal">

        <Header />
        <Footer/>
        {children}
      </body>
    </html>
  );
}
