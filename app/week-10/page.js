'use client'; 
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUserAuth } from "@/contexts/AuthContext";

export default function LoginPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {

      router.push("/week-10/shopping-list"); 
    }
  }, [user, router]);

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();

      
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="p-10">
      {user ? (
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <p>Redirecting to your shopping list...</p>
          <button onClick={handleSignOut} className="mt-4 bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded">
            Logout
          </button>
        </div>
      ) : (
        <button onClick={handleSignIn}>Sign in with GitHub</button>
      )}
    </div>
  );
}