
'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function IntroPage() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    router.push('/login');
  };

  useEffect(() => {
    // Ensure the video plays on mount
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
        // Fallback for browsers that block autoplay
        router.push('/login');
      });
    }
  }, [router]);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-1/2 left-1/2 w-auto h-auto max-w-full max-h-full -translate-x-1/2 -translate-y-1/2 z-0 object-contain"
        muted
        playsInline
        onEnded={handleVideoEnd}
        autoPlay
      >
        <source src="https://github.com/Rohan0309-bit/intro-2/raw/refs/heads/main/WhatsApp%20Video%202025-07-13%20at%2022.49.00.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
