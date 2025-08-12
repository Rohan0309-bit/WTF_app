
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons } from '@/components/icons';
import { signInWithGoogle, loginWithEmailPassword, getSignInMethods, auth, db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Loader2 } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const checkUserProfile = async (user: any) => {
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (!userDoc.exists()) {
      router.push("/profile-setup");
    } else {
      router.push("/dashboard");
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithGoogle();
      const user = result.user;
      await checkUserProfile(user);
    } catch (err) {
      console.error("Google login failed", err);
      toast({
        variant: 'destructive',
        title: 'Login Failed',
        description: 'There was an error signing in with Google. Please try again.',
      });
    } finally {
        setLoading(false);
    }
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
        toast({ variant: 'destructive', title: 'Login Failed', description: 'Please enter both email and password.' });
        return;
    }
    setLoading(true);

    try {
      const methods = await getSignInMethods(email.trim());

      if (methods.length === 0) {
        toast({
            variant: 'destructive',
            title: 'No Account Found',
            description: 'No account found with this email. Please sign up first.',
            action: <Button variant="secondary" onClick={() => router.push('/signup')}>Sign Up</Button>
        });
        setLoading(false);
        return;
      }
      
      if (!methods.includes('password')) {
        toast({
            variant: 'destructive',
            title: 'Sign-in Method Mismatch',
            description: `This email is registered with ${methods.join(', ')}. Please use that method to sign in.`,
        });
        setLoading(false);
        return;
      }
      
      const result = await loginWithEmailPassword(email.trim(), password);
      await checkUserProfile(result.user);

    } catch (error: any) {
        const errorMap: Record<string, string> = {
            "auth/wrong-password": "Incorrect password. Please try again.",
            "auth/invalid-credential": "Incorrect password. Please try again.",
            "auth/too-many-requests": "Too many attempts. Try again later.",
        };
        const description = errorMap[error.code] || "An unexpected error occurred. Please try again.";
        toast({
            variant: 'destructive',
            title: 'Login Failed',
            description,
        });
        console.error("Email login failed", error);
    } finally {
        setLoading(false);
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <div className="flex justify-center items-center gap-2 mb-2">
            <Icons.logo className="h-20 w-20 text-primary" />
          </div>
          <CardTitle className="text-2xl font-headline">Welcome Back</CardTitle>
          <CardDescription>Sign in to continue your journey</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
           <form onSubmit={handleEmailLogin} className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required disabled={loading}/>
              </div>
               <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                    <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required disabled={loading}/>
                    <Button type="button" variant="ghost" size="icon" className="absolute top-1/2 right-2 -translate-y-1/2 h-7 w-7 text-muted-foreground" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <EyeOff /> : <Eye />}
                    </Button>
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                 {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                 Sign in with Email
              </Button>
            </form>

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                </div>
            </div>
            
          <Button variant="outline" className="w-full" onClick={handleGoogleLogin} disabled={loading}>
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 126 21.5 173.5 58.1l-65.2 64.2C335.5 97 295.6 80 248 80c-82.6 0-150.2 67.5-150.2 150.2S165.4 406.2 248 406.2c46.4 0 87.5-21.2 115.8-54.8l65.2 64.2c-55.5 51.5-128.5 82.8-211 82.8-144.3 0-261.8-117.5-261.8-261.8S103.7-5.8 248-5.8c79.4 0 149.8 30.9 201.8 82.2l-3.2 3.2C485.4 121.3 488 187.3 488 261.8z"></path></svg>}
            Sign in with Google
          </Button>
        </CardContent>
        <CardFooter className="justify-center text-sm">
           <p className="text-muted-foreground">
            Don't have an account?{' '}
            <Link href="/signup" className="font-semibold text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
