
export interface BasketballDrill {
    name: string;
    youtubeUrl: string;
    image: string;
    hint: string;
    steps: string[];
    commonMistakes: string[];
    injuryPrevention: string[];
}

export const basketballSubCategories: Record<string, { name: string; youtubeUrl: string; image: string; hint: string; steps: string[]; commonMistakes: string[]; injuryPrevention: string[] }[]> = {
  "dribbling-ball-handling": [
    {
        name: "Cone Dribble (crossover, between legs, behind back)",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=26",
        hint: "basketball cone dribble",
        steps: [
            "Set up a line of cones.",
            "Dribble through the cones performing crossovers, between the legs, and behind the back moves.",
            "Stay low and keep your eyes up.",
            "Focus on ball control and quick changes of direction."
        ],
        commonMistakes: [
            "Losing control of the ball.",
            "Looking down at the ball.",
            "Standing up too straight."
        ],
        injuryPrevention: [
            "Warm up wrists and ankles.",
            "Wear proper basketball shoes for ankle support.",
        ]
    },
    {
        name: "Two-ball Dribbling Drill",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=27",
        hint: "basketball two ball dribble",
        steps: [
            "Dribble two basketballs simultaneously.",
            "Practice synchronous (same time) and asynchronous (alternating) dribbles.",
            "Try different dribble moves like crossovers with both balls.",
            "Improves hand-eye coordination and ambidexterity."
        ],
        commonMistakes: [
            "Losing control of one or both balls.",
            "Dribbling the balls at different heights.",
            "Focusing too much on one hand.",
        ],
        injuryPrevention: [
            "Strengthen forearm and finger muscles.",
            "Start with basic dribbles before attempting complex moves.",
        ]
    },
    {
        name: "Speed Dribble Full Court",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=28",
        hint: "basketball speed dribble",
        steps: [
            "Dribble the ball up the court at full speed.",
            "Focus on pushing the ball ahead of you.",
            "Alternate hands and practice finishing with a layup at the end.",
        ],
        commonMistakes: [
            "Pushing the ball too far ahead.",
            "Losing control at high speeds.",
            "Slowing down to perform the layup."
        ],
        injuryPrevention: [
            "Ensure court is clear of obstacles.",
            "Proper warm-up to prevent hamstring or groin pulls.",
        ]
    },
  ],
  "shooting-scoring": [
    {
        name: "Spot Shooting from 5 Positions",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=29",
        hint: "basketball spot shooting",
        steps: [
            "Choose 5 spots on the court (e.g., baseline, wing, top of key, other wing, other baseline).",
            "Take a set number of shots from each spot (e.g., 10 shots).",
            "Focus on consistent form: balanced base, elbow in, follow through.",
            "Track your makes to monitor progress."
        ],
        commonMistakes: [
            "Inconsistent shooting form.",
            "Not holding the follow-through.",
            "Leaning back or sideways on the shot.",
        ],
        injuryPrevention: [
            "Warm up shooting arm and wrist.",
            "Focus on proper mechanics to avoid developing bad habits that can lead to strain.",
        ]
    },
    {
        name: "Free Throw Routine Drill",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=30",
        hint: "basketball free throw",
        steps: [
            "Develop a consistent pre-shot routine (e.g., number of dribbles, spin of the ball).",
            "Focus on balance, bending your knees, and a smooth release.",
            "Hold your follow-through until the ball hits the rim.",
            "Practice shooting when tired to simulate game conditions."
        ],
        commonMistakes: [
            "Rushing the shot.",
            "Inconsistent routine.",
            "Not using your legs for power.",
        ],
        injuryPrevention: [
            "Repetitive motion, so ensure good form to prevent wrist or elbow issues.",
        ]
    },
    {
        name: "Layup Lines (both hands)",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=31",
        hint: "basketball layup",
        steps: [
            "Practice layups from both the right and left sides of the basket.",
            "Focus on using your right hand on the right side and left hand on the left side.",
            "Jump off the correct foot (jump off left foot for a right-handed layup).",
            "Aim for the top corner of the square on the backboard."
        ],
        commonMistakes: [
            "Traveling (taking too many steps).",
            "Using the wrong hand or foot.",
            "Throwing the ball at the rim instead of laying it softly off the glass.",
        ],
        injuryPrevention: [
            "Practice controlled approaches to avoid collisions with the basket support.",
            "Ensure proper landing to protect ankles and knees.",
        ]
    },
  ],
  "passing-team-play": [
    {
        name: "Chest Pass & Bounce Pass Wall Drill",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=32",
        hint: "basketball wall pass",
        steps: [
            "Stand facing a wall and practice chest passes, focusing on power and accuracy.",
            "Practice bounce passes, aiming for a spot on the floor that allows the ball to bounce to chest level.",
            "Step into each pass to generate power.",
        ],
        commonMistakes: [
            "Looping passes with too much arc.",
            "Not stepping into the pass.",
            "Weak passes that are easily intercepted.",
        ],
        injuryPrevention: [
            "Warm up wrists and shoulders.",
        ]
    },
  ],
  "defense-rebounding": [
     {
        name: "Defensive Slide Drill",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=33",
        hint: "basketball defensive slide",
        steps: [
            "Get into a low defensive stance (knees bent, back straight, hands up).",
            "Slide laterally without crossing your feet.",
            "Stay low and on the balls of your feet.",
            "Practice sliding the length of the free-throw line and back."
        ],
        commonMistakes: [
            "Standing up straight.",
            "Crossing feet, leading to getting off-balance.",
            "Being flat-footed.",
        ],
        injuryPrevention: [
            "Strengthen hip and groin muscles.",
            "Warm up thoroughly to prevent strains.",
        ]
    },
    {
        name: "Box Out & Rebound Drill",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=34",
        hint: "basketball box out",
        steps: [
            "Have a partner shoot the ball.",
            "As the shot goes up, find your opponent and make contact with your body.",
            "Use your lower body to seal the opponent behind you.",
            "Go up strong for the rebound with both hands.",
        ],
        commonMistakes: [
            "Watching the ball instead of finding your opponent.",
            "Not making contact.",
            "Jumping for the rebound without boxing out first.",
        ],
        injuryPrevention: [
            "Be aware of other players to avoid collisions.",
            "Practice safe landing after jumping for the rebound.",
        ]
    },
  ],
  "agility-conditioning": [
    {
        name: "Suicide Runs (baseline to baseline)",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=35",
        hint: "basketball suicide runs",
        steps: [
            "Start at the baseline.",
            "Sprint to the free-throw line and back.",
            "Sprint to the half-court line and back.",
            "Sprint to the opposite free-throw line and back.",
            "Sprint to the opposite baseline and back.",
        ],
        commonMistakes: [
            "Not touching the lines.",
            "Pacing yourself instead of sprinting.",
            "Poor turning technique at the lines.",
        ],
        injuryPrevention: [
            "High-intensity drill; requires excellent warm-up.",
            "Wear shoes with good grip to prevent slips when turning.",
        ]
    },
  ],
};
