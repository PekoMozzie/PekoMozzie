'use client'

import { usePathname } from 'next/navigation';

const Modal = ({modal}) => {
  const pathname = usePathname();

  const cleanPathname = pathname.split('?')[0];

  const content = {
    wrongCreds: {title: 'Incorrect credentials', body: 'Try again!'},
    signedUp: {title: 'Welcome!', body: 'Check your email to verify your new account'},
    whoaThere: {title: 'Whoa, there!', body: 'An account already exists for this email'},
    fed: {title: 'Nice work!', body: 'You fed the beast.'}
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="p-6 w-full max-w-sm bg-white border rounded-lg shadow-lg">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900">{content[modal].title}</h3>
          <div className="mt-2">
            <p className="text-lg text-gray-500">{content[modal].body}</p>
          </div>
          <div className="flex justify-center mt-4">
            <a
              href={pathname}
              className="px-4 py-2 text-sm font-medium text-white bg-lime-600 border border-transparent rounded-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
            >
              Close
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
