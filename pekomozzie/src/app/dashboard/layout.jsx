import SignOut from '@/app/dashboard/components/SignOut.jsx';
import { metadata } from '@/app/layout.js';
import Image from "next/image";

export default function NavBar({ children }) {
  return (
    <div>
      <nav className="bg-blue-200 text-black font-bold ">
          <div className="container mx-auto flex justify-between items-center py-4">
            <a href="/dashboard"><Image src={metadata.logo} alt="PekoMozzie Logo" width="300" height="25" className="hover:opacity-80"/></a>
            <ul className="flex space-x-4">
              <li><a href="/dashboard/history" className="hover:text-green-500">History</a></li>
              <li><a href="/dashboard/goal" className="hover:text-green-500">Goal</a></li>
              <li><a className="hover:text-green-500">Account</a></li>
              <li><SignOut /></li>
            </ul>
          </div>
        </nav>
      <main>{children}</main>
    </div>
  );
}
