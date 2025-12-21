
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons } from '@/components/icons';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, fetchSignInMethodsForEmail, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Eye, EyeOff, Loader2, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

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

  const handleLoginOrSignup = async (e: React.FormEvent) => {
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
      const methods = await fetchSignInMethodsForEmail(auth, email.trim());
      
      if (methods.length > 0) {
        // Email exists, so sign in
        try {
          await signInWithEmailAndPassword(auth, email.trim(), password);
          router.push('/dashboard');
        } catch (error: any) {
          toast({
            variant: 'destructive',
            title: 'Login Failed',
            description: "Incorrect password. Please try again.",
          });
        }
      } else {
        // Email does not exist, so create account
        try {
            await createUserWithEmailAndPassword(auth, email.trim(), password);
            router.push('/profile-setup');
        } catch (error: any) {
            if (error.code === 'auth/weak-password') {
                toast({
                    variant: 'destructive',
                    title: 'Signup Failed',
                    description: 'Password should be at least 6 characters.',
                });
            } else {
                 toast({
                    variant: 'destructive',
                    title: 'Signup Failed',
                    description: 'Could not create an account. Please try again.',
                });
            }
        }
      }
    } catch (error: any) {
      let message = "Something went wrong. Please try again.";
      if (error.code === "auth/invalid-email") {
        message = "Please enter a valid email address.";
      }
      toast({
        variant: 'destructive',
        title: 'Authentication Failed',
        description: message,
      });
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
            <CardTitle className="text-3xl font-bold text-foreground">Welcome</CardTitle>
            <CardDescription className="text-muted-foreground">Sign in to your account</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <form onSubmit={handleLoginOrSignup} className="space-y-4">
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
              </div>
            </form>
          </CardContent>
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
