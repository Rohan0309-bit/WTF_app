
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons } from '@/components/icons';
import { signInWithGoogle, registerWithEmailPassword, auth, db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function SignupPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithGoogle();
      await checkUserProfile(result.user);
    } catch (err) {
      console.error("Google signup failed", err);
       toast({
        variant: 'destructive',
        title: 'Signup Failed',
        description: 'There was an error signing up with Google. Please try again.',
      });
    }
  };

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast({
        variant: 'destructive',
        title: 'Signup Failed',
        description: 'Passwords do not match. Please try again.',
      });
      return;
    }
     try {
      const result = await registerWithEmailPassword(email, password);
      await checkUserProfile(result.user);
    } catch (error: any) {
        let description = 'An unexpected error occurred. Please try again.';
        if (error.code === 'auth/email-already-in-use') {
            description = 'This email is already registered. Please login instead.';
            toast({
              variant: 'destructive',
              title: 'Email Already Registered',
              description,
              action: <Button variant="secondary" onClick={() => router.push('/login')}>Login</Button>
            });
        } else if (error.code === 'auth/weak-password') {
            description = 'The password is too weak. Please choose a stronger password.';
            toast({
              variant: 'destructive',
              title: 'Signup Failed',
              description,
            });
        } else {
           toast({
              variant: 'destructive',
              title: 'Signup Failed',
              description,
            });
        }
      console.error("Email signup failed", error);
    }
  };
  
  const checkUserProfile = async (user: any) => {
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (!userDoc.exists()) {
        router.push("/profile-setup");
      } else {
        toast({
          title: 'Account Exists',
          description: 'You already have an account. Logging you in.',
        });
        router.push("/dashboard");
      }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <div className="flex justify-center items-center gap-2 mb-2">
            <Icons.logo className="h-20 w-20 text-primary" />
          </div>
          <CardTitle className="text-2xl font-headline">Join Well Trained Freak</CardTitle>
          <CardDescription>Create your account to start training</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
           <form onSubmit={handleEmailSignup} className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
               <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
               <div className="space-y-1">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" placeholder="••••••••" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              </div>
              <Button type="submit" className="w-full">Create Account</Button>
            </form>

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                </div>
            </div>

          <Button variant="outline" className="w-full" onClick={handleGoogleSignup}>
            <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 126 21.5 173.5 58.1l-65.2 64.2C335.5 97 295.6 80 248 80c-82.6 0-150.2 67.5-150.2 150.2S165.4 406.2 248 406.2c46.4 0 87.5-21.2 115.8-54.8l65.2 64.2c-55.5 51.5-128.5 82.8-211 82.8-144.3 0-261.8-117.5-261.8-261.8S103.7-5.8 248-5.8c79.4 0 149.8 30.9 201.8 82.2l-3.2 3.2C485.4 121.3 488 187.3 488 261.8z"></path></svg>
            Sign up with Google
          </Button>
        </CardContent>
        <CardFooter className="justify-center text-sm">
          <p className="text-muted-foreground">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-primary hover:underline">
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
