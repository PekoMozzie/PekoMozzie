import SignOut from './components/signOut';
import { metadata } from '@/app/layout.js'
import JobHistory from './components/JobHistory'

export default function NavBar({ children }) {
  return (
    <div>
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
            <li>
              <SignOut />
            </li>
          </ul>
        </div>
      </nav>
      <main>{children}</main>
      <JobHistory/>
    </div>
  );

}
