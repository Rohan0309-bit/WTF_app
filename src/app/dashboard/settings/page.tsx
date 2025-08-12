
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { ThemeToggle } from '@/components/theme-toggle';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc, updateDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { Loader2, User as UserIcon, Palette, Languages, Star, MessageSquare, Shield, AppWindow, ChevronRight } from 'lucide-react';
import type { User } from 'firebase/auth';
import Link from 'next/link';

const settingsItems = [
    { id: 'profile', icon: UserIcon, title: 'Profile', description: 'Update your personal details.' },
    { id: 'appearance', icon: Palette, title: 'Appearance', description: 'Customize the look and feel.' },
    { id: 'language', icon: Languages, title: 'Language', description: 'Choose your preferred language.' },
];

const supportItems = [
    { id: 'rate', icon: Star, title: 'Rate Us', href: '#' },
    { id: 'feedback', icon: MessageSquare, title: 'Feedback', href: '#' },
    { id: 'privacy', icon: Shield, title: 'Privacy Policy', href: '#' },
    { id: 'more', icon: AppWindow, title: 'More Apps', href: '#' },
];


export default function SettingsPage() {
    const { toast } = useToast();
    const [user, setUser] = useState<User | null>(null);
    const [formData, setFormData] = useState({
        userType: 'general',
        name: '',
        age: '',
        gender: '',
        weight: '',
        height: '',
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                const userDocRef = doc(db, 'users', currentUser.uid);
                try {
                    const userDoc = await getDoc(userDocRef);
                    if (userDoc.exists()) {
                        setFormData(userDoc.data() as any);
                    } else {
                        setFormData(prev => ({ ...prev, name: currentUser.displayName || '', email: currentUser.email || ''}));
                    }
                } catch (error) {
                    console.error("Error fetching user document:", error);
                    toast({
                        variant: 'destructive',
                        title: 'Error',
                        description: 'Could not load your profile data. Please check your connection.',
                    });
                }
            } else {
                setUser(null);
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, [toast]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSelectChange = (name: string) => (value: string) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleRadioChange = (value: string) => {
        setFormData({ ...formData, userType: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) {
            toast({ variant: 'destructive', title: 'Error', description: 'You must be logged in.' });
            return;
        }
        setSaving(true);
        try {
            const userDocRef = doc(db, 'users', user.uid);
            await setDoc(userDocRef, { ...formData, updatedAt: serverTimestamp() }, { merge: true });
            toast({ title: 'Profile Updated!', description: 'Your profile has been successfully updated.' });
        } catch (error) {
            console.error("Failed to update profile", error);
            toast({ variant: 'destructive', title: 'Error', description: 'Failed to update your profile.' });
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold font-headline">Settings</h1>
                <p className="text-muted-foreground">Manage your application preferences and profile.</p>
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Profile Information</CardTitle>
                    <CardDescription>Update your personal details.</CardDescription>
                </CardHeader>
                <CardContent>
                    {loading ? (
                        <div className="flex justify-center items-center h-40">
                            <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label>User Type</Label>
                                <RadioGroup value={formData.userType} onValueChange={handleRadioChange} className="flex gap-4">
                                    <div className="flex items-center space-x-2"><RadioGroupItem value="athlete" id="r-athlete" /><Label htmlFor="r-athlete">Athlete</Label></div>
                                    <div className="flex items-center space-x-2"><RadioGroupItem value="general" id="r-general" /><Label htmlFor="r-general">General User</Label></div>
                                </RadioGroup>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2"><Label htmlFor="name">Full Name</Label><Input id="name" name="name" value={formData.name} onChange={handleChange} required /></div>
                                <div className="space-y-2"><Label htmlFor="age">Age</Label><Input id="age" name="age" type="number" value={formData.age} onChange={handleChange} required /></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="gender">Gender</Label>
                                    <Select name="gender" value={formData.gender} onValueChange={handleSelectChange('gender')} required>
                                        <SelectTrigger id="gender"><SelectValue placeholder="Select gender" /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="male">Male</SelectItem>
                                            <SelectItem value="female">Female</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2"><Label htmlFor="weight">Weight (kg)</Label><Input id="weight" name="weight" type="number" value={formData.weight} onChange={handleChange} required /></div>
                                <div className="space-y-2"><Label htmlFor="height">Height (cm)</Label><Input id="height" name="height" type="number" value={formData.height} onChange={handleChange} required /></div>
                            </div>
                            <Button type="submit" className="w-full font-bold" disabled={saving}>
                                {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Save Changes
                            </Button>
                        </form>
                    )}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Appearance</CardTitle>
                    <CardDescription>Customize the look and feel of the app.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ThemeToggle />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Language</CardTitle>
                    <CardDescription>Choose your preferred language.</CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="max-w-xs">
                        <Select defaultValue="en">
                            <SelectTrigger>
                                <SelectValue placeholder="Select language" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="en">English</SelectItem>
                                <SelectItem value="es">Español (Coming Soon)</SelectItem>
                                <SelectItem value="fr">Français (Coming Soon)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Community & Support</CardTitle>
                    <CardDescription>Give feedback, read our policies, and explore more.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-1 p-0">
                    {supportItems.map(item => (
                        <Link href={item.href} key={item.id} target="_blank" rel="noopener noreferrer">
                            <div className="flex items-center p-4 hover:bg-secondary transition-colors rounded-lg">
                                <item.icon className="h-5 w-5 text-muted-foreground mr-4"/>
                                <span className="flex-1 font-medium">{item.title}</span>
                                <ChevronRight className="h-5 w-5 text-muted-foreground"/>
                            </div>
                        </Link>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}
