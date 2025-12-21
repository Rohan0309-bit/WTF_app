
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
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { Loader2, User as UserIcon, Palette, Languages, Star, MessageSquare, Shield, AppWindow, ChevronRight, Check, Smile, Headset } from 'lucide-react';
import type { User } from 'firebase/auth';
import { updateProfile } from 'firebase/auth';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { maleAvatars, femaleAvatars } from '@/lib/avatars';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError, type SecurityRuleContext } from '@/firebase/errors';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { CreatorProfile } from '@/components/creator-profile';


const supportEmail = 'wtfapp369@gmail.com';
const supportSubject = 'WTF App Support';
const mailtoHref = `mailto:${supportEmail}?subject=${encodeURIComponent(supportSubject)}`;

const supportItems = [
    { id: 'rate', icon: Star, title: 'Rate Us', href: '#' },
    { id: 'feedback', icon: MessageSquare, title: 'Feedback', href: mailtoHref },
    { id: 'contact', icon: Headset, title: 'Contact Support', href: mailtoHref },
    { id: 'privacy', icon: Shield, title: 'Privacy Policy', href: '#' },
    { id: 'more', icon: AppWindow, title: 'More Apps', href: '#' },
];

type FormData = {
    userType: string;
    name: string;
    age: string;
    gender: string;
    weight: string;
    height: string;
    avatarUrl: string;
}

