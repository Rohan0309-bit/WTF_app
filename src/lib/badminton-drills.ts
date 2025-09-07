
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
    "Footwork Drills": [
      { 
        name: "Basic Court Movement (Shadow Footwork)", 
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
    "Stroke Training": [
      { 
        name: "Mastering the Smash", 
        youtubeUrl: "https://www.youtube.com/watch?v=3-cQ2n_m2-M", 
        image: "https://picsum.photos/400/300", 
        hint: "badminton smash", 
        steps: [
            "Get behind the shuttlecock.",
            "Use a full arm rotation and snap your wrist at the point of impact.",
            "Hit the shuttlecock at its highest point.",
            "Follow through completely."
        ], 
        commonMistakes: [
            "Using only arm strength, not the whole body.",
            "Hitting the shuttlecock too late.",
            "Poor follow-through affecting recovery."
        ], 
        injuryPrevention: [
            "Warm up your shoulder and rotator cuff.",
            "Avoid overusing the smash.",
            "Ensure proper technique to prevent shoulder impingement."
        ] 
      },
    ],
    "Defense Drills": [
        { 
          name: "Defensive Lifts and Blocks", 
          youtubeUrl: "https://www.youtube.com/watch?v=b2s4Y_a3bgY", 
          image: "https://picsum.photos/400/300", 
          hint: "badminton defense", 
          steps: [
              "Stay low and on your toes.",
              "Use a short backswing for blocks.",
              "For lifts, get under the shuttlecock and push it high and deep.",
              "Practice returning smashes from a partner."
          ], 
          commonMistakes: [
              "Standing too upright.",
              "A long backswing on defensive shots.",
              "Not getting back to the center."
          ], 
          injuryPrevention: [
              "Strengthen your core for stability.",
              "Practice good footwork to avoid awkward lunges.",
              "Warm up wrists and forearms."
          ] 
        },
    ],
    "Reaction & Reflex Training": [
        { 
          name: "Wall Rally Drill", 
          youtubeUrl: "https://www.youtube.com/watch?v=Jg_c-gQ1j2o", 
          image: "https://picsum.photos/400/300", 
          hint: "badminton reaction", 
          steps: [
              "Stand a short distance from a solid wall.",
              "Rally the shuttlecock against the wall as many times as you can.",
              "Focus on quick wrist action and short, controlled strokes.",
              "Vary the angle and speed."
          ], 
          commonMistakes: [
              "Standing too far from the wall.",
              "Using large swings instead of quick taps.",
              "Poor concentration."
          ], 
          injuryPrevention: [
              "Ensure the area is clear of obstacles.",
              "Warm up your eyes and hands.",
              "Don't overdo it to avoid wrist strain."
          ] 
        },
    ]
};
