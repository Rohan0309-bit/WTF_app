
'use client';

// Workouts — Person lifting weights
export const IconWorkouts = ({
  size = 64,
  strokeWidth = 2,
  className = "",
  color = "currentColor",
}: { size?: number; strokeWidth?: number; className?: string; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Barbell */}
    <path d="M3 7v4M7 6v6M17 6v6M21 7v4" />
    <path d="M7 9h10" />
    {/* Lifter (overhead) */}
    <circle cx="12" cy="14.5" r="1.5" />
    <path d="M12 16v3m-3 3 3-3 3 3M9 18.5l-2-2m8 2 2-2" />
  </svg>
);

// Shot Training — Cricket bat hitting ball
export const IconShotTraining = ({
  size = 64, strokeWidth = 2, className = "", color = "currentColor",
}: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Bat */}
    <path d="M10.5 13.5 18 6a2 2 0 0 1 2.8 0v0a2 2 0 0 1 0 2.8l-7.5 7.5a3 3 0 0 1-2.1.9H9l-3 3-1.5-1.5 3-3v-2.2a3 3 0 0 1 .9-2.1Z" />
    {/* Ball */}
    <circle cx="6" cy="7" r="1.7" />
    {/* Motion lines */}
    <path d="M3 7h1.2M6 3.8V2.6M8.7 4.3l.9-.9" />
  </svg>
);


// Bowling Drills (alt) — Hand releasing ball
export const IconBowlingHand = ({
  size = 64, strokeWidth = 2, className = "", color = "currentColor",
}: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Hand outline */}
    <path d="M5 14c2.5-2 3.5-2.6 5-1.4 1 .7 2.2 1.9 3.3 1.9 1.6 0 2.7-1.4 3.9-2.8" />
    <path d="M6 18c2.2-1.2 3.4-1.8 5.5-1.8h1.2" />
    {/* Ball & release */}
    <circle cx="18.2" cy="6.2" r="2.2" />
    <path d="M20.8 8.8 22 10M16.2 3.6 15 2" />
  </svg>
);

// Fielding Drills — Glove catching ball
export const IconFieldingGlove = ({
  size = 64, strokeWidth = 2, className = "", color = "currentColor",
}: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Ball */}
    <circle cx="18.5" cy="6.5" r="2" />
    {/* Glove (mitten style) */}
    <path d="M8 4.5c1-1 2.6-.8 3.3.3l.9 1.4M12.2 6.2c.7-1 2.2-1.1 2.9 0l.7 1.1M8 8v0c-1.7 0-3 1.3-3 3v2.5c0 2 1.6 3.5 3.5 3.5h2.2c1 0 2-.4 2.7-1.1l2.6-2.6" />
    <path d="M6 12l2 1.2 1.4-1.4 1.6 1" />
  </svg>
);



// Wicketkeeping Drills (alt) — Stumps + small glove
export const IconStumpsGlove = ({
  size = 64, strokeWidth = 2, className = "", color = "currentColor",
}: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Stumps & bails */}
    <path d="M6 5v12M12 5v12M18 5v12" />
    <path d="M7.5 5h3M13.5 5h3" />
    {/* Small glove at leg-side */}
    <path d="M19.8 14.2c.6.6.6 1.6 0 2.2l-1.1 1.1c-.4.4-1 .7-1.6.7H15.8" />
    <path d="M17.8 13v2.4" />
  </svg>
);
