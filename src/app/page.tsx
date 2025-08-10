
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
        className="absolute top-1/2 left-1/2 w-auto h-auto min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 z-0 object-cover"
        muted
        playsInline
        onEnded={handleVideoEnd}
      >
        <source src="https://i.imgur.com/8oNAX84.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
