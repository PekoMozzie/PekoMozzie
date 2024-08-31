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
      <body className="bg-gray-500">
        <nav className="bg-gray-800 text-white ">
          <div className="container mx-auto flex justify-between items-center py-4">
            <a href="/" className="text-2xl font-bold">
              {metadata.title}
            </a>
            <h1 className = "text-xl italic font-bold text-green-500">{metadata.slogan}</h1>
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
