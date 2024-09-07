import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  logo: "/PekoMozzieLogo.png",
  description: "PekoMozzie is a fun job application tracking tool featuring a cute, hungry pet monster.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-300">
        <main>{children}</main>
      </body>
    </html>
  )
}



// "It Cannot See It Cannot Think It Cannot Hear Or Feel, It Lives Only To Make Your Application Into It's Meal"