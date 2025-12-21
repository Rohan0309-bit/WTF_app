
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons } from '@/components/icons';
import { auth, createUserProfile } from '@/lib/firebase';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { fetchSignInMethodsForEmail, createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignupPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

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
     if (!name || !age || !height || !gender) {
      toast({ variant: 'destructive', title: 'Validation Error', description: 'Please fill all required profile fields.' });
      return;
    }

    setLoading(true);

     try {
        const methods = await fetchSignInMethodsForEmail(auth, email.trim());

        if (methods.length > 0) {
            toast({
                variant: 'destructive',
                title: 'Email Already Registered',
                description: `This email is already in use. Please log in instead.`,
                action: <Button variant="secondary" onClick={() => router.push('/login')}>Login</Button>
            });
            setLoading(false);
            return;
        }

      const result = await createUserWithEmailAndPassword(auth, email, password);
      
      const profileData = {
          name,
          age: Number(age),
          height: Number(height),
          gender
      }
      await createUserProfile(result.user, profileData);
      
      toast({ title: 'Profile Created!', description: 'Welcome to the club!' });
      router.push('/dashboard');

    } catch (error: any) {
        const errorMap: Record<string, string> = {
            "auth/weak-password": "The password is too weak. Please choose a stronger password.",
            "auth/invalid-email": "Invalid email address format.",
            "auth/email-already-in-use": "This email is already registered. Please log in instead.",
        };
        const description = errorMap[error.code] || 'An unexpected error occurred. Please try again.';
       
        toast({
            variant: 'destructive',
            title: 'Signup Failed',
            description,
        });
        console.error("Email signup failed", error);
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
          <CardTitle className="text-2xl font-headline">Join Well Trained Freak</CardTitle>
          <CardDescription>Create your account to start training</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
           <form onSubmit={handleEmailSignup} className="space-y-4">
                <div className="space-y-1">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Eg.Rohan" value={name} onChange={(e) => setName(e.target.value)} required disabled={loading}/>
                </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <Label htmlFor="age">Age</Label>
                        <Input id="age" type="number" placeholder="Eg. 20" value={age} onChange={(e) => setAge(e.target.value)} required disabled={loading}/>
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="height">Height (cm)</Label>
                        <Input id="height" type="number" placeholder="Eg. 172" value={height} onChange={(e) => setHeight(e.target.value)} required disabled={loading}/>
                    </div>
                 </div>
                 <div className="space-y-1">
                    <Label htmlFor="gender">Gender</Label>
                    <Select value={gender} onValueChange={setGender} required>
                        <SelectTrigger id="gender"><SelectValue placeholder="Select your gender" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                 </div>
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
                <div className="space-y-1">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <div className="relative">
                        <Input id="confirm-password" type={showConfirmPassword ? "text" : "password"} placeholder="••••••••" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required disabled={loading}/>
                        <Button type="button" variant="ghost" size="icon" className="absolute top-1/2 right-2 -translate-y-1/2 h-7 w-7 text-muted-foreground" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {showConfirmPassword ? <EyeOff /> : <Eye />}
                        </Button>
                    </div>
                </div>
              <Button type="submit" className="w-full" disabled={loading}>
                 {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                 Create Account
              </Button>
            </form>
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
