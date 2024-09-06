'use client'

import { useRouter } from 'next/navigation';

const SignOut = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      const response = await fetch('/api/auth/signout', {
        method: 'POST',            
        credentials: 'include'
      });

      if (response.ok) {
        // Redirect the user to the homepage after successful sign out
        router.push('/');
      } else {
        alert("Signout failed");
      }
    } catch (error) {
      console.error('Error during sign out:', error);
    }
  };

  return (
    <div>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <button onClick={handleSignOut}>Sign Out</button>
    </div>
  )
};

export default SignOut;
