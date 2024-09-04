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
    <button onClick={handleSignOut}>SignOut</button>
  )
};

export default SignOut;