export default function SettingsPage() {
    const { toast } = useToast();
    const [user, setUser] = useState<User | null>(auth.currentUser);
    const [formData, setFormData] = useState<FormData>({
        userType: 'general',
        name: '',
        age: '',
        gender: '',
        weight: '',
        height: '',
        avatarUrl: '',
    });
    const [initialData, setInitialData] = useState<FormData | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(false);
    const [selectedSection, setSelectedSection] = useState<'profile' | 'creator' | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
            if (currentUser) {
                setUser(currentUser); // Keep user object in sync
                const userDocRef = doc(db, 'users', currentUser.uid);
                try {
                    const userDoc = await getDoc(userDocRef);
                    if (userDoc.exists()) {
                        const data = userDoc.data();
                        const profileData = {
                           userType: data.userType || 'general',
                           name: data.name || currentUser.displayName || '',
                           age: data.age?.toString() || '',
                           gender: data.gender || '',
                           weight: data.weight?.toString() || '',
                           height: data.height?.toString() || '',
                           avatarUrl: data.avatarUrl || currentUser.photoURL || '',
                        }
                        setFormData(profileData);
                        setInitialData(profileData);
                    } else {
                        const initial = {
                            userType: 'general',
                            name: currentUser.displayName || '',
                            age: '',
                            gender: '',
                            weight: '',
                            height: '',
                            avatarUrl: currentUser.photoURL || '',
                        };
                        setFormData(initial);
                        setInitialData(initial);
                    }
                } catch (error) {
                    console.error("Error fetching user document:", error);
                     if ((error as any).code?.includes('offline')) {
                        console.warn('Client is offline, using cached/default data.');
                    } else {
                        toast({
                            variant: 'destructive',
                            title: 'Error',
                            description: 'Could not load your profile data. Please check your connection.',
                        });
                    }
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
        if (!user || saving) {
            return;
        }

        setSaving(true);
        const userDocRef = doc(db, 'users', user.uid);
        
        const dataToSave = {
          uid: user.uid,
          email: user.email,
          ...formData,
          age: Number(formData.age) || null,
          weight: Number(formData.weight) || null,
          height: Number(formData.height) || null,
          updatedAt: serverTimestamp(),
        };

        try {
            if (user.photoURL !== formData.avatarUrl || user.displayName !== formData.name) {
                await updateProfile(user, { 
                    displayName: formData.name,
                    photoURL: formData.avatarUrl 
                });
            }
            
            await setDoc(userDocRef, dataToSave, { merge: true });
            
            setInitialData(formData);
            setSaveSuccess(true);
            toast({ title: 'Profile Saved!', description: 'Your changes have been saved successfully.' });
            setTimeout(() => setSaveSuccess(false), 2000);

        } catch (serverError: any) {
            const context: SecurityRuleContext = {
                path: userDocRef.path,
                operation: 'write',
                requestResourceData: dataToSave,
            };
            const permissionError = new FirestorePermissionError(context);
            errorEmitter.emit('permission-error', permissionError);

            toast({
                variant: 'destructive',
                title: 'Save Failed',
                description: 'Could not save your profile. Check permissions or network.',
            });
            console.error(permissionError);
        } finally {
            setSaving(false);
        }
    };
    
    const avatarList = formData.gender === 'male' ? maleAvatars : formData.gender === 'female' ? femaleAvatars : [];


    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold font-headline">Settings</h1>
                <p className="text-muted-foreground">Manage your application preferences and profile.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">General</CardTitle>
                </CardHeader>
                <CardContent className="space-y-1 p-0">
                    <div className="flex items-center p-4 hover:bg-secondary transition-colors rounded-lg cursor-pointer" onClick={() => setSelectedSection(selectedSection === 'profile' ? null : 'profile')}>
                        <UserIcon className="h-5 w-5 text-muted-foreground mr-4"/>
                        <div className="flex-1">
                            <span className="font-medium">Profile</span>
                            <p className="text-sm text-muted-foreground">Update your personal details.</p>
                        </div>
                        <ChevronRight className={cn("h-5 w-5 text-muted-foreground transition-transform", selectedSection === 'profile' && 'rotate-90')}/>
                    </div>
                     {selectedSection === 'profile' && (
                        <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="overflow-hidden"
                        >
                            <div className="p-4 pt-0">
                            {loading ? (
                                <div className="flex justify-center items-center h-40">
                                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6 pt-4 border-t">
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

                                    {avatarList.length > 0 && (
                                        <div className="space-y-2">
                                            <Label>Choose Your Avatar</Label>
                                            <div className="flex flex-wrap gap-2">
                                                {avatarList.map((avatar) => (
                                                <div
                                                    key={avatar}
                                                    onClick={() => setFormData({ ...formData, avatarUrl: avatar })}
                                                    className={cn(
                                                    'rounded-full cursor-pointer transition-all duration-200 p-1',
                                                    formData.avatarUrl === avatar ? 'bg-primary' : 'bg-transparent'
                                                    )}
                                                >
                                                    <Avatar className="h-16 w-16">
                                                    <AvatarImage src={avatar} alt="Avatar" />
                                                    <AvatarFallback>AV</AvatarFallback>
                                                    </Avatar>
                                                </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <Button type="submit" className="w-full font-bold" disabled={saving || saveSuccess}>
                                        {saving ? (
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        ) : saveSuccess ? (
                                            <Check className="mr-2 h-4 w-4" />
                                        ) : null}
                                        {saving ? 'Saving...' : saveSuccess ? 'Saved!' : 'Save Changes'}
                                    </Button>
                                </form>
                            )}
                            </div>
                        </motion.div>
                    )}

                    <div className="flex items-center p-4">
                        <Palette className="h-5 w-5 text-muted-foreground mr-4"/>
                        <div className="flex-1">
                            <span className="font-medium">Appearance</span>
                            <p className="text-sm text-muted-foreground">Customize the look and feel.</p>
                        </div>
                        <ThemeToggle/>
                    </div>

                    <div className="flex items-center p-4">
                        <Languages className="h-5 w-5 text-muted-foreground mr-4"/>
                         <div className="flex-1">
                            <span className="font-medium">Language</span>
                            <p className="text-sm text-muted-foreground">Choose your preferred language.</p>
                        </div>
                         <div className="max-w-xs">
                            <Select defaultValue="en">
                                <SelectTrigger>
                                    <SelectValue placeholder="Select language" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="en">English</SelectItem>
                                    <SelectItem value="es" disabled>Español (Coming Soon)</SelectItem>
                                    <SelectItem value="fr" disabled>Français (Coming Soon)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Community & Support</CardTitle>
                    <CardDescription>Give feedback, read our policies, and explore more.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-1 p-0">
                    <div className="flex items-center p-4 hover:bg-secondary transition-colors rounded-lg cursor-pointer" onClick={() => setSelectedSection(selectedSection === 'creator' ? null : 'creator')}>
                        <Smile className="h-5 w-5 text-muted-foreground mr-4"/>
                        <div className="flex-1">
                            <span className="font-medium">Meet the Creator</span>
                        </div>
                        <ChevronRight className={cn("h-5 w-5 text-muted-foreground transition-transform", selectedSection === 'creator' && 'rotate-90')}/>
                    </div>

                    {selectedSection === 'creator' && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="overflow-hidden"
                        >
                            <div className="p-4 pt-0 border-t">
                                <CreatorProfile />
                            </div>
                        </motion.div>
                    )}

                    {supportItems.map(item => (
                        <Link 
                            href={item.href} 
                            key={item.id} 
                            target={item.href.startsWith('mailto') ? '_self' : '_blank'} 
                            rel="noopener noreferrer"
                            className="flex items-center p-4 hover:bg-secondary transition-colors rounded-lg cursor-pointer"
                        >
                            <item.icon className="h-5 w-5 text-muted-foreground mr-4"/>
                            <span className="flex-1 font-medium">{item.title}</span>
                            <ChevronRight className="h-5 w-5 text-muted-foreground"/>
                        </Link>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}
