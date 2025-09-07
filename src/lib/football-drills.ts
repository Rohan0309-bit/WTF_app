
export interface FootballDrill {
    name: string;
    youtubeUrl: string;
    image: string;
    hint: string;
    steps: string[];
    commonMistakes: string[];
    injuryPrevention: string[];
}

export const footballSubCategories: Record<string, FootballDrill[]> = {
    "dribbling-drills": [
        {
            name: "Cone Weaving Drill (close control)",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=7",
            hint: "football cone weaving",
            steps: [
                "Set up a line of cones about 2 feet apart.",
                "Dribble the ball in and out of the cones using both the inside and outside of both feet.",
                "Focus on keeping the ball extremely close to your feet (1-2 touches per cone).",
                "Keep your head up as much as possible to scan the field."
            ],
            commonMistakes: [
                "Pushing the ball too far ahead.",
                "Looking down at the ball and not scanning.",
                "Using only one foot, becoming predictable."
            ],
            injuryPrevention: [
                "Ensure proper warm-up, especially ankles and knees.",
                "Wear appropriate footwear for good grip.",
            ]
        },
        {
            name: "Zig-Zag Dribble with Ball Control",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=8",
            hint: "football zig zag",
            steps: [
                "Set up cones in a zig-zag pattern, about 5 yards apart.",
                "Dribble from one cone to the next, changing direction sharply.",
                "Use the inside and outside of your feet to control the ball around the cones.",
                "Focus on explosive changes of pace after each turn."
            ],
            commonMistakes: [
                "Taking wide, loopy turns instead of sharp cuts.",
                "Losing control of the ball on the turn.",
                "Not changing pace between cones."
            ],
            injuryPrevention: [
                "Warm up groin and hip flexors to prevent strains from sharp turns.",
                "Practice on a non-slip surface.",
            ]
        },
        {
            name: "Speed Dribble in Straight Line",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=9",
            hint: "football speed dribble",
            steps: [
                "Dribble the ball in a straight line for 20-30 yards at maximum speed.",
                "Focus on pushing the ball slightly ahead of you and sprinting to catch up.",
                "Use the laces of your boots for better control at speed.",
                "Practice stopping the ball dead at the end of the sprint."
            ],
            commonMistakes: [
                "Pushing the ball too far and losing control.",
                "Looking down at the ball, losing awareness of surroundings.",
                "Slowing down to control the ball."
            ],
            injuryPrevention: [
                "Ensure a clear path to avoid collisions.",
                "Warm up hamstrings and quads properly before sprinting.",
            ]
        },
        {
            name: "1v1 Defender Dribble Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=14",
            hint: "football 1v1 dribble",
            steps: [
                "Set up a small grid with a defender at one end.",
                "Start at the opposite end and dribble towards the defender.",
                "Use fakes, step-overs, or quick changes of direction to get past the defender.",
                "Focus on being decisive and explosive in your move.",
                "Accelerate past the defender once you've beaten them."
            ],
            commonMistakes: [
                "Being hesitant and not committing to a move.",
                "Dribbling too close to the defender, making it easy to tackle.",
                "Not accelerating away after the move.",
                "Performing the move too far away from the defender."
            ],
            injuryPrevention: [
                "This is a high-intensity drill; ensure a good warm-up.",
                "Practice with a cooperative defender initially to build confidence.",
                "Be aware of your surroundings to avoid collisions."
            ]
        },
        {
            name: "Circle Dribbling (tight turns around cones)",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=15",
            hint: "football circle dribbling",
            steps: [
                "Set up a single cone.",
                "Dribble in a tight circle around the cone, first with one foot, then the other.",
                "Use the inside and outside of your foot to keep the ball very close.",
                "Gradually increase speed while maintaining control.",
                "This drill is excellent for improving close control and balance."
            ],
            commonMistakes: [
                "Letting the ball get too far away from the cone.",
                "Losing balance by leaning too much.",
                "Only using one part of the foot."
            ],
            injuryPrevention: [
                "Focus on good posture and core engagement to maintain balance.",
                "Start slowly to avoid ankle twists."
            ]
        },
        {
            name: "Change of Direction Dribble Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=16",
            hint: "football direction change",
            steps: [
                "Dribble forward at a medium pace.",
                "On a visual or auditory cue, quickly cut left or right at a 90-degree angle.",
                "Use the outside of your foot for a sharp cut.",
                "Explode into a sprint for 5-10 yards after the cut.",
                "This simulates reacting to a defender or a gap opening up."
            ],
            commonMistakes: [
                "A slow, rounded turn instead of a sharp cut.",
                "Losing control of the ball during the cut.",
                "Failing to accelerate after the change of direction."
            ],
            injuryPrevention: [
                "Strengthen ankles and knees to handle the sharp cuts.",
                "Ensure the playing surface is not slippery.",
                "Warm up thoroughly with dynamic stretches."
            ]
        }
    ],
    "passing-drills": [
        {
            name: "Short Passing Wall Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=10",
            hint: "football wall pass",
            steps: [
                "Stand 5-10 feet from a wall or rebounder.",
                "Pass the ball against the wall with the inside of your foot.",
                "Control the returning ball with your first touch.",
                "Alternate between your right and left foot.",
            ],
            commonMistakes: [
                "Using the toe to pass, resulting in poor accuracy.",
                "A heavy first touch that sends the ball flying.",
                "Not staying on your toes, ready to receive the pass."
            ],
            injuryPrevention: [
                "Focus on proper passing technique to avoid ankle strain.",
                "Start slowly to get the rhythm before increasing speed.",
            ]
        },
    ],
    "shooting-finishing-drills": [
         {
            name: "Shooting at Target Zones",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=11",
            hint: "football shooting targets",
            steps: [
                "Place targets in the four corners of the goal.",
                "Shoot from different angles and distances outside the penalty box.",
                "Focus on accuracy over power initially.",
                "Practice with both feet."
            ],
            commonMistakes: [
                "Leaning back too far, causing the shot to go over the bar.",
                "Not following through towards the target.",
                "Trying to hit the ball too hard and sacrificing accuracy."
            ],
            injuryPrevention: [
                "Warm up hip flexors and quads.",
                "Don't overdo it to avoid groin or hamstring strains.",
            ]
        },
    ],
    "defensive-drills": [
        {
            name: "Shadowing & Jockeying Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=12",
            hint: "football jockeying",
            steps: [
                "Have a partner dribble towards you.",
                "Adopt a low, side-on body position.",
                "Stay on your toes and shuffle backwards, mirroring the attacker's movement.",
                "Force the attacker to one side; don't let them dictate the direction.",
                "Focus on staying goal-side and not diving in."
            ],
            commonMistakes: [
                "Standing flat-footed.",
                "Facing the attacker head-on instead of side-on.",
                "Diving into a tackle and getting beaten.",
                "Crossing your feet over."
            ],
            injuryPrevention: [
                "Strengthen core and leg muscles for stability.",
                "Practice footwork patterns slowly first.",
            ]
        },
    ],
    "conditioning-agility-drills": [
        {
            name: "Sprint Intervals with Ball",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=13",
            hint: "football sprint drills",
            steps: [
                "Sprint with the ball at your feet for 30 yards.",
                "Rest or jog back slowly.",
                "Repeat for a set number of repetitions.",
                "Focus on maintaining control of the ball while sprinting at maximum effort."
            ],
            commonMistakes: [
                "Losing control of the ball.",
                "Not sprinting at full intensity.",
                "Inadequate rest periods, leading to fatigue and poor form."
            ],
            injuryPrevention: [
                "Thorough warm-up is crucial to prevent muscle pulls.",
                "Build up intensity and volume over time.",
            ]
        },
    ],
};
