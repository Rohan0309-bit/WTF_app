'use client';

import { AppSidebar } from '@/components/app-sidebar';
import { Header } from '@/components/header';
import { SidebarProvider } from '@/components/ui/sidebar';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { useUser } from '@/firebase';
import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const pathname = usePathname();
    const { user, isUserLoading } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!isUserLoading && !user) {
            router.push('/login');
        }
    }, [isUserLoading, user, router]);

    if (isUserLoading || !user) {
        return (
            <div className="flex items-center justify-center h-screen w-screen bg-background">
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="h-12 w-12 animate-spin text-primary" />
                    <p className="text-muted-foreground animate-pulse font-headline">Entering Freak Mode...</p>
                </div>
            </div>
        );
    }

  return (
    <SidebarProvider>
      <div 
        className="h-screen w-full bg-background text-foreground flex bg-cover bg-center bg-no-repeat transition-all duration-500"
        style={{ backgroundImage: "url('https://i.ibb.co/LDk90Fzv/Whats-App-Image-2025-12-11-at-20-26-00.jpg')" }}
      >
        <div className="h-screen w-full flex bg-background/60 dark:bg-black/60 backdrop-blur-md">
          <AppSidebar />
          <div className="flex flex-col flex-1 h-screen relative overflow-hidden">
            <Header />
            <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
              <AnimatePresence mode="wait">
                  <motion.div
                      key={pathname}
                      initial={{ opacity: 0, y: 15, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -15, scale: 0.98 }}
                      transition={{ 
                        duration: 0.3, 
                        ease: [0.23, 1, 0.32, 1] 
                      }}
                      className="h-full"
                  >
                  {children}
                  </motion.div>
              </AnimatePresence>
            </main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
