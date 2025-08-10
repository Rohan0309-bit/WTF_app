
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { auth, db } from '@/lib/firebase';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

type ProfileForm = {
  name: string;
  age: string;
  height: string;
  weight: string;
  gender: 'male' | 'female' | 'other' | '';
  workoutPreference: 'home' | 'gym' | '';
  userType: 'athlete' | 'general';
  bio?: string;
};

export default function SetupProfilePage() {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<ProfileForm>({
    name: '',
    age: '',
    height: '',
    weight: '',
    gender: '',
    workoutPreference: '',
    userType: 'general',
    bio: '',
  });

  useEffect(() => {
    const u = auth.currentUser;
    if (u) {
      setForm((f) => ({ ...f, name: u.displayName ?? f.name }));
    }
  }, []);

  const isValid = () =>
    form.name.trim().length > 1 &&
    !!form.age &&
    !!form.height &&
    !!form.weight &&
    !!form.gender &&
    !!form.workoutPreference;

  const handleChange = (key: keyof Omit<ProfileForm, 'gender' | 'workoutPreference' | 'userType'>, value: string) => {
     setForm((s) => ({ ...s, [key]: value }));
  }

  const handleSelectChange = (key: 'gender' | 'workoutPreference', value: string) => {
      setForm((s) => ({ ...s, [key]: value as any}));
  }

  const handleRadioChange = (key: 'userType', value: string) => {
      setForm((s) => ({...s, [key]: value as any}));
  }

  const onSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!isValid()) {
      toast({ variant: 'destructive', title: 'Validation Error', description: 'Please fill all required fields.' });
      return;
    }
    const user = auth.currentUser;
    if (!user) {
      toast({ variant: 'destructive', title: 'Error', description: 'You must be logged in.' });
      return;
    }

    setLoading(true);
    try {
      const ref = doc(db, 'users', user.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        router.push('/dashboard');
        return;
      }

      await setDoc(ref, {
        uid: user.uid,
        email: user.email,
        name: form.name,
        age: Number(form.age),
        height: Number(form.height),
        weight: Number(form.weight),
        gender: form.gender,
        workoutPreference: form.workoutPreference,
        userType: form.userType,
        bio: form.bio || '',
        createdAt: serverTimestamp(),
        lastSeen: serverTimestamp(),
      });

      toast({ title: 'Profile Created!', description: 'Welcome to the club!' });
      router.push('/dashboard');
    } catch (err) {
      console.error('Save profile error', err);
      toast({ variant: 'destructive', title: 'Error', description: 'Failed to create profile. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="w-full max-w-2xl bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-2xl"
      >
        <div className="flex items-center gap-4 mb-6">
          <Avatar className="w-16 h-16">
             <AvatarImage src={auth.currentUser?.photoURL || undefined} />
            <AvatarFallback>{form.name?.[0]?.toUpperCase() ?? 'W'}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-headline font-bold text-foreground">Finish your profile</h1>
            <p className="text-sm text-muted-foreground">A few details to personalize your workouts.</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              type="number"
              min={10}
              max={100}
              value={form.age}
              onChange={(e) => handleChange('age', e.target.value)}
              placeholder="e.g. 25"
              required
            />
          </div>

          <div className="space-y-2">
            <Label>User Type</Label>
            <RadioGroup value={form.userType} onValueChange={(v) => handleRadioChange('userType', v)} className="flex gap-4">
                <div className="flex items-center space-x-2"><RadioGroupItem value="athlete" id="r-athlete" /><Label htmlFor="r-athlete">Athlete</Label></div>
                <div className="flex items-center space-x-2"><RadioGroupItem value="general" id="r-general" /><Label htmlFor="r-general">General User</Label></div>
            </RadioGroup>
          </div>

          <div>
            <Label htmlFor="height">Height (cm)</Label>
            <Input
              id="height"
              type="number"
              value={form.height}
              onChange={(e) => handleChange('height', e.target.value)}
              placeholder="e.g. 175"
              required
            />
          </div>

          <div>
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              id="weight"
              type="number"
              value={form.weight}
              onChange={(e) => handleChange('weight', e.target.value)}
              placeholder="e.g. 72"
              required
            />
          </div>

          <div>
            <Label htmlFor="gender">Gender</Label>
             <Select name="gender" value={form.gender} onValueChange={(v) => handleSelectChange('gender', v)} required>
              <SelectTrigger id="gender"><SelectValue placeholder="Select gender" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="workoutPreference">Workout Preference</Label>
             <Select name="workoutPreference" value={form.workoutPreference} onValueChange={(v) => handleSelectChange('workoutPreference', v)} required>
              <SelectTrigger id="workoutPreference"><SelectValue placeholder="Choose preference" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="home">Home</SelectItem>
                <SelectItem value="gym">Gym</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="bio">Short bio (optional)</Label>
            <Textarea
              id="bio"
              value={form.bio}
              onChange={(e) => handleChange('bio', e.target.value)}
              placeholder="Tell us about your goals (e.g., 'gain muscle', 'run faster')"
              rows={3}
            />
          </div>

          <div className="md:col-span-2 flex items-center justify-between mt-2">
            <div className="text-sm text-muted-foreground">
              You can edit this later in settings.
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                variant="ghost"
                onClick={() => router.push('/dashboard')}
                disabled={loading}
              >
                Skip
              </Button>
              <Button type="submit" disabled={loading}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {loading ? 'Saving...' : 'Create Profile'}
              </Button>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
