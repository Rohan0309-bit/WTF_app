
'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

export function MeditationTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = useCallback(() => {
    setSeconds(0);
    setIsActive(false);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, seconds]);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div 
        className={cn(
          "text-5xl font-mono font-bold transition-colors",
          isActive ? "text-primary" : "text-foreground"
        )}
      >
        {formatTime(seconds)}
      </div>
      <div className="flex gap-4">
        <Button onClick={toggle} size="lg" className="w-24">
          {isActive ? <Pause /> : <Play />}
        </Button>
        <Button onClick={reset} variant="outline" size="lg">
          <RefreshCw />
        </Button>
      </div>
    </div>
  );
}
