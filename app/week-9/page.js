'use client'; 
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUserAuth } from "@/contexts/AuthContext";

export default function LoginPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {

      router.push("/week-9/shopping-list"); 
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
    await firebaseSignOut();
  };

  return (
    <div className="p-10">
      {user ? (
        <p>Redirecting to your shopping list...</p>
      ) : (
        <button onClick={handleSignIn}>Sign in with GitHub</button>
      )}
    </div>
  );
}