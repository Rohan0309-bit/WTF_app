
'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons } from '@/components/icons';
import { signInWithGoogle, auth, db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();

  const handleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result.user;

      // Check if user profile exists
      const userDoc = await getDoc(doc(db, "users", user.uid));

      if (!userDoc.exists()) {
        // New user → redirect to profile setup
        router.push("/profile-setup");
      } else {
        // Returning user → go to dashboard
        router.push("/dashboard");
      }
    } catch (err) {
      console.error("Login failed", err);
      toast({
        variant: 'destructive',
        title: 'Login Failed',
        description: 'There was an error signing in with Google. Please try again.',
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <div className="flex justify-center items-center gap-2 mb-2">
            <Icons.logo className="h-20 w-20 text-primary" />
          </div>
          <CardTitle className="text-2xl font-headline">Welcome to Well Trained Freak</CardTitle>
          <CardDescription>Sign in to continue your journey</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline" className="w-full" onClick={handleLogin}>
            <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 126 21.5 173.5 58.1l-65.2 64.2C335.5 97 295.6 80 248 80c-82.6 0-150.2 67.5-150.2 150.2S165.4 406.2 248 406.2c46.4 0 87.5-21.2 115.8-54.8l65.2 64.2c-55.5 51.5-128.5 82.8-211 82.8-144.3 0-261.8-117.5-261.8-261.8S103.7-5.8 248-5.8c79.4 0 149.8 30.9 201.8 82.2l-3.2 3.2C485.4 121.3 488 187.3 488 261.8z"></path></svg>
            Sign in with Google
          </Button>
        </CardContent>
        <CardFooter className="justify-center text-sm">
          <p>
            This is a Google-only login application.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
