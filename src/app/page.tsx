'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/firebase';
import { Button } from '@/components/ui/button';
import { ChevronRight, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroPage() {
  const router = useRouter();
  const { user, isUserLoading } = useUser();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleSkip = () => {
    router.push('/login');
  };

  useEffect(() => {
    // If user is already logged in, skip intro entirely
    if (!isUserLoading && user) {
      router.push('/dashboard');
    }
  }, [user, isUserLoading, router]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(error => {
        console.warn("Video autoplay blocked or failed, skipping intro.", error);
        router.push('/login');
      });
    }
  }, [router]);

  // Show a simple loader while checking auth state
  if (isUserLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-1/2 left-1/2 w-auto h-auto max-w-full max-h-full -translate-x-1/2 -translate-y-1/2 z-0 object-contain"
        muted
        playsInline
        onEnded={handleSkip}
        onLoadedData={() => setIsVideoLoaded(true)}
        autoPlay
      >
        <source src="https://github.com/Rohan0309-bit/intro-2/raw/refs/heads/main/WhatsApp%20Video%202025-07-13%20at%2022.49.00.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Skip Button */}
      <AnimatePresence>
        {isVideoLoaded && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute bottom-10 right-10 z-10"
          >
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/10 group bg-black/20 backdrop-blur-md rounded-full px-6 py-6 border border-white/20"
              onClick={handleSkip}
            >
              Skip Intro
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Initial Loading State for Video */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
           <Loader2 className="h-10 w-10 animate-spin text-primary/50" />
        </div>
      )}
    </div>
  );
}
