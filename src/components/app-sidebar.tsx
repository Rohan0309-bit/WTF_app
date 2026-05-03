'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Dumbbell,
  BookOpen,
  Calculator,
  UtensilsCrossed,
  PersonStanding,
  TrendingUp,
  Settings,
  LogOut,
  ListPlus,
  Sparkles,
  BrainCircuit,
} from 'lucide-react';
import { Icons } from '@/components/icons';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
import Link from 'next/link';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { Sidebar, useSidebar } from './ui/sidebar';
import { auth } from '@/lib/firebase';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useUser } from '@/firebase';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

const menu = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'AI Workout Planner', icon: Sparkles, path: '/dashboard/ai-workout-planner'},
  { name: 'General Workouts', icon: Dumbbell, path: '/dashboard/general-workouts' },
  { name: 'My Customized Plans', icon: ListPlus, path: '/dashboard/my-plans'},
  { name: 'Exercise Library', icon: BookOpen, path: '/dashboard/exercise-library' },
  { name: 'Mind & Focus', icon: BrainCircuit, path: '/dashboard/mind-focus-training' },
  { name: 'Posing', icon: PersonStanding, path: '/dashboard/posing-tutorials' },
  { name: 'Nutrition', icon: UtensilsCrossed, path: '/dashboard/nutrition' },
  { name: 'Calculators', icon: Calculator, path: '/dashboard/calculators' },
  { name: 'Progress', icon: TrendingUp, path: '/dashboard/progress' },
  { name: 'Settings', icon: Settings, path: '/dashboard/settings'},
];

function SidebarNav() {
    const pathname = usePathname();
    const router = useRouter();
    const { user } = useUser();

    const handleLogout = async () => {
      await auth.signOut();
      router.push('/login');
    };

    return (
        <div className="flex flex-col h-full p-4">
            <div className="flex items-center gap-3 px-2 mb-8 flex-shrink-0">
                <Link href="/dashboard" className="flex items-center gap-3">
                    <Icons.logo className="h-14 w-14 drop-shadow-glow" />
                    <div className="flex flex-col -space-y-1">
                        <div className="text-white font-extrabold text-lg leading-none tracking-tighter">WELL</div>
                        <div className="text-primary font-bold text-lg leading-none tracking-tighter">TRAINED</div>
                        <div className="text-muted-foreground/60 font-bold text-xs tracking-[0.2em] pt-1">FREAK</div>
                    </div>
                </Link>
            </div>

            <nav className="flex-1 space-y-1 overflow-y-auto custom-scrollbar pr-1">
            {menu.map((item) => {
                const isActive = pathname.startsWith(item.path) && (item.path === '/dashboard' ? pathname === item.path : true);
                const Icon = item.icon;
                return (
                <Tooltip key={item.path}>
                    <TooltipTrigger asChild>
                    <motion.button
                        onClick={() => router.push(item.path)}
                        initial={false}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className={cn(
                        "relative w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group",
                        isActive ? "bg-primary/10 text-foreground" : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                        )}
                    >
                        <span
                        className={cn(
                            "absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-primary transition-all duration-300",
                            isActive ? "opacity-100" : "opacity-0"
                        )}
                        />
                        <div
                        className={cn(
                            "flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-300 group-hover:shadow-glow",
                            isActive ? "bg-primary text-primary-foreground shadow-glow" : "bg-secondary text-muted-foreground"
                        )}
                        >
                        <Icon className="w-5 h-5" />
                        </div>
                        <span className={cn(
                          "text-sm font-semibold tracking-tight transition-colors",
                          isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                        )}>
                        {item.name}
                        </span>
                    </motion.button>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                    {item.name}
                    </TooltipContent>
                </Tooltip>
                );
            })}
            </nav>
             <div className="mt-6 px-2 space-y-4 flex-shrink-0 border-t border-border/40 pt-6">
                <Link href="/dashboard/settings" className="group">
                    <div className="flex items-center gap-3 p-2 rounded-xl transition-colors hover:bg-secondary/50">
                         <div className="relative">
                            <Avatar className="h-10 w-10 border-2 border-transparent group-hover:border-primary transition-all">
                                <AvatarImage src={user?.photoURL || undefined} />
                                <AvatarFallback className="bg-primary text-primary-foreground">{user?.displayName?.[0]}</AvatarFallback>
                            </Avatar>
                            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-primary border-2 border-card rounded-full" />
                         </div>
                        <div className="text-sm">
                            <p className="font-bold truncate max-w-[120px]">{user?.displayName || 'Freak'}</p>
                            <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Athlete</p>
                        </div>
                    </div>
                </Link>
                <div className="flex items-center justify-around gap-2 px-2">
                    <Button variant="ghost" size="icon" asChild className="hover:text-primary transition-colors">
                        <Link href="/dashboard/settings"><Settings className="w-5 h-5" /></Link>
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="ghost" size="icon" className="hover:text-destructive transition-colors">
                          <LogOut className="w-5 h-5" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="bg-card/90 backdrop-blur-xl border-border/40">
                        <AlertDialogHeader>
                          <AlertDialogTitle className="font-headline text-2xl">Confirm Exit</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to log out of your session? Your workout data is safe.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel className="bg-secondary">Stay Training</AlertDialogCancel>
                          <AlertDialogAction onClick={handleLogout} className="bg-primary text-white hover:bg-primary/90">
                            Log Out
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                </div>
            </div>
        </div>
    )
}

export function AppSidebar() {
  const { isMobile, openMobile, setOpenMobile } = useSidebar();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  
  if (isMobile) {
    return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile}>
            <SheetContent side="left" className="w-72 bg-card/95 backdrop-blur-xl p-0 flex flex-col border-r-primary/10">
                <SidebarNav />
            </SheetContent>
        </Sheet>
    )
  }

  return (
    <Sidebar className="bg-card/40 border-r-border/20">
      <SidebarNav />
    </Sidebar>
  );
}
