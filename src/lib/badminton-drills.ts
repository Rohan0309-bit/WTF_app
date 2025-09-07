
export interface BadmintonDrill {
    name: string;
    youtubeUrl: string;
    image: string;
    hint: string;
    steps: string[];
    commonMistakes: string[];
    injuryPrevention: string[];
}

export const badmintonSubCategories: Record<string, BadmintonDrill[]> = {
    "footwork-drills": [
      { 
        name: "Shadow Footwork", 
        youtubeUrl: 'https://www.youtube.com/watch?v=zJgXk2g5-gE', 
        image: "https://picsum.photos/400/301", 
        hint: "badminton footwork", 
        steps: [
            "Start at the center of the court in a ready stance.",
            "Move to all four corners and the middle of the net and back line, returning to the center after each movement.",
            "Focus on using chasse steps for lateral movement and lunging for corner shots.",
            "Mimic playing shots (clears, drops, smashes) at each point to make it realistic."
        ], 
        commonMistakes: [
            "Being flat-footed instead of on the balls of your feet.",
            "Not returning to the center base after each shot.",
            "Taking too many large, slow steps instead of quick, efficient ones.",
            "Losing balance during lunges."
        ], 
        injuryPrevention: [
            "Always warm-up thoroughly, focusing on ankles, knees, and hips.",
            "Wear shoes with excellent grip and ankle support.",
            "Strengthen your calves, quads, and glutes to handle the explosive movements.",
            "Practice on a proper court surface to reduce impact."
        ] 
      },
      {
        name: "Ladder Drills",
        youtubeUrl: "https://www.youtube.com/watch?v=GLk5yGkvL-A",
        image: "https://picsum.photos/400/302",
        hint: "badminton ladder drills",
        steps: [
            "Lay an agility ladder on the court.",
            "Perform various footwork patterns: one foot in each square, two feet in each square, lateral shuffles (Ickey Shuffle).",
            "Focus on speed, precision, and keeping your feet light.",
            "Keep your arms relaxed and your core engaged."
        ],
        commonMistakes: [
            "Looking down at your feet instead of ahead.",
            "Heavy, stomping steps that slow you down.",
            "Getting tangled in the ladder due to lack of coordination.",
            "Holding tension in the upper body."
        ],
        injuryPrevention: [
            "Ensure the ladder is flat and secure on the ground to prevent tripping.",
            "Start slowly to master the patterns before increasing speed.",
            "Land on the balls of your feet to absorb impact.",
            "Keep your knees slightly bent."
        ]
      },
      {
        name: "Multi-direction Split Step Practice",
        youtubeUrl: "https://www.youtube.com/watch?v=f-B-E_nABcQ",
        image: "https://picsum.photos/400/303",
        hint: "badminton split step",
        steps: [
            "Have a partner or coach stand on the opposite side of the net.",
            "As they mimic hitting a shuttle, perform a small, explosive hop (the split step).",
            "They will then point to a corner of the court.",
            "React immediately after your split step, pushing off towards the indicated corner.",
            "Return to the center and repeat."
        ],
        commonMistakes: [
            "Timing the split step too early or too late.",
            "A large, slow hop instead of a quick, reactive one.",
            "Being flat-footed on landing.",
            "Hesitating before moving to the corner."
        ],
        injuryPrevention: [
            "This drill is high-impact; ensure a very good warm-up.",
            "Strengthen ankles and knees to withstand repetitive explosive movements.",
            "Listen to your body and don't over-train to avoid stress injuries.",
            "Practice on a sprung floor if possible."
        ]
      },
       {
        name: "Front–Back Recovery Drill",
        youtubeUrl: "https://www.youtube.com/watch?v=n7no-gP2s3s",
        image: "https://picsum.photos/400/304",
        hint: "badminton recovery drill",
        steps: [
            "Start at the center.",
            "Move forward to the net for a simulated net shot (lunge).",
            "Push back explosively from the front lunge.",
            "Immediately move to the back line for a simulated clear or smash.",
            "Return to the center and repeat.",
            "Focus on the efficiency of the backward push."
        ],
        commonMistakes: [
            "Taking too many steps to recover backward.",
            "Turning your back completely to the net when moving back.",
            "Being slow to transition from the forward to backward movement.",
            "Poor balance on recovery."
        ],
        injuryPrevention: [
            "Strong core muscles are essential for maintaining balance during recovery.",
            "Ensure good flexibility in the hip flexors and hamstrings.",
            "Build leg strength (quads and glutes) to power the explosive push-offs.",
            "Don't practice to the point of excessive fatigue where form breaks down."
        ]
      },
       {
        name: "Side-to-Side Defensive Shuffle",
        youtubeUrl: "https://www.youtube.com/watch?v=FjHs_pJSqV4",
        image: "https://picsum.photos/400/305",
        hint: "badminton defensive shuffle",
        steps: [
            "Stand in a low, wide, defensive stance.",
            "Have a partner feed shuttles to your forehand and backhand sides.",
            "Use shuffle steps (chasse steps) to move laterally to defend.",
            "Stay low throughout the movement.",
            "Focus on a short, compact swing for defensive blocks and lifts.",
            "Return to your low ready stance immediately after each shot."
        ],
        commonMistakes: [
            "Standing up straight between shots.",
            "Crossing your feet over, which leads to tripping and slow recovery.",
            "Reaching with only the arm instead of moving the feet.",
            "Being too slow to get back into the ready position."
        ],
        injuryPrevention: [
            "Strengthen your glutes and adductor/abductor muscles for lateral stability.",
            "Practice in a controlled manner before increasing the speed of the feed.",
            "Keep your back straight and chest up to avoid lower back strain.",
            "Wear shoes with good lateral support."
        ]
      },
       {
        name: "X-step Footwork for Smash Recovery",
        youtubeUrl: "https://www.youtube.com/watch?v=WJ93-HAvX1w",
        image: "https://picsum.photos/400/306",
        hint: "badminton smash recovery",
        steps: [
            "Perform a smash from the rear court.",
            "As you land, immediately perform an 'X-step' or 'scissor kick' (kicking your non-racket leg forward and your racket leg back).",
            "This step creates momentum to propel you back towards the center of the court.",
            "Land on your non-racket foot and push off towards the center.",
            "Get back into a ready stance quickly to anticipate the return."
        ],
        commonMistakes: [
            "Landing from the smash in an unbalanced position.",
            "A slow or non-existent scissor kick, killing momentum.",
            "Not getting back to the center quickly enough.",
            "Being flat-footed upon recovery."
        ],
        injuryPrevention: [
            "This is an advanced movement; master basic smash and recovery first.",
            "Core strength is vital for controlling the rotational forces.",
            "Practice the scissor kick motion slowly without a shuttle first.",
            "Ensure proper landing mechanics to protect your knees and ankles."
        ]
      }
    ],
    "stroke-training": [
      { 
        name: "Overhead Clear Practice", 
        youtubeUrl: "https://www.youtube.com/watch?v=U0tI-t3YwS4", 
        image: "https://picsum.photos/400/307", 
        hint: "badminton overhead clear", 
        steps: [
            "Get under and slightly behind the shuttle.",
            "Raise your non-racket arm to point at the shuttle for balance and aim.",
            "Use a full throwing motion, rotating your hips and torso.",
            "Contact the shuttle at the highest possible point with a relaxed grip, snapping your wrist at the last moment.",
            "Follow through fully across your body."
        ], 
        commonMistakes: [
            "Using only the arm, with no body rotation.",
            "Hitting the shuttle when it's too low or too far in front.",
            "A tense grip, which reduces power and feel.",
            "Incomplete follow-through, leading to poor recovery."
        ], 
        injuryPrevention: [
            "Thoroughly warm up your shoulder, elbow, and wrist.",
            "Strengthen your rotator cuff and core muscles.",
            "Don't over-practice with maximum power; focus on technique first.",
            "Ensure good footwork to get into position early, avoiding rushed, off-balance swings."
        ] 
      },
       { 
        name: "Smash Technique", 
        youtubeUrl: "https://www.youtube.com/watch?v=3-cQ2n_m2-M", 
        image: "https://picsum.photos/400/308", 
        hint: "badminton smash", 
        steps: [
            "Use the same preparation as an overhead clear to deceive your opponent.",
            "Contact the shuttle slightly more in front of your body compared to a clear.",
            "Use maximum arm speed and a powerful wrist snap.",
            "Angle the racket face downwards to direct the shuttle steeply into the opponent's court.",
            "Use a scissor kick to recover quickly to the center after landing."
        ], 
        commonMistakes: [
            "Trying to hit too hard and tensing up, which ironically reduces speed.",
            "Not using the wrist snap, resulting in a flat, slow smash.",
            "Poor timing, hitting the shuttle with the frame or too low.",
            "Landing off-balance and being slow to recover."
        ], 
        injuryPrevention: [
            "This is a high-impact stroke; do not perform without a proper warm-up.",
            "Build shoulder and core strength to handle the explosive force.",
            "Avoid overuse. Mix smash drills with other stroke practices.",
            "Master the correct landing and recovery technique to protect your knees and ankles."
        ] 
      },
       { 
        name: "Drop Shot Control", 
        youtubeUrl: "https://www.youtube.com/watch?v=c-HnF8p589g", 
        image: "https://picsum.photos/400/309", 
        hint: "badminton drop shot", 
        steps: [
            "Use the same preparation as a clear or smash to be deceptive.",
            "At the last moment, slow down your arm swing.",
            "Gently tap or slice the shuttle, letting it just tumble over the net.",
            "Aim for the shuttle to land as close to the net as possible.",
            "Follow through slightly to guide the shuttle."
        ], 
        commonMistakes: [
            "Slowing the arm down too early, making the shot obvious.",
            "Hitting the shuttle too hard, sending it too deep.",
            "Hitting the shuttle into the net.",
            "Not using any deception, allowing the opponent to read the shot easily."
        ], 
        injuryPrevention: [
            "Focus on a relaxed grip and touch to prevent wrist or elbow strain.",
            "Ensure good footwork to get into position; reaching for the shot leads to poor control.",
            "Strengthen forearm and finger muscles for better touch and control."
        ] 
      },
       { 
        name: "Net Shot Spin & Tight Control Drill", 
        youtubeUrl: "https://www.youtube.com/watch?v=WJkZoP6K-sQ", 
        image: "https://picsum.photos/400/310", 
        hint: "badminton net shot", 
        steps: [
            "Approach the net with your racket up and ready.",
            "Lunge forward with your racket leg.",
            "Keep your body low and balanced.",
            "Contact the shuttle as high as possible and as close to the net tape as you can.",
            "Use a slicing motion to make the shuttle spin, causing it to tumble and be difficult to return.",
            "The shot should be delicate, with minimal backswing."
        ], 
        commonMistakes: [
            "Lifting the shuttle too high, giving the opponent an easy kill.",
            "Hitting the net.",
            "Using a big swing instead of a gentle, controlled push or slice.",
            "Being too slow to the net, contacting the shuttle when it's too low."
        ], 
        injuryPrevention: [
            "Strengthen your lunging leg (quads, glutes) and core for stability.",
            "Practice good lunging technique to protect your knee.",
            "Ensure good ankle flexibility and strength.",
            "Don't over-reach; use your footwork to get close to the net."
        ] 
      },
       { 
        name: "Backhand Clear & Drive Practice", 
        youtubeUrl: "https://www.youtube.com/watch?v=s5V3-j33Hw8", 
        image: "https://picsum.photos/400/311", 
        hint: "badminton backhand", 
        steps: [
            "Turn your body so your back is facing the net.",
            "Use a backhand grip (thumb on the flat side of the handle for more power).",
            "Use your forearm rotation and wrist flick to generate power.",
            "For a clear, hit the shuttle high and deep. For a drive, hit it flat and fast.",
            "The power comes from the sharp, quick rotation of the forearm and snap of the wrist."
        ], 
        commonMistakes: [
            "Using the wrong grip, which severely limits power.",
            "A weak or floppy wrist.",
            "Not turning the body enough, forcing an awkward arm-only shot.",
            "Hitting the shuttle with a 'panhandle' grip, resulting in no power."
        ], 
        injuryPrevention: [
            "The backhand can strain the shoulder and elbow if done incorrectly.",
            "Strengthen your forearm, wrist, and rotator cuff.",
            "Practice the technique with no shuttle first to get the motion right.",
            "Don't rely on a weak backhand; practice it until it becomes a weapon, not a liability."
        ] 
      },
       { 
        name: "Backhand Smash", 
        youtubeUrl: "https://www.youtube.com/watch?v=j24hCqGgI0c", 
        image: "https://picsum.photos/400/312", 
        hint: "badminton backhand smash", 
        steps: [
            "This is an advanced, high-risk shot. Master the backhand clear first.",
            "Get your body behind the shuttle and jump, turning your back to the net.",
            "Use an explosive rotation of your hips, torso, and forearm.",
            "Use a backhand grip and a very powerful wrist snap to hit down on the shuttle.",
            "This shot is about surprising your opponent with power from a defensive position."
        ], 
        commonMistakes: [
            "Attempting the shot when not in the correct position.",
            "Lack of body rotation, resulting in a weak shot.",
            "Poor timing, often resulting in hitting the net or sending the shuttle out.",
            "Sacrificing control for power."
        ], 
        injuryPrevention: [
            "Requires excellent shoulder mobility, core strength, and technique.",
            "Warm up very thoroughly before practicing this shot.",
            "Do not attempt if you have any shoulder or back injuries.",
            "Build up the power gradually. Start with backhand clears and drives first."
        ] 
      },
    ],
    "defense-drills": [
      {
        name: "Smash Defense Block",
        youtubeUrl: "https://www.youtube.com/watch?v=b2s4Y_a3bgY",
        image: "https://picsum.photos/400/313",
        hint: "badminton defense block",
        steps: [
          "Adopt a low, wide defensive stance.",
          "Hold the racket in front of you with a relaxed backhand or forehand grip.",
          "Use a very short, blocking motion to meet the shuttle early.",
          "Angle the racket face to direct the shuttle to the opponent's front court.",
          "Let the shuttle's pace do the work; don't swing."
        ],
        commonMistakes: [
          "A large backswing, which makes you late for the shot.",
          "Standing too upright and not being ready.",
          "Gripping the racket too tightly, causing the shuttle to fly out."
        ],
        injuryPrevention: [
          "Warm up your wrists and forearms properly.",
          "Strengthen your core for better stability.",
          "Practice with a slower smash first to get the timing right."
        ]
      },
      {
        name: "Drive Return Drill",
        youtubeUrl: "https://www.youtube.com/watch?v=wGk8t3yS-sQ",
        image: "https://picsum.photos/400/314",
        hint: "badminton drive return",
        steps: [
          "Have a partner feed flat, fast drives to both your forehand and backhand.",
          "Use a compact, punchy swing to return the drive.",
          "Focus on quick wrist action and keeping the shuttle low over the net.",
          "Aim for the sidelines to move your opponent."
        ],
        commonMistakes: [
          "A long, looping swing instead of a short, sharp one.",
          "Being slow to react and change grips between forehand and backhand.",
          "Lifting the shuttle, giving the opponent an easy follow-up smash."
        ],
        injuryPrevention: [
          "Warm up shoulders and wrists thoroughly.",
          "Don't over-grip the racket to avoid elbow and wrist strain.",
          "Practice footwork to ensure you are balanced for each shot."
        ]
      },
      {
        name: "Defensive Footwork",
        youtubeUrl: "https://www.youtube.com/watch?v=FjHs_pJSqV4",
        image: "https://picsum.photos/400/315",
        hint: "badminton defensive footwork",
        steps: [
          "Practice moving side-to-side using shuffle steps (chasse steps).",
          "Stay in a low center of gravity.",
          "Incorporate a split-step as your partner pretends to hit.",
          "Focus on quick, small steps for fast recovery."
        ],
        commonMistakes: [
          "Crossing your feet over, leading to trips.",
          "Standing up straight between movements.",
          "Being flat-footed instead of on the balls of your feet."
        ],
        injuryPrevention: [
          "Strengthen glutes, quads, and adductor/abductor muscles.",
          "Wear proper court shoes with good lateral support.",
          "Warm up your ankles and knees thoroughly."
        ]
      },
      {
        name: "Counter-smash Drill",
        youtubeUrl: "https://www.youtube.com/watch?v=7h4v5NzqG4k",
        image: "https://picsum.photos/400/316",
        hint: "badminton counter attack",
        steps: [
          "Have a partner feed smashes that are not too steep.",
          "Intercept the shuttle early, in front of your body.",
          "Use the opponent's pace and a firm wrist to drive the shuttle back flat and fast.",
          "The swing should be very compact and punch-like."
        ],
        commonMistakes: [
          "Trying to generate your own power with a big swing.",
          "Making contact with the shuttle too late or too far back.",
          "Lifting the shuttle instead of hitting it flat."
        ],
        injuryPrevention: [
          "This is a high-intensity drill requiring excellent reflexes.",
          "Ensure a proper warm-up to prevent wrist or shoulder injuries.",
          "A strong core is essential for the stability needed to execute this shot."
        ]
      },
      {
        name: "Continuous Lift from Smashes",
        youtubeUrl: "https://www.youtube.com/watch?v=yYyKkhK7o3k",
        image: "https://picsum.photos/400/317",
        hint: "badminton lift defense",
        steps: [
          "Have a partner smash continuously at you.",
          "Your goal is to defend by lifting the shuttle high and deep to the opponent's back court.",
          "Focus on getting your body behind the shuttle and using a full lifting motion.",
          "This drill builds defensive stamina and consistency."
        ],
        commonMistakes: [
          "Lifting the shuttle short, which invites another smash.",
          "Not getting low enough to get under the shuttle.",
          "Fatiguing and letting your form break down."
        ],
        injuryPrevention: [
          "This is an endurance drill; listen to your body and stop if you feel pain.",
          "Proper lifting technique is crucial to avoid shoulder strain.",
          "Ensure good footwork to get into position, reducing the need to reach."
        ]
      },
      {
        name: "Half-court Defense with Partner Attack",
        youtubeUrl: "https://www.youtube.com/watch?v=hV8X3V0-Ahc",
        image: "https://picsum.photos/400/318",
        hint: "badminton half court defense",
        steps: [
          "You are confined to one half of the court (e.g., forehand side).",
          "Your partner can hit any shot (smash, drop, drive) into that half.",
          "Your goal is to defend every shot and keep the rally going.",
          "This improves your ability to cover a specific area under pressure."
        ],
        commonMistakes: [
          "Anticipating the shot instead of reacting.",
          "Poor recovery back to the center of your zone.",
          "Making weak returns that are easy for your partner to put away."
        ],
        injuryPrevention: [
          "This is a high-intensity drill; ensure a full warm-up.",
          "Communicate with your partner about the intensity of their attack.",
          "Be mindful of fatigue to prevent injuries from poor form."
        ]
      }
    ],
    "reaction-reflex-training": [
        {
            name: "Multi-shuttle Rapid Fire Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/319",
            hint: "badminton multi shuttle",
            steps: [
                "Have a coach or partner feed a high volume of shuttles quickly to different corners.",
                "Focus on reacting, playing a shot, and recovering to the center as fast as possible.",
                "The goal is not to hit winners, but to return every shuttle.",
                "This drill improves stamina, reaction speed, and recovery.",
            ],
            commonMistakes: [
                "Not returning to the central base position.",
                "Getting frustrated and letting form break down.",
                "Anticipating the feed instead of reacting.",
            ],
            injuryPrevention: [
                "This is a very high-intensity drill; ensure you are exceptionally well-warmed up.",
                "Stay hydrated and take breaks when needed.",
                "Communicate with your feeder about the pace.",
            ]
        },
        {
            name: "Random Shuttle Toss Reaction Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/320",
            hint: "badminton random toss",
            steps: [
                "Stand in a ready position.",
                "A partner stands behind you and tosses a shuttle over your head into a random court position.",
                "React as soon as you see the shuttle, turn, and play an appropriate shot.",
                "Improves awareness and reaction to unexpected shots.",
            ],
            commonMistakes: [
                "Turning too slowly.",
                "Misjudging the shuttle's trajectory.",
                "Being flat-footed and slow to start.",
            ],
            injuryPrevention: [
                "Ensure the area is clear to avoid collisions.",
                "Practice turning and footwork without the shuttle first.",
            ]
        },
        {
            name: "Wall Rally Reflex",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/321",
            hint: "badminton wall rally",
            steps: [
                "Stand a few feet from a flat wall.",
                "Hit the shuttle against the wall and try to rally with yourself.",
                "Focus on quick wrist snaps and short, controlled movements.",
                "Try to increase the pace and keep the rally going as long as possible.",
            ],
            commonMistakes: [
                "Standing too far or too close to the wall.",
                "Using large swings instead of quick wrist actions.",
                "Losing control of the shuttle's height.",
            ],
            injuryPrevention: [
                "Warm up your wrist and forearm thoroughly.",
                "Start slowly to get a feel for the rebound.",
            ]
        },
        {
            name: "Partner Drive Rally",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/322",
            hint: "badminton drive rally",
            steps: [
                "Stand mid-court with a partner.",
                "Engage in a continuous rally of flat, fast drives.",
                "Focus on quick hand-eye coordination, grip changes, and short swings.",
                "This improves reflexes in fast, flat exchanges.",
            ],
            commonMistakes: [
                "Lifting the shuttle, ending the drive rally.",
                "Slow grip changes between forehand and backhand.",
                "Long backswings.",
            ],
            injuryPrevention: [
                "Warm up wrists, elbows, and shoulders.",
                "Agree on a controlled pace with your partner.",
            ]
        },
        {
            name: "Reaction Ball Catch Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/323",
            hint: "reaction ball drill",
            steps: [
                "Use a reaction ball (a six-sided rubber ball).",
                "Bounce it off a wall or have a partner throw it.",
                "React to the unpredictable bounce and catch it.",
                "Improves hand-eye coordination and reaction to unexpected directions.",
            ],
            commonMistakes: [
                "Guessing the direction instead of reacting.",
                "Being flat-footed.",
            ],
            injuryPrevention: [
                "Use in a clear, open space.",
                "Start with gentle throws before increasing speed.",
            ]
        },
        {
            name: "Random Smash & Drop Return Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
            image: "https://picsum.photos/400/324",
            hint: "badminton smash drop return",
            steps: [
                "A feeder on the other side will randomly play either a smash or a drop shot.",
                "Stay in a ready position, prepared for either shot.",
                "Focus on the feeder's body language and swing to anticipate.",
                "React with the correct defensive shot: a lift/block for a smash, or a net shot/lift for a drop.",
            ],
            commonMistakes: [
                "Anticipating the wrong shot and being caught out of position.",
                "Being too far back for a drop shot or too far forward for a smash.",
                "A slow split-step.",
            ],
            injuryPrevention: [
                "Requires good physical conditioning.",
                "Ensure a thorough warm-up of all major joints.",
            ]
        },
    ],
};
