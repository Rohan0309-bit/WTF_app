
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons } from '@/components/icons';
import { signInWithGoogle, loginWithEmailPassword, auth, createUserProfile } from '@/lib/firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, fetchSignInMethodsForEmail, sendPasswordResetEmail } from 'firebase/auth';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Eye, EyeOff, Loader2, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [openResetModal, setOpenResetModal] = useState(false);

  const supportEmail = 'wtfapp369@gmail.com';
  const supportSubject = 'Password Reset Help – WTF App';
  const supportBody = `Registered Email:\nIssue:`;
  const mailtoHref = `mailto:${supportEmail}?subject=${encodeURIComponent(supportSubject)}&body=${encodeURIComponent(supportBody)}`;

  // Auto-redirect if already signed in
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/dashboard');
      }
    });
    return () => unsub();
  }, [router]);

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
      router.push('/dashboard');
    } catch (err) {
      console.error('Google login failed', err);
      toast({
        variant: 'destructive',
        title: 'Login Failed',
        description: 'Error signing in with Google. Try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({
        variant: 'destructive',
        title: 'Login Failed',
        description: 'Please enter both email and password.',
      });
      return;
    }
    setLoading(true);
    try {
      await loginWithEmailPassword(email.trim(), password);
      router.push('/dashboard');
    } catch (error: any) {
      let message = "Something went wrong. Please try again.";

      if (error.code === "auth/invalid-credential" || error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
        message = "Incorrect email or password.";
      } else if (error.code === "auth/too-many-requests") {
        message = "Too many attempts. Please wait a moment and try again.";
      }
      
      toast({
        variant: 'destructive',
        title: 'Login Failed',
        description: message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleQuickSignup = async () => {
    if (!email || !password) {
      toast({
        variant: 'destructive',
        title: 'Signup Failed',
        description: 'Please enter both email and password.',
      });
      return;
    }

    setLoading(true);

    try {
      const methods = await fetchSignInMethodsForEmail(auth, email.trim());
      if (methods.length > 0) {
        toast({
          variant: 'destructive',
          title: 'Email Already Registered',
          description: "This email is already in use. Please sign in instead.",
        });
        setLoading(false);
        return;
      }

      await createUserWithEmailAndPassword(auth, email.trim(), password);
      router.push('/dashboard');

    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
         toast({
          variant: 'destructive',
          title: 'Email Already Registered',
          description: "This email is already in use. Please sign in instead.",
        });
        setLoading(false); // Make sure to stop loading here
        return;
      }

      const errorMap: Record<string, string> = {
        "auth/weak-password": "Password should be at least 6 characters.",
        "auth/invalid-email": "Invalid email address.",
      };

      toast({
        variant: 'destructive',
        title: 'Signup Failed',
        description: errorMap[error.code] || 'Something went wrong. Please try again.',
      });
      console.error("Quick signup failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-md"
      >
        <Card className="bg-card/70 dark:bg-card/50 backdrop-blur-lg shadow-2xl border-border rounded-2xl overflow-hidden">
          <CardHeader className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center gap-2 mb-4"
            >
              <Icons.logo className="h-20 w-20 text-primary" />
            </motion.div>
            <CardTitle className="text-3xl font-bold text-foreground">Welcome Back</CardTitle>
            <CardDescription className="text-muted-foreground">Sign in or create an account instantly</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:ring-primary"
                />
              </div>
              <div>
                <div className="flex justify-between items-center">
                    <Label htmlFor="password" className="text-foreground">Password</Label>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                    className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:ring-primary"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute top-1/2 right-2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </Button>
                </div>
                <div className="flex justify-end mt-2">
                    <button
                        type="button"
                        onClick={() => setOpenResetModal(true)}
                        className="text-xs text-muted-foreground hover:text-foreground hover:underline"
                    >
                        Forgot Password?
                    </button>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  disabled={loading}
                >
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Sign In
                </Button>
                <Button
                  type="button"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
                  disabled={loading}
                  onClick={handleQuickSignup}
                >
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Quick Create
                </Button>
              </div>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full bg-secondary hover:bg-muted text-foreground border-border"
              onClick={handleGoogleLogin}
              disabled={loading}
            >
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> :
                <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                  <path fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504C110.8 504 0 393.2 0 256S110.8 8 248 8
                    c66.8 0 126 21.5 173.5 58.1l-65.2 64.2C335.5 97 295.6 80 248 80
                    c-82.6 0-150.2 67.5-150.2 150.2S165.4 406.2 248 406.2
                    c46.4 0 87.5-21.2 115.8-54.8l65.2 64.2
                    c-55.5 51.5-128.5 82.8-211 82.8
                    c-144.3 0-261.8-117.5-261.8-261.8
                    S103.7-5.8 248-5.8
                    c79.4 0 149.8 30.9 201.8 82.2l-3.2 3.2
                    C485.4 121.3 488 187.3 488 261.8z" />
                </svg>}
              Sign in with Google
            </Button>
          </CardContent>

          <CardFooter className="justify-center text-sm text-muted-foreground">
            Don’t have an account?{' '}
            <Link href="/signup" className="ml-1 font-semibold text-primary hover:underline">
              Sign up
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
    <Dialog open={openResetModal} onOpenChange={setOpenResetModal}>
      <DialogContent className="bg-card/80 backdrop-blur-xl border-border text-foreground rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">🔧 Password Reset Temporarily Unavailable</DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm pt-2">
            We’re currently facing a small technical issue with password reset.
            Don’t worry — our support team will help you reset your password quickly.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-6">
          <Button
            variant="ghost"
            onClick={() => setOpenResetModal(false)}
            className="text-muted-foreground hover:text-foreground"
          >
            Cancel
          </Button>
          <a href={mailtoHref}>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Mail className="mr-2 h-4 w-4" />
              Email Support
            </Button>
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </>
  );
}
