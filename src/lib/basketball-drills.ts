
export interface BasketballDrill {
    name: string;
    youtubeUrl: string;
    image: string;
    hint: string;
    steps: string[];
    commonMistakes: string[];
    injuryPrevention: string[];
}

export const basketballSubCategories: Record<string, BasketballDrill[]> = {
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
    {
        name: "Stationary Pound Dribble Drill",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=36",
        hint: "basketball pound dribble",
        steps: [
            "In a low athletic stance, pound the basketball as hard as you can into the floor.",
            "Keep the dribble low (below your knee).",
            "Alternate hands, focusing on power and control.",
            "This drill builds hand and forearm strength.",
        ],
        commonMistakes: [
            "Standing up straight.",
            "Letting the dribble get too high.",
            "Not dribbling with force.",
        ],
        injuryPrevention: [
            "Warm up wrists and forearms.",
            "Start with shorter durations and build up.",
        ]
    },
    {
        name: "Zig-Zag Crossover Drill",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=37",
        hint: "basketball zigzag crossover",
        steps: [
            "Set up cones in a zig-zag pattern.",
            "Dribble towards a cone and perform a sharp crossover as you change direction.",
            "Explode out of the crossover towards the next cone.",
            "Keep your body low and eyes up.",
        ],
        commonMistakes: [
            "A high or slow crossover.",
            "Not changing speed after the move.",
            "Looking down during the crossover.",
        ],
        injuryPrevention: [
            "Warm up ankles and hips for sharp changes of direction.",
        ]
    },
    {
        name: "Retreat Dribble Under Pressure",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=38",
        hint: "basketball retreat dribble",
        steps: [
            "Have a partner apply light defensive pressure.",
            "Use a retreat dribble (dribbling backwards) to create space.",
            "Keep your body between the defender and the ball.",
            "Stay low and be ready to change direction or explode forward if the defender overcommits.",
        ],
        commonMistakes: [
            "Turning your back to the defender.",
            "A high, vulnerable dribble.",
            "Not using your off-arm to protect the ball.",
        ],
        injuryPrevention: [
            "Practice with a cooperative defender first.",
            "Focus on balance and body control.",
        ]
    }
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
        name: "Catch-and-Shoot Drill",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=39",
        hint: "basketball catch and shoot",
        steps: [
            "Have a partner pass you the ball from different angles.",
            "As the ball is in the air, get your feet set and hands ready.",
            "Catch the ball in a shooting pocket, ready to go straight up into your shot.",
            "Focus on a quick, fluid motion from catch to release.",
        ],
        commonMistakes: [
            "Bringing the ball down after the catch.",
            "Slow footwork, not being ready for the pass.",
            "Rushing the shot and having poor form.",
        ],
        injuryPrevention: [
            "Be aware of your surroundings.",
            "Practice proper footwork to avoid ankle twists.",
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
    {
        name: "Pull-up Jump Shot Drill",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=40",
        hint: "basketball pull-up jumper",
        steps: [
            "Dribble towards a designated spot on the floor (e.g., the elbow).",
            "Take one or two hard dribbles and then stop abruptly, transitioning into your jump shot.",
            "Focus on balance and a quick, high release.",
            "Practice going both left and right.",
        ],
        commonMistakes: [
            "Traveling before the shot.",
            "Fading away or being off-balance.",
            "A slow transition from dribble to shot.",
        ],
        injuryPrevention: [
            "Strengthen core muscles for better body control.",
            "Practice proper landing to avoid ankle injuries.",
        ]
    },
    {
        name: "3-Point Shooting Circuit",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=41",
        hint: "basketball 3-point shooting",
        steps: [
            "Set up at five spots around the 3-point arc (both corners, both wings, top).",
            "Take a set number of shots from each spot.",
            "Focus on using more leg power for the increased distance.",
            "Maintain consistent form and follow-through on every shot.",
        ],
        commonMistakes: [
            "Altering shooting form to get more distance.",
            "Not using legs enough, leading to a flat shot.",
            "Inconsistent follow-through.",
        ],
        injuryPrevention: [
            "Ensure a good warm-up to prevent muscle strain.",
            "Build up distance gradually; don't start at the NBA 3-point line.",
        ]
    }
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
    {
        name: "Partner Passing on the Move",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=42",
        hint: "basketball moving pass",
        steps: [
            "Two players run parallel to each other up the court.",
            "Practice passing the ball back and forth using chest passes.",
            "Focus on leading your partner with the pass.",
            "Maintain speed and accuracy throughout.",
        ],
        commonMistakes: [
            "Passing behind your partner.",
            "Sloppy passes that are hard to catch.",
            "Slowing down to make the pass.",
        ],
        injuryPrevention: [
            "Good communication to avoid running into each other.",
        ]
    },
    {
        name: "No-look & Overhead Passing Drill",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=43",
        hint: "basketball advanced passing",
        steps: [
            "Practice no-look passes with a stationary partner, focusing on using your peripheral vision.",
            "Practice overhead passes to get the ball over a defender.",
            "Focus on deception for no-look passes and power for overhead passes.",
        ],
        commonMistakes: [
            "Inaccurate or telegraphed no-look passes.",
            "Weak overhead passes that get stolen.",
        ],
        injuryPrevention: [
            "Start with simple passes before attempting difficult ones.",
        ]
    },
    {
        name: "3-Man Weave Drill",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=44",
        hint: "basketball 3-man weave",
        steps: [
            "Three players line up on the baseline.",
            "The middle player passes to a wing player and runs behind them.",
            "The player who receives the pass dribbles to the middle and passes to the opposite wing, then runs behind them.",
            "This pattern continues up the court, finishing with a layup.",
        ],
        commonMistakes: [
            "Poor spacing.",
            "Bad passes.",
            "Collisions due to poor communication.",
        ],
        injuryPrevention: [
            "High-speed drill requiring good awareness and communication.",
        ]
    },
    {
        name: "Full Court Passing Relay",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=45",
        hint: "basketball passing relay",
        steps: [
            "Two lines of players on opposite baselines.",
            "The first player passes to the first player in the other line and sprints to the back of that line.",
            "The receiving player does the same.",
            "The goal is to move the ball up and down the court using only passes.",
        ],
        commonMistakes: [
            "Inaccurate long passes.",
            "Players not ready to receive the pass.",
        ],
        injuryPrevention: [
            "Focus on crisp, accurate passes.",
        ]
    },
    {
        name: "Quick Decision Rondo Drill",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=46",
        hint: "basketball rondo",
        steps: [
            "4 attackers form a square, with 1 defender in the middle.",
            "The attackers must pass the ball without letting the defender steal it.",
            "Focus on quick decisions, sharp passes, and constant movement to create passing lanes.",
        ],
        commonMistakes: [
            "Holding the ball too long.",
            "Forcing passes.",
            "Standing still.",
        ],
        injuryPrevention: [
            "Stay alert to avoid collisions.",
        ]
    },
  ],
  "defense-rebounding": [
     {
        name: "Defensive Slide Drill (lateral quickness)",
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
        name: "Closeout Drill (contest without fouling)",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=47",
        hint: "basketball closeout",
        steps: [
            "Start in the paint and have a partner on the 3-point line.",
            "On their call, sprint towards them to 'close out' the space.",
            "Use short, choppy steps as you get close to stay balanced.",
            "End with a hand up to contest the shot, but without jumping or fouling.",
        ],
        commonMistakes: [
            "Closing out too fast and getting beaten off the dribble.",
            "Being off-balance.",
            "Fouling the shooter.",
        ],
        injuryPrevention: [
            "Practice control to avoid collisions.",
        ]
    },
    {
        name: "1v1 On-ball Defense Drill",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=48",
        hint: "basketball 1v1 defense",
        steps: [
            "Guard an offensive player in a defined space.",
            "Use your defensive slides and stance to stay in front of them.",
            "Force them to their weaker hand or towards the sideline.",
            "The goal is to contain, not necessarily to steal the ball.",
        ],
        commonMistakes: [
            "Reaching for the ball and getting beaten.",
            "Not moving your feet.",
            "Allowing the offensive player to dictate the direction.",
        ],
        injuryPrevention: [
            "Maintain a safe distance to react.",
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
    {
        name: "Help Defense Rotation Drill",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=49",
        hint: "basketball help defense",
        steps: [
            "Set up an offense with multiple players.",
            "One defender starts on the ball, others are in 'help' position.",
            "When the ball is passed or dribbled, players must rotate to cover and help.",
            "Focus on communication and quick rotations.",
        ],
        commonMistakes: [
            "Slow rotations.",
            "Poor communication.",
            "Losing track of your assigned player.",
        ],
        injuryPrevention: [
            "Requires high awareness to avoid collisions.",
        ]
    },
    {
        name: "Fast Break Defense Drill",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=50",
        hint: "basketball fast break defense",
        steps: [
            "Practice a 2-on-1 or 3-on-2 fast break scenario.",
            "The defender(s) must communicate to stop the ball and protect the basket.",
            "The goal is to slow down the offense and prevent an easy layup.",
        ],
        commonMistakes: [
            "Committing to the ball handler too early.",
            "Giving up an easy pass for a layup.",
            "Lack of communication.",
        ],
        injuryPrevention: [
            "High-speed drill; warm up properly.",
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
    {
        name: "Ladder Footwork Drills",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=51",
        hint: "basketball ladder drills",
        steps: [
            "Set up an agility ladder.",
            "Perform various footwork patterns like Ickey Shuffle, lateral steps, and high knees.",
            "Focus on being quick and light on your feet.",
        ],
        commonMistakes: [
            "Heavy feet.",
            "Looking down.",
            "Incorrect form.",
        ],
        injuryPrevention: [
            "Start slowly to learn the patterns.",
        ]
    },
    {
        name: "Sprint + Backpedal Drill",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=52",
        hint: "basketball sprint backpedal",
        steps: [
            "Sprint from the baseline to half-court.",
            "Immediately transition into a backpedal back to the baseline.",
            "Focus on quick transitions and maintaining good form in both movements.",
        ],
        commonMistakes: [
            "Turning around instead of backpedaling.",
            "Poor backpedal form (standing up straight).",
        ],
        injuryPrevention: [
            "Ensure a clear path.",
        ]
    },
    {
        name: "Cone Shuffle Agility Drill",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=53",
        hint: "basketball cone shuffle",
        steps: [
            "Set up cones in a T-shape or square.",
            "Sprint, shuffle, and backpedal between the cones.",
            "Focus on staying low and changing direction quickly.",
        ],
        commonMistakes: [
            "Standing up during shuffles.",
            "Slow direction changes.",
        ],
        injuryPrevention: [
            "Warm up hips and ankles.",
        ]
    },
    {
        name: "Plyometric Jumps (box, squat jumps)",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=54",
        hint: "basketball plyometric jumps",
        steps: [
            "Perform box jumps by jumping onto a sturdy box and stepping down.",
            "Perform squat jumps by squatting down and exploding upwards.",
            "Focus on explosive power and soft landings.",
        ],
        commonMistakes: [
            "Landing hard.",
            "Not using full explosive power.",
            "Using a box that is too high.",
        ],
        injuryPrevention: [
            "Start with low boxes/jumps.",
            "Ensure proper landing mechanics to protect knees.",
        ]
    },
    {
        name: "Full-Court Sprint Layup Drill",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=55",
        hint: "basketball sprint layup",
        steps: [
            "Start at one baseline.",
            "Sprint the length of the court while dribbling.",
            "Finish with a layup at the other end.",
            "Grab the rebound and repeat going the other way.",
        ],
        commonMistakes: [
            "Losing control of the dribble at high speed.",
            "Slowing down significantly for the layup.",
            "Missing the layup due to fatigue.",
        ],
        injuryPrevention: [
            "Build up to full speed.",
            "Focus on controlled dribbling.",
        ]
    },
  ],
};
