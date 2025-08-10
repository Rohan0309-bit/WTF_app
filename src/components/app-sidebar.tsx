
'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Sparkles,
  Dumbbell,
  BookOpen,
  Calculator,
  UtensilsCrossed,
  PersonStanding,
  TrendingUp,
  Settings,
  LogOut,
  ListPlus,
} from 'lucide-react';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '@/components/ui/tooltip';
import { Icons } from './icons';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet';
import { useSidebar } from './ui/sidebar';

const menu = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'AI Planner', icon: Sparkles, path: '/dashboard/athlete-workout-planner' },
  { name: 'My Plans', icon: ListPlus, path: '/dashboard/my-plans'},
  { name: 'Workouts', icon: Dumbbell, path: '/dashboard/general-workouts' },
  { name: 'Exercise Library', icon: BookOpen, path: '/dashboard/exercise-library' },
  { name: 'Calculators', icon: Calculator, path: '/dashboard/calculators' },
  { name: 'Nutrition', icon: UtensilsCrossed, path: '/dashboard/nutrition' },
  { name: 'Posing', icon: PersonStanding, path: '/dashboard/posing-tutorials' },
  { name: 'Progress', icon: TrendingUp, path: '/dashboard/progress' },
];

function SidebarNav() {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center gap-3 px-2 mb-6 flex-shrink-0">
                <Link href="/dashboard" className="flex items-center gap-3">
                    <Icons.logo className="h-12 w-12 text-primary" />
                    <div>
                    <div className="text-primary font-extrabold">Well</div>
                    <div className="text-foreground font-bold">Trained Freak</div>
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
                            isActive ? "bg-gradient-to-b from-primary via-orange-400 to-yellow-300" : "opacity-0"
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
                            "relative z-10 flex items-center justify-center w-10 h-10 rounded-md transition-transform duration-300",
                            isActive ? "bg-gradient-to-br from-primary to-orange-400 shadow-glow" : "bg-background"
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
             <div className="mt-6 px-2 space-y-2 flex-shrink-0">
                <Link href="/dashboard/settings">
                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-secondary/50 hover:bg-secondary transition"
                    >
                        <Settings className="w-5 h-5 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Settings</span>
                    </motion.button>
                </Link>
                <Link href="/login">
                    <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="w-full px-3 py-2 rounded-md text-sm flex items-center justify-center bg-secondary/50 hover:bg-secondary transition"
                    >
                    <LogOut className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span className="text-muted-foreground">Logout</span>
                    </motion.button>
                </Link>
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

  if (!isClient) {
    return (
        <aside className="w-72 h-screen bg-card border-r border-border/60 hidden md:flex flex-col p-4">
             <div className="flex items-center gap-3 px-2 mb-6 flex-shrink-0">
                <Icons.logo className="h-12 w-12 text-primary" />
            </div>
        </aside>
    );
  }
  
  if (isMobile) {
    return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile}>
            <SheetContent side="left" className="w-72 bg-card p-4 flex flex-col">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SidebarNav />
            </SheetContent>
        </Sheet>
    )
  }

  return (
    <TooltipProvider>
      <aside className="w-72 h-screen bg-card border-r border-border/60 hidden md:flex flex-col p-4">
        <SidebarNav />
      </aside>
    </TooltipProvider>
  );
}
