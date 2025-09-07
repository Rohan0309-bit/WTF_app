
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
        {
            name: "Triangle Passing with Teammates",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=17",
            hint: "football triangle passing",
            steps: [
                "Form a triangle with two other players, about 10-15 yards apart.",
                "Pass the ball around the triangle, focusing on one-touch or two-touch passing.",
                "Follow your pass by moving to the position you passed to.",
                "Keep the ball moving quickly and accurately on the ground."
            ],
            commonMistakes: [
                "Over-hitting passes.",
                "Poor communication.",
                "Standing still after passing."
            ],
            injuryPrevention: [
                "Stay alert to avoid collisions with teammates.",
                "Warm up with light jogging and dynamic stretches."
            ]
        },
        {
            name: "One-touch Passing Squares",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=18",
            hint: "football one touch pass",
            steps: [
                "Set up a 10x10 yard square with four players, one on each corner.",
                "Pass the ball around the square, aiming for one-touch passes.",
                "Vary the direction and sequence of passes.",
                "Focus on body shape to receive and pass in one fluid motion."
            ],
            commonMistakes: [
                "Taking an extra touch when one is possible.",
                "Inaccurate passes that break the rhythm.",
                "Not being in a ready position to receive the ball."
            ],
            injuryPrevention: [
                "This drill improves reaction time. Stay on your toes.",
                "Strengthen ankles to handle quick adjustments."
            ]
        },
        {
            name: "Long Ball Passing Accuracy Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=19",
            hint: "football long pass",
            steps: [
                "Set up a target area (e.g., a 10x10 yard box) about 30-40 yards away.",
                "Practice hitting long passes (driven and lofted) into the target area.",
                "Focus on technique: non-kicking foot beside the ball, striking through the center or bottom half of the ball.",
                "Follow through towards your target."
            ],
            commonMistakes: [
                "Leaning back too far, causing the ball to sky.",
                "Poor connection with the ball, resulting in a weak pass.",
                "Not following through, leading to poor accuracy."
            ],
            injuryPrevention: [
                "Warm up hip flexors, quads, and groin thoroughly.",
                "Don't over-exert; build up distance and power gradually."
            ]
        },
        {
            name: "Passing Under Pressure (2v1)",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=20",
            hint: "football passing pressure",
            steps: [
                "In a small grid, two attackers try to keep possession against one defender.",
                "The attackers must use quick passes and movement to create space.",
                "Focus on communication, angles of support, and decision-making.",
                "Rotate the defender regularly."
            ],
            commonMistakes: [
                "Holding onto the ball for too long.",
                "Forcing passes that aren't on.",
                "Standing still and not providing an option for the player with the ball."
            ],
            injuryPrevention: [
                "Be aware of the defender to avoid tackles and collisions.",
                "Practice with controlled intensity to prevent injuries."
            ]
        },
        {
            name: "Rondo Drill (keep-away possession)",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=21",
            hint: "football rondo drill",
            steps: [
                "Form a circle with a group of players (e.g., 5-8 players).",
                "Send 1 or 2 players into the middle as defenders.",
                "The players on the outside try to keep the ball away from the defenders using one or two touches.",
                "Focus on sharp passing, good first touch, and constant movement."
            ],
            commonMistakes: [
                "Taking too many touches.",
                "Trying to force passes through the defenders.",
                "Not communicating with teammates."
            ],
            injuryPrevention: [
                "High-intensity drill. Ensure all players are properly warmed up.",
                "Keep passes on the ground to avoid dangerous deflections."
            ]
        }
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
        {
            name: "First-touch Finishing Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=22",
            hint: "football first touch finish",
            steps: [
                "A partner passes the ball to you from the side.",
                "Take one touch to control the ball and set up your shot.",
                "On your second touch, shoot at the goal.",
                "Focus on a clean first touch that puts the ball in a good position to shoot."
            ],
            commonMistakes: [
                "A heavy first touch that takes the ball too far away.",
                "Rushing the shot after a poor first touch.",
                "Taking your eye off the ball."
            ],
            injuryPrevention: [
                "Practice at a controlled pace before increasing the speed of the passes.",
                "Ensure good footing to avoid slips."
            ]
        },
        {
            name: "Volleys & Half-volley Shooting",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=23",
            hint: "football volley shooting",
            steps: [
                "Have a partner toss or chip the ball to you.",
                "For volleys, strike the ball before it hits the ground. Keep your eye on the ball and your knee over the ball.",
                "For half-volleys, strike the ball just as it bounces.",
                "Focus on timing and a clean connection."
            ],
            commonMistakes: [
                "Taking your eye off the ball.",
                "Leaning back, causing the ball to go over.",
                "Poor timing of the swing."
            ],
            injuryPrevention: [
                "Strengthen your core for balance and stability.",
                "Start with simple tosses to get the timing right."
            ]
        },
        {
            name: "Penalty Kick Practice",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=24",
            hint: "football penalty kick",
            steps: [
                "Develop a consistent run-up routine.",
                "Pick your spot before you start your run-up and stick with it.",
                "Focus on striking the ball cleanly with the inside of your foot for placement or laces for power.",
                "Practice under pressure to simulate match conditions."
            ],
            commonMistakes: [
                "Changing your mind mid run-up.",
                "Trying to be too precise and hitting the post or missing wide.",
                "Not practicing with a goalkeeper."
            ],
            injuryPrevention: [
                "Practice with a consistent technique to avoid muscle strain.",
            ]
        },
        {
            name: "Crossing + Finishing Combo Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=25",
            hint: "football crossing finishing",
            steps: [
                "Set up a winger and a striker.",
                "The winger dribbles down the flank and delivers a cross into the box.",
                "The striker must time their run to meet the cross and finish on goal (header or shot).",
                "Practice different types of crosses (lofted, driven) and runs."
            ],
            commonMistakes: [
                "Poor timing of the run from the striker.",
                "Inaccurate cross from the winger.",
                "Weak finish from the striker."
            ],
            injuryPrevention: [
                "Good communication is key to avoid collisions.",
                "Practice heading technique to prevent neck injuries."
            ]
        },
        {
            name: "1v1 Against Goalkeeper Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=26",
            hint: "football 1v1 goalkeeper",
            steps: [
                "Start with the ball at the top of the penalty box.",
                "Dribble towards the goalkeeper.",
                "Use fakes or quick touches to unbalance the keeper.",
                "Look for the opportunity to shoot for the corners or dribble around the keeper.",
                "Stay composed and don't rush the finish."
            ],
            commonMistakes: [
                "Shooting too early from a bad angle.",
                "Dribbling too close to the keeper, allowing them to smother the ball.",
                "Panicking and making a poor decision."
            ],
            injuryPrevention: [
                "Practice with a keeper who understands it's a drill to avoid reckless challenges.",
                "Be aware of your surroundings to prevent collisions."
            ]
        }
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
        {
            name: "Tackling Technique Drill (stand & slide)",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=27",
            hint: "football tackling",
            steps: [
                "For stand tackles, get side-on and use your front foot to poke the ball away when the attacker takes a heavy touch.",
                "For slide tackles, commit fully, sweeping the ball away with your leading leg while tucking the other leg underneath you.",
                "Focus on timing and playing the ball, not the player."
            ],
            commonMistakes: [
                "Tackling from behind.",
                "Committing to a tackle when off-balance.",
                "Missing the ball and fouling the player."
            ],
            injuryPrevention: [
                "Practice slide tackles on a soft, wet surface to avoid friction burns.",
                "Learn when and when not to commit to a tackle to avoid dangerous situations."
            ]
        },
        {
            name: "1v1 Defensive Situations",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=28",
            hint: "football 1v1 defense",
            steps: [
                "In a defined area, defend against an attacker trying to dribble past you.",
                "Use jockeying to contain the attacker and wait for the right moment to tackle.",
                "Don't get too tight, but don't give them too much space to shoot.",
                "Try to force them onto their weaker foot."
            ],
            commonMistakes: [
                "Diving in too early.",
                "Getting 'nutmegged' (ball played between your legs).",
                "Letting the attacker cut inside onto their strong foot."
            ],
            injuryPrevention: [
                "Requires quick changes of direction. Warm up hips and groin.",
                "Maintain a safe distance to react to the attacker's moves."
            ]
        },
        {
            name: "Interception Anticipation Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=29",
            hint: "football interception",
            steps: [
                "Set up three players: two passers and one defender in the middle.",
                "The passers try to pass the ball to each other while the defender tries to intercept.",
                "Focus on reading the passer's body language and eyes to anticipate the pass.",
                "Be ready to change direction quickly to step into the passing lane."
            ],
            commonMistakes: [
                "Ball-watching and not reading the players.",
                "Being flat-footed and slow to react.",
                "Guessing instead of anticipating based on cues."
            ],
            injuryPrevention: [
                "High-intensity drill. Stay alert.",
                "Good communication between passers is important."
            ]
        },
        {
            name: "Defensive Heading Practice",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=30",
            hint: "football defensive heading",
            steps: [
                "Have a partner toss high balls towards you.",
                "Attack the ball at its highest point. Don't wait for it to come to you.",
                "Use your forehead to make contact.",
                "Head the ball high and wide, away from danger.",
                "Keep your eyes open and mouth closed."
            ],
            commonMistakes: [
                "Letting the ball hit you instead of heading it.",
                "Using the top of your head.",
                "Closing your eyes at the point of impact."
            ],
            injuryPrevention: [
                "Strengthen neck muscles to help absorb the impact.",
                "Learn proper technique to avoid concussions.",
            ]
        },
        {
            name: "Small-Sided Defending Drill (3v3, 4v4)",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=31",
            hint: "football small sided defending",
            steps: [
                "Play a small-sided game with a focus on defensive principles.",
                "Practice communication, staying compact as a unit, and deciding when to press.",
                "Work on covering for teammates who are beaten.",
                "This simulates real-game defensive scenarios."
            ],
            commonMistakes: [
                "Leaving large gaps between defenders.",
                "All defenders pressing the ball at once.",
                "Poor communication.",
                "Losing defensive shape."
            ],
            injuryPrevention: [
                "Game-like intensity requires a full warm-up.",
                "Clear rules and good sportsmanship are essential to prevent injuries."
            ]
        }
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
        {
            name: "Ladder Footwork Drills",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=32",
            hint: "football ladder drills",
            steps: [
                "Set up an agility ladder.",
                "Perform various footwork patterns: one foot in each box, two feet in each box, lateral shuffles, etc.",
                "Focus on quick, light feet and staying on the balls of your feet.",
                "Keep your arms moving to help with balance and rhythm."
            ],
            commonMistakes: [
                "Looking down at your feet.",
                "Heavy, slow steps.",
                "Losing rhythm and coordination."
            ],
            injuryPrevention: [
                "Start slowly to learn the patterns.",
                "Ensure the ladder is securely on the ground to prevent tripping."
            ]
        },
        {
            name: "Cone Agility & Sprint Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=33",
            hint: "football cone agility",
            steps: [
                "Set up a series of cones in a specific pattern (T-drill, square drill).",
                "Sprint, shuffle, and backpedal between the cones as per the drill instructions.",
                "Focus on sharp turns and explosive acceleration.",
                "Touch each cone as you change direction."
            ],
            commonMistakes: [
                "Rounding the turns instead of making sharp cuts.",
                "Poor footwork when changing direction.",
                "Not staying low during shuffles and backpedals."
            ],
            injuryPrevention: [
                "Warm up thoroughly, especially ankles, knees, and hips.",
                "Wear shoes with good grip."
            ]
        },
        {
            name: "Shuttle Runs (with/without ball)",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=34",
            hint: "football shuttle runs",
            steps: [
                "Set up cones at intervals (e.g., 5, 10, 15 yards).",
                "Sprint to the first cone and back, then the second cone and back, and so on.",
                "Focus on explosive starts and controlled stops.",
                "Can be done with or without a ball to work on conditioning and close control."
            ],
            commonMistakes: [
                "Not touching the line/cone at each turn.",
                "Pacing yourself instead of sprinting.",
                "Poor turning technique."
            ],
            injuryPrevention: [
                "High-intensity drill requiring a good warm-up.",
                "Ensure the surface is not slippery."
            ]
        },
        {
            name: "Resistance Band Sprint Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=35",
            hint: "football resistance sprint",
            steps: [
                "Have a partner hold a resistance band around your waist.",
                "Sprint forward for 10-15 yards while your partner provides resistance.",
                "Focus on a strong forward lean and powerful leg drive.",
                "Can also be done for lateral shuffles."
            ],
            commonMistakes: [
                "Leaning too far forward and losing balance.",
                "Partner providing too much or too little resistance.",
                "Poor arm action during the sprint."
            ],
            injuryPrevention: [
                "Use a proper resistance band designed for this purpose.",
                "The partner holding the band must provide smooth, consistent resistance."
            ]
        },
        {
            name: "Endurance Possession Drill (continuous play)",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/300?random=36",
            hint: "football endurance drill",
            steps: [
                "Play a small-sided game (e.g., 4v4) in a large area for an extended period (e.g., 5-10 minutes) without stopping.",
                "The goal is continuous movement, both on and off the ball.",
                "This builds game-specific endurance.",
                "Focus on maintaining technique even when fatigued."
            ],
            commonMistakes: [
                "Players standing still when they don't have the ball.",
                "A drop in intensity as players get tired.",
                "A breakdown in technical skills due to fatigue."
            ],
            injuryPrevention: [
                "Ensure all players are adequately warmed up.",
                "Monitor players for signs of over-exertion.",
                "Hydration is key."
            ]
        }
    ],
};
