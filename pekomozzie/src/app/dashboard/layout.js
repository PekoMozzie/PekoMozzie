import SignOut from './components/SignOut';
import { metadata } from '@/app/layout.js';
import JobHistory from './components/JobHistory';
import Image from "next/image";

export default function NavBar({ children }) {
  return (
    <div>
      <nav className="bg-gray-500 text-white ">
          <div className="container mx-auto flex justify-between items-center py-4">
            <a href="/dashboard"><Image src={metadata.logo} alt="PekoMozzie Logo" width="300" height="25" className="hover:"/></a>
            <ul className="flex space-x-4">
              <li>
                <a href="/goals" className="hover:underline">
                  Account
                </a>
              </li>
              <li>
                <SignOut />
              </li>
            </ul>
          </div>
        </nav>
      <main>{children}</main>
    </div>
  );
}
