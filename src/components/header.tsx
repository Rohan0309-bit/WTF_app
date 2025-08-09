
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
import { User, Settings, LogOut, ArrowLeft } from 'lucide-react';

const pathToTitle: { [key: string]: string } = {
  '/dashboard': 'Dashboard',
  '/dashboard/athlete-workout-planner': 'AI Workout Planner',
  '/dashboard/general-workouts': 'General Workouts',
  '/dashboard/exercise-library': 'Exercise Library',
  '/dashboard/calculators': 'Health Calculators',
  '/dashboard/nutrition': 'Nutrition Plans',
  '/dashboard/posing-tutorials': 'Posing Tutorials',
  '/dashboard/progress': 'Progress Tracker',
};

export function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const getTitle = () => {
    for (const path in pathToTitle) {
      if (pathname.startsWith(path)) {
        return pathToTitle[path];
      }
    }
    return 'Well Trained Freak';
  }
  
  const title = getTitle();

  const showBackButton = pathname.split('/').length > 2;

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-card px-4 md:px-6">
      <SidebarTrigger className="md:hidden" />
      {showBackButton && (
        <Button variant="ghost" size="icon" onClick={() => router.back()} className="h-8 w-8">
          <ArrowLeft className="h-5 w-5" />
          <span className="sr-only">Back</span>
        </Button>
      )}
      <h1 className="text-lg font-semibold font-headline md:text-xl">
        {title}
      </h1>
      <div className="ml-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://placehold.co/100x100.png" alt="@user" data-ai-hint="user avatar" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Link href="/">
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
