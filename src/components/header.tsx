'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from './ui/button';
import { User, Settings, LogOut, ArrowLeft, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useSidebar } from './ui/sidebar';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

const pathToTitle: { [key: string]: string } = {
  '/dashboard': 'Dashboard',
  '/dashboard/ai-workout-planner': 'AI Workout Planner',
  '/dashboard/my-plans': 'My Plans',
  '/dashboard/my-plans/create': 'Create Custom Plan',
  '/dashboard/general-workouts': 'General Workouts',
  '/dashboard/exercise-library': 'Exercise Library',
  '/dashboard/calculators': 'Health Calculators',
  '/dashboard/nutrition': 'Nutrition Plans',
  '/dashboard/posing-tutorials': 'Posing Tutorials',
  '/dashboard/progress': 'Progress Tracker',
  '/dashboard/settings': 'Settings',
  '/dashboard/creator-profile': 'Meet the Creator',
};

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [user, setUser] = useState<any>(null);
  const { isMobile } = useSidebar();
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const getTitle = () => {
    for (const path in pathToTitle) {
      if (pathname.startsWith(path)) {
        if (path.includes('[id]')) {
            return 'Workout Session';
        }
        return pathToTitle[path];
      }
    }
     if (pathname.includes('/dashboard/my-plans/workout-session')) {
      return 'Workout Session';
    }
     if (pathname.includes('/dashboard/general-workouts/athlete')) {
      const parts = pathname.split('/');
      const sport = parts[parts.length - 1];
      if (sport !== 'athlete') {
        return sport.charAt(0).toUpperCase() + sport.slice(1) + ' Training';
      }
    }
    return 'Well Trained Freak';
  }
  
  const title = getTitle();

  const showBackButton = pathname.split('/').length > 3 && pathname !== '/dashboard';

  const handleLogout = async () => {
    await auth.signOut();
    router.push('/login');
  };

  return (
    <>
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-card/80 dark:bg-card/50 backdrop-blur-lg px-4 md:px-6">
        <div className="flex items-center gap-2">
          {isClient && (
            <SidebarTrigger>
              <Menu />
            </SidebarTrigger>
          )}
          {showBackButton && !isMobile && (
            <Button variant="ghost" size="icon" onClick={() => router.back()} className="h-8 w-8">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Button>
          )}
        </div>
        <h1 className="text-lg font-semibold font-headline md:text-xl">
          {title}
        </h1>
        <div className="ml-auto flex items-center gap-2">
          <Link href="/dashboard/settings" passHref>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={user?.photoURL || "https://placehold.co/100x100.png"} alt={user?.displayName || "User"} data-ai-hint="user avatar" />
                  <AvatarFallback>{user?.displayName?.charAt(0).toUpperCase() || 'U'}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href="/dashboard/settings">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>{user?.displayName || 'Profile'}</span>
                </DropdownMenuItem>
              </Link>
              <Link href="/dashboard/settings">
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setIsLogoutDialogOpen(true)}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <AlertDialog open={isLogoutDialogOpen} onOpenChange={setIsLogoutDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to log out?</AlertDialogTitle>
            <AlertDialogDescription>
              You will need to sign in again to access your workout plans and data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleLogout} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Log Out
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}