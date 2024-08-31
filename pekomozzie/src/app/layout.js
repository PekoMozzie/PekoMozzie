import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  logo: "/PekoMozzieLogo.png",
  description: "The only monster that only eats job applications",
  slogan: "It Cannot See It Cannot Think It Cannot Hear Or Feel, It Lives Only To Make Your Application Into It's Meal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-300">
        <nav className="bg-gray-500 text-white ">
          <div className="container mx-auto flex justify-between items-center py-4">
            <Image src={metadata.logo} alt="PekoMozzie Logo" width="300" height="25" className="hover:"/>
            <h1 className = "text-xl italic font-bold text-green-500 pr-2">{metadata.slogan}</h1>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/goals" className="hover:underline">
                  WeeklyGoals
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <main>{children}</main>
        </body>
    </html>
  );

}
