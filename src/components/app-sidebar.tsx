
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import {
  LayoutDashboard,
  Dumbbell,
  Calculator,
  UtensilsCrossed,
  PersonStanding,
  TrendingUp,
  Sparkles,
  Settings,
  LogOut,
} from 'lucide-react';
import { Icons } from './icons';
import { Button } from './ui/button';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/athlete-workout-planner', label: 'AI Planner', icon: Sparkles },
  { href: '/dashboard/general-workouts', label: 'Workouts', icon: Dumbbell },
  { href: '/dashboard/calculators', label: 'Calculators', icon: Calculator },
  { href: '/dashboard/nutrition', label: 'Nutrition', icon: UtensilsCrossed },
  { href: '/dashboard/posing-tutorials', label: 'Posing', icon: PersonStanding },
  { href: '/dashboard/progress', label: 'Progress', icon: TrendingUp },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Icons.logo className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold font-headline text-primary group-data-[collapsible=icon]:hidden">
            WTF
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href}>
                <SidebarMenuButton
                  isActive={pathname === item.href}
                  tooltip={item.label}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
             <SidebarMenuButton tooltip="Settings">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
           <SidebarMenuItem>
             <Link href="/">
                <SidebarMenuButton tooltip="Logout">
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                </SidebarMenuButton>
             </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
