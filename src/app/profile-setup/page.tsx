'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { auth, db } from '@/lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function ProfileSetupPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    userType: 'general',
    name: '',
    age: '',
    gender: '',
    weight: '',
    height: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSelectChange = (name: string) => (value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = (value: string) => {
     setFormData({ ...formData, userType: value });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) {
        toast({
            variant: 'destructive',
            title: 'Error',
            description: 'You must be logged in to set up a profile.',
        });
        router.push('/login');
        return;
    }

    try {
        await setDoc(doc(db, "users", user.uid), {
            ...formData,
            email: user.email,
            uid: user.uid,
            createdAt: new Date(),
        });
        toast({
            title: 'Profile Saved!',
            description: 'Your profile has been successfully saved.',
        });
        router.push("/dashboard");
    } catch(error) {
         console.error("Failed to save profile", error);
         toast({
            variant: 'destructive',
            title: 'Error',
            description: 'Failed to save your profile. Please try again.',
        });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-lg shadow-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-headline">Complete Your Profile</CardTitle>
          <CardDescription>This helps us tailor your experience. Let's get you set up.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label>Are you an Athlete or a General User?</Label>
              <RadioGroup value={formData.userType} onValueChange={handleRadioChange} className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="athlete" id="r-athlete" />
                  <Label htmlFor="r-athlete">Athlete</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="general" id="r-general" />
                  <Label htmlFor="r-general">General User</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input id="age" name="age" type="number" placeholder="25" value={formData.age} onChange={handleChange} required />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                 <Select name="gender" value={formData.gender} onValueChange={handleSelectChange('gender')} required>
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input id="weight" name="weight" type="number" placeholder="70" value={formData.weight} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="height">Height (cm)</Label>
                <Input id="height" name="height" type="number" placeholder="180" value={formData.height} onChange={handleChange} required />
              </div>
            </div>
            <Button type="submit" className="w-full font-bold">
              Save and Continue
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
