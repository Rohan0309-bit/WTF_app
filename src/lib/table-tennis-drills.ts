
export interface TableTennisDrill {
    name: string;
    youtubeUrl: string;
    image: string;
    hint: string;
    steps: string[];
    commonMistakes: string[];
    injuryPrevention: string[];
}

export const tableTennisSubCategories: Record<string, TableTennisDrill[]> = {
    "Footwork Drills": [
        {
            name: "Side-to-Side Footwork with Shadow Play",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=46",
            hint: "table tennis side to side",
            steps: [
                "Stand in a ready position at the center of the table.",
                "Shuffle step to the forehand corner, play a shadow forehand stroke.",
                "Quickly shuffle back to the center and then to the backhand corner for a shadow backhand stroke.",
                "Focus on staying low, on the balls of your feet, and maintaining balance.",
                "Keep your movements small, quick, and efficient."
            ],
            commonMistakes: [
                "Crossing your feet over instead of shuffling.",
                "Standing up straight between movements.",
                "Being flat-footed, which slows reaction time.",
                "Taking large, slow steps."
            ],
            injuryPrevention: [
                "Warm up ankles, knees, and hips thoroughly.",
                "Wear court shoes with good grip and lateral support.",
                "Strengthen core muscles to maintain balance and stability.",
            ]
        },
        {
            name: "In-Out Footwork Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=47",
            hint: "table tennis in out",
            steps: [
                "A partner feeds one short ball and one deep ball to one corner (e.g., forehand).",
                "Move in quickly to play the short ball.",
                "Immediately move back to play the deep ball.",
                "Focus on the explosive push-off to move backward after the short ball.",
            ],
            commonMistakes: [
                "Being slow to recover after the short ball.",
                "Not getting far enough back for the deep ball, leading to a cramped stroke.",
                "Losing balance during the transition."
            ],
            injuryPrevention: [
                "Strengthen quads and glutes for powerful push-offs.",
                "Practice the forward-backward movement slowly first to build coordination.",
            ]
        },
    ],
    "Stroke Training": [
        {
            name: "Forehand Drive Consistency Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=48",
            hint: "table tennis forehand drive",
            steps: [
                "Have a partner or robot feed balls consistently to your forehand.",
                "Focus on a stable body, rotating from the hips and torso.",
                "Use a compact backswing and accelerate through the ball.",
                "Maintain a consistent contact point in front and to the side of your body.",
                "Aim for a specific target on the other side of the table."
            ],
            commonMistakes: [
                "Using only your arm and no body rotation.",
                "A long, loopy swing that is slow and inconsistent.",
                "Not transferring weight from your back foot to your front foot.",
            ],
            injuryPrevention: [
                "Warm up your shoulder and core.",
                "Focus on smooth mechanics to avoid straining the elbow or shoulder.",
            ]
        },
        {
            name: "Loop Against Underspin Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=49",
            hint: "table tennis loop",
            steps: [
                "Have a partner feed heavy underspin (chop) balls.",
                "Get lower than you would for a normal drive.",
                "Use your legs to lift up as you swing.",
                "Brush the ball with a fast, upward motion to counteract the backspin.",
                "Focus on generating heavy topspin, not just speed."
            ],
            commonMistakes: [
                "Hitting the ball flat, causing it to go into the net.",
                "Not getting low enough, resulting in hitting the top edge of the ball.",
                "A slow arm swing that doesn't generate enough topspin.",
            ],
            injuryPrevention: [
                "This stroke uses the legs and core heavily; ensure they are strong.",
                "Avoid arching the back excessively; lift with your legs.",
            ]
        },
    ],
    "Serve & Return Drills": [
        {
            name: "Short Backspin Serve Practice",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=50",
            hint: "table tennis backspin serve",
            steps: [
                "Toss the ball low and contact it just above the table surface.",
                "Use a slicing motion, cutting underneath the ball to impart backspin.",
                "The serve should bounce at least twice on the opponent's side if left untouched.",
                "Keep the serve low over the net.",
            ],
            commonMistakes: [
                "Serving too high, making it easy to attack.",
                "Not enough spin, making the return easy.",
                "The ball not bouncing twice (it's too long).",
            ],
            injuryPrevention: [
                "Focus on a relaxed wrist motion to avoid strain.",
            ]
        },
        {
            name: "Flick Return Against Short Serve",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=51",
            hint: "table tennis flick return",
            steps: [
                "Read the short serve and step in with your dominant foot under the table.",
                "Use your wrist and forearm to quickly 'flick' the ball over the net.",
                "Contact the ball at the top of its bounce.",
                "This is an aggressive return designed to surprise the opponent.",
            ],
            commonMistakes: [
                "Using too much arm and not enough wrist.",
                "Misjudging the spin on the serve, causing the flick to go into the net or off the table.",
                "Being slow to get into position.",
            ],
            injuryPrevention: [
                "A very wrist-intensive shot. Ensure your wrist is strong and well-warmed up.",
            ]
        },
    ],
    "Reaction & Reflex Training": [
        {
            name: "Multi-ball Fast Reaction Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=52",
            hint: "table tennis multi ball",
            steps: [
                "A feeder (coach or robot) rapidly feeds balls to different locations on the table.",
                "Focus on quick recovery and preparation for the next shot.",
                "The goal is not to hit perfect shots, but to return every ball.",
                "This drill improves reaction time and stamina.",
            ],
            commonMistakes: [
                "Not returning to the ready position after each shot.",
                "Getting frustrated by the speed.",
                "Poor footwork leading to being out of position.",
            ],
            injuryPrevention: [
                "High-intensity drill. Ensure excellent physical conditioning.",
                "Stay hydrated and take short breaks when needed.",
            ]
        },
        {
            name: "Quick Block Reflex Against Smashes",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=53",
            hint: "table tennis block drill",
            steps: [
                "Stand close to the table in a ready position.",
                "Have a partner smash balls at you.",
                "Use a short, compact blocking motion to return the ball.",
                "Let the opponent's power do the work. Absorb the pace.",
                "Focus on quick reactions and precise paddle angle.",
            ],
            commonMistakes: [
                "Taking a full swing instead of a block.",
                "Having a loose wrist, which makes the block weak.",
                "Being too far from the table.",
            ],
            injuryPrevention: [
                "Be ready for fast-moving balls. Eye protection could be considered.",
                "Warm up your playing wrist and arm thoroughly.",
            ]
        },
    ],
};
