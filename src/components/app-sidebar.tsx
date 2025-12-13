
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
  MoreVertical,
  Menu,
} from 'lucide-react';
import { Icons } from '@/components/icons';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
import Link from 'next/link';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { Sidebar, useSidebar, SidebarTrigger } from './ui/sidebar';
import { auth } from '@/lib/firebase';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useUser } from '@/firebase';

function SidebarNav() {
    const pathname = usePathname();
    const router = useRouter();
    const { user, isUserLoading } = useUser();

    const handleLogout = async () => {
      await auth.signOut();
      router.push('/login');
    };

    return (
        <div className="flex flex-col h-full p-4">
            <div className="flex items-center gap-3 px-2 mb-6 flex-shrink-0">
                <Link href="/dashboard" className="flex items-center gap-3">
                    <Icons.logo className="h-16 w-16" />
                    <div className="flex flex-col -space-y-1">
                        <div className="text-white font-extrabold text-lg">Well</div>
                        <div className="text-primary font-bold text-lg">Trained</div>
                        <div className="text-black font-bold text-lg">Freak</div>
                    </div>
                </Link>
            </div>

            <nav className="flex-1 space-y-2 overflow-y-auto">
            {menu.map((item) => {
                const isActive = pathname.startsWith(item.path) && (item.path === '/dashboard' ? pathname === item.path : true);
                const Icon = item.icon;
                return (
                <Tooltip key={item.path}>
                    <TooltipTrigger asChild>
                    <motion.button
                        onClick={() => router.push(item.path)}
                        initial={false}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className={cn(
                        "relative w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-300 overflow-hidden",
                        "bg-transparent hover:bg-secondary",
                        isActive ? "text-foreground" : "text-muted-foreground"
                        )}
                    >
                        <span
                        className={cn(
                            "absolute left-0 top-0 bottom-0 w-1 rounded-r-full transition-all duration-500",
                            isActive ? "bg-gradient-to-b from-primary via-accent to-yellow-300" : "opacity-0"
                        )}
                        aria-hidden
                        />
                         <motion.span
                            className={cn(
                                "absolute inset-0 rounded-lg pointer-events-none",
                                isActive ? "shadow-glow-active" : ""
                            )}
                            initial={{boxShadow: 'none'}}
                            animate={{boxShadow: isActive ? '0 0 12px hsl(var(--primary-glow))' : 'none'}}
                            transition={{duration: 0.3}}
                            aria-hidden
                        />
                        <span
                        className={cn(
                            "relative z-10 flex items-center justify-center w-8 h-8 rounded-md transition-transform duration-300",
                            isActive ? "bg-gradient-to-br from-primary to-accent shadow-glow" : "bg-card"
                        )}
                        >
                        <Icon
                            className={cn(
                            "w-5 h-5 transition-transform duration-300",
                            isActive ? "text-primary-foreground" : "text-foreground"
                            )}
                        />
                        </span>
                        <span className="relative z-10 text-left text-sm font-medium">
                        {item.name}
                        </span>
                    </motion.button>
                    </TooltipTrigger>
                    <TooltipContent side="right" align="center">
                    {item.name}
                    </TooltipContent>
                </Tooltip>
                );
            })}
            </nav>
             <div className="mt-6 px-2 space-y-2 flex-shrink-0 border-t border-border pt-4">
                <Link href="/dashboard/settings">
                    <div className="flex items-center gap-3">
                         <Avatar className="h-10 w-10">
                            <AvatarImage src={user?.photoURL || undefined} />
                            <AvatarFallback>{user?.displayName?.[0]}</AvatarFallback>
                        </Avatar>
                        <div className="text-sm">
                            <p className="font-semibold">{user?.displayName || 'User'}</p>
                            <p className="text-xs text-muted-foreground">{user?.email}</p>
                        </div>
                    </div>
                </Link>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="/dashboard/settings"><Settings className="w-5 h-5 text-muted-foreground" /></Link>
                    </Button>
                     <Button variant="ghost" size="icon" onClick={handleLogout}>
                        <LogOut className="w-5 h-5 text-muted-foreground" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

const menu = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'My Customized Plans', icon: ListPlus, path: '/dashboard/my-plans'},
  { name: 'Workouts', icon: Dumbbell, path: '/dashboard/general-workouts' },
  { name: 'Exercise Library', icon: BookOpen, path: '/dashboard/exercise-library' },
  { name: 'Calculators', icon: Calculator, path: '/dashboard/calculators' },
  { name: 'Nutrition', icon: UtensilsCrossed, path: '/dashboard/nutrition' },
  { name: 'Posing', icon: PersonStanding, path: '/dashboard/posing-tutorials' },
  { name: 'Progress', icon: TrendingUp, path: '/dashboard/progress' },
];

export function AppSidebar() {
  const { isMobile, openMobile, setOpenMobile } = useSidebar();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
        <aside className="w-72 h-screen bg-card border-r border-border/60 hidden md:flex flex-col p-4">
             <div className="flex items-center gap-3 px-2 mb-6 flex-shrink-0">
                <Icons.logo className="h-16 w-16" />
            </div>
        </aside>
    );
  }
  
  if (isMobile) {
    return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile}>
            <SheetContent side="left" className="w-72 bg-card p-0 flex flex-col">
                <SidebarNav />
            </SheetContent>
        </Sheet>
    )
  }

  return (
    <TooltipProvider>
      <Sidebar>
        <SidebarNav />
      </Sidebar>
    </TooltipProvider>
  );
}
