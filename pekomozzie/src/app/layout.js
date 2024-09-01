import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PekoMozzie",
  description: "The only monster that only eats job applications",
  slogan: "It Cannot See It Cannot Think It Cannot Hear Or Feel, It Lives Only To Make Your Application Into It's Meal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
