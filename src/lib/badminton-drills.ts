
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
        name: "Four-Corner Footwork Drill",
        youtubeUrl: "https://youtube.com/dummy1",
        image: "https://picsum.photos/seed/bfd1/400/300",
        hint: "badminton footwork",
        steps: [
            "Start at the center base in a ready stance.",
            "Move explosively to the front-right corner, play a shadow net shot, and recover to the center.",
            "Move to the front-left corner, shadow a net shot, and recover.",
            "Move to the back-right corner, shadow a clear or smash, and recover.",
            "Move to the back-left corner, shadow a clear or smash, and recover.",
            "Focus on using correct footwork (chasse, lunge, shuffle) for each corner."
        ],
        commonMistakes: [
            "Not returning to the center base after each corner.",
            "Standing up straight instead of staying low and balanced.",
            "Taking large, slow steps instead of small, quick ones.",
        ],
        injuryPrevention: [
            "Warm up ankles, knees, and hips thoroughly.",
            "Wear proper court shoes with good grip and cushioning.",
            "Maintain a low center of gravity to reduce stress on joints.",
        ]
    },
    {
        name: "Ladder Quick-Feet Drill",
        youtubeUrl: "https://youtube.com/dummy2",
        image: "https://picsum.photos/seed/bfd2/400/300",
        hint: "agility ladder",
        steps: [
            "Lay an agility ladder on the court.",
            "Perform various footwork patterns through the ladder, such as one foot in each square, two feet in each square, and lateral shuffles.",
            "Focus on speed, precision, and keeping your feet light.",
            "Keep your head up and arms moving for balance."
        ],
        commonMistakes: [
            "Tripping on the ladder rungs.",
            "Looking down at your feet instead of forward.",
            "Heavy, stomping steps that slow you down.",
        ],
        injuryPrevention: [
            "Start slowly to master the patterns before increasing speed.",
            "Ensure the ladder is flat and secure on the floor.",
        ]
    },
    {
        name: "Split-Step & Explosive Lunge",
        youtubeUrl: "https://youtube.com/dummy3",
        image: "https://picsum.photos/seed/bfd3/400/300",
        hint: "badminton split-step",
        steps: [
            "Stand in a ready position.",
            "As your opponent is about to hit the shuttle, perform a small hop (the split-step), landing with feet wide.",
            "From the split-step, immediately push off explosively in the direction of the shuttle.",
            "Execute a controlled lunge to play the shot.",
            "Push back to the center base."
        ],
        commonMistakes: [
            "Timing the split-step too early or too late.",
            "A weak push-off after the split-step.",
            "Over-lunging and losing balance.",
        ],
        injuryPrevention: [
            "Strengthen calves and quads for a powerful split-step.",
            "Practice controlled lunges to avoid knee strain.",
        ]
    },
    {
        name: "Shadow Footwork Circuit",
        youtubeUrl: "https://youtube.com/dummy4",
        image: "https://picsum.photos/seed/bfd4/400/300",
        hint: "badminton shadow circuit",
        steps: [
            "Set up a circuit moving between all six corners of the court without a shuttle.",
            "Move to the front-right corner (net shot), recover to center.",
            "Move to the back-left corner (clear), recover to center.",
            "Move to the side-left (drive), recover to center.",
            "Continue this pattern, mixing up the corners randomly.",
            "Maintain a high intensity and focus on perfect form for the duration.",
        ],
        commonMistakes: [
            "Slowing down as fatigue sets in.",
            "Taking shortcuts and not returning fully to the center.",
            "Lazy or incorrect footwork patterns.",
        ],
        injuryPrevention: [
            "This is a high-endurance drill; ensure you are well-conditioned.",
            "Stay hydrated and listen to your body.",
        ]
    },
    {
        name: "Butterfly Movement Drill",
        youtubeUrl: "https://youtube.com/dummy5",
        image: "https://picsum.photos/seed/bfd5/400/300",
        hint: "badminton butterfly drill",
        steps: [
            "Start at the center.",
            "Move to the front-right corner, then diagonally back to the back-left corner.",
            "Recover to the center.",
            "Move to the front-left corner, then diagonally back to the back-right corner.",
            "This creates a 'butterfly wing' pattern and improves diagonal movement."
        ],
        commonMistakes: [
            "Poor balance when moving diagonally backward.",
            "Not recovering to the center between butterfly wings.",
            "Inefficient footwork on the diagonal transition.",
        ],
        injuryPrevention: [
            "Requires good core strength for stability during diagonal movements.",
            "Warm up hips and groin area well.",
        ]
    },
    {
        name: "V-Shape Front-Court Movement",
        youtubeUrl: "https://youtube.com/dummy6",
        image: "https://picsum.photos/seed/bfd6/400/300",
        hint: "badminton front court",
        steps: [
            "Start at the center base, slightly back.",
            "Move forward to the front-right corner for a shot.",
            "Push back diagonally to your starting base.",
            "Move forward to the front-left corner for a shot.",
            "Push back diagonally to your starting base.",
            "The movement creates a 'V' shape.",
        ],
        commonMistakes: [
            "Pushing straight back instead of diagonally, which is slower.",
            "Not getting low enough for the front-court shots.",
            "A slow recovery push.",
        ],
        injuryPrevention: [
            "Focus on a powerful push-off from the lunging leg.",
            "Keep your core engaged to protect your back during recovery.",
        ]
    },
    {
        name: "Rear-Court Shuffle Drill",
        youtubeUrl: "https://youtube.com/dummy7",
        image: "https://picsum.photos/seed/bfd7/400/300",
        hint: "badminton rear court",
        steps: [
            "Start at the back-right corner.",
            "Use shuffle steps to move laterally across the rear court to the back-left corner.",
            "Stay low and on the balls of your feet.",
            "At each corner, perform a shadow swing for an overhead shot.",
            "Shuffle back to the starting corner.",
        ],
        commonMistakes: [
            "Standing up straight during the shuffle.",
            "Crossing feet, which is slower and less stable.",
            "Being flat-footed.",
        ],
        injuryPrevention: [
            "Strengthen hip abductors and adductors for stable lateral movement.",
            "Keep your knees slightly bent to absorb impact.",
        ]
    },
    {
        name: "Six-Point Footwork Routine",
        youtubeUrl: "https://youtube.com/dummy8",
        image: "https://picsum.photos/seed/bfd8/400/300",
        hint: "badminton six point",
        steps: [
            "This drill covers all six corners of the court in a set sequence.",
            "Move: center -> front-right -> center -> front-left -> center.",
            "Then move: center -> side-right -> center -> side-left -> center.",
            "Finally move: center -> back-right -> center -> back-left -> center.",
            "Focus on efficiency and quick recovery after each shot."
        ],
        commonMistakes: [
            "Anticipating the next corner and not fully recovering to the center.",
            "Using the wrong footwork for a specific corner (e.g., wrong lunge foot).",
            "A drop in intensity as the sequence progresses.",
        ],
        injuryPrevention: [
            "This is a comprehensive drill; build up to it.",
            "Ensure a thorough warm-up of all lower body joints.",
        ]
    },
    {
        name: "Base-Recovery Reflex Drill",
        youtubeUrl: "https://youtube.com/dummy9",
        image: "https://picsum.photos/seed/bfd9/400/300",
        hint: "badminton reflex drill",
        steps: [
            "Stand at the center base.",
            "Have a partner point to a random corner.",
            "Explode to that corner, perform a shadow swing, and recover to the base as quickly as possible.",
            "The goal is to minimize the time from the cue to your recovery to the base.",
        ],
        commonMistakes: [
            "A slow initial reaction to the cue.",
            "A lazy recovery back to the center.",
            "Poor balance when stopping and changing direction.",
        ],
        injuryPrevention: [
            "Requires high levels of concentration.",
            "The unpredictable nature means you must be well-warmed up to prevent strains.",
        ]
    },
    {
        name: "Reaction Split-Step Challenge",
        youtubeUrl: "https://youtube.com/dummy10",
        image: "https://picsum.photos/seed/bfd10/400/300",
        hint: "badminton split-step challenge",
        steps: [
            "Stand in a ready position.",
            "Have a partner give a sudden cue (like clapping or shouting 'NOW!').",
            "On the cue, immediately perform a split-step.",
            "For an advanced version, the partner can point in a direction simultaneously with the cue, forcing you to split-step and then move.",
        ],
        commonMistakes: [
            "Reacting slowly to the cue.",
            "A small, ineffective split-step that doesn't lower your center of gravity.",
            "Being tense instead of relaxed and ready.",
        ],
        injuryPrevention: [
            "This drill trains neural pathways. Start with simple cues.",
            "Ensure your landing from the split-step is balanced and controlled.",
        ]
    }
  ],
  "stroke-training": [
    {
        name: "Clear Shot Practice",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=57",
        hint: "badminton clear shot",
        steps: [
            "Have a partner feed you high shuttles.",
            "Get behind the shuttle, turn your body sideways, and use a full arm swing.",
            "Contact the shuttle at the highest possible point.",
            "Use your wrist snap and forearm rotation to generate power.",
            "Aim for the shuttle to land deep in the opponent's backcourt."
        ],
        commonMistakes: [
            "Using only the arm and not rotating the body.",
            "Hitting the shuttle when it's too low or too far in front.",
            "A weak wrist snap, resulting in a short clear.",
        ],
        injuryPrevention: [
            "Properly warm up your shoulder, elbow, and wrist.",
            "Strengthen your rotator cuff to prevent shoulder injuries.",
            "Focus on smooth technique rather than muscling the shot.",
        ]
    },
    {
        name: "Drop Shot Control",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=58",
        hint: "badminton drop shot",
        steps: [
            "Use the same preparation as a smash or clear to deceive your opponent.",
            "At the last moment, slow down your arm swing.",
            "Gently 'slice' or tap the shuttle, aiming for it to just tumble over the net.",
            "Focus on placement and making the opponent move forward.",
        ],
        commonMistakes: [
            "Slowing down the arm swing too early, making the shot obvious.",
            "Hitting the shuttle into the net.",
            "Hitting the drop shot too high or too deep, making it easy to attack.",
        ],
        injuryPrevention: [
            "This is a touch shot; avoid jerky motions that can strain the wrist or elbow.",
            "Good footwork is key to get into position without rushing the shot.",
        ]
    },
  ],
  "defense-drills": [
     {
        name: "Smash Defense Drill",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=59",
        hint: "badminton smash defense",
        steps: [
            "Have a partner smash shuttles at you from the other side.",
            "Adopt a low, wide defensive stance.",
            "Hold your racquet in front of you, ready for a backhand or forehand defense.",
            "Use a short, blocking motion to lift the shuttle high and deep.",
            "Focus on absorbing the power of the smash.",
        ],
        commonMistakes: [
            "Trying to take a full swing at the shuttle.",
            "Standing up straight, reducing reaction time.",
            "A loose grip, causing the racquet to be pushed back by the force of the smash.",
        ],
        injuryPrevention: [
            "Wear eye protection if the smasher is powerful or inconsistent.",
            "Stay on the balls of your feet to react quickly and avoid awkward lunges.",
        ]
    },
    {
        name: "Block & Net Recovery",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=60",
        hint: "badminton block recovery",
        steps: [
            "A partner smashes a shuttle at you.",
            "Perform a block defense that drops the shuttle just over the net.",
            "Immediately rush forward to the net to cover the return.",
            "Be ready to play a net shot or lift the shuttle again.",
        ],
        commonMistakes: [
            "Watching your block shot instead of recovering immediately.",
            "Being slow to move to the net.",
            "Popping the block up too high, making it an easy kill for the opponent.",
        ],
        injuryPrevention: [
            "Requires explosive forward movement. Warm up your calves and Achilles tendons.",
            "Stay balanced to prevent falls or stumbles when rushing the net.",
        ]
    },
  ],
  "reaction-reflex-training": [
    {
        name: "Multi-shuttle Rapid Fire Drill",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=61",
        hint: "badminton multi-shuttle",
        steps: [
            "A coach or partner stands on the other side with many shuttles.",
            "They will feed shuttles rapidly to different corners of your court.",
            "Your goal is to return every shuttle, focusing on quick recovery and racquet readiness.",
            "This drill builds stamina, reaction speed, and muscle memory."
        ],
        commonMistakes: [
            "Not returning to a central ready position after each shot.",
            "Getting frustrated and form breaking down.",
            "Taking full swings instead of using short, efficient shots."
        ],
        injuryPrevention: [
            "This is a high-intensity drill; ensure you are physically well-conditioned.",
            "Stay hydrated and take breaks when fatigue sets in.",
            "Focus on efficient footwork to reduce stress on joints."
        ]
    },
    {
        name: "Random Shuttle Toss Reaction Drill",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=62",
        hint: "badminton reaction toss",
        steps: [
            "Stand in the center of the court.",
            "A partner stands behind you and tosses shuttles over your head into random locations.",
            "As soon as you see the shuttle, you must react, move to it, and play an appropriate shot.",
            "This drill forces pure reaction without anticipating the shot."
        ],
        commonMistakes: [
            "Turning around too slowly to see the shuttle.",
            "Being flat-footed and slow to move.",
            "Poor shot selection due to being rushed."
        ],
        injuryPrevention: [
            "Ensure the court is clear of any obstacles.",
            "Requires quick pivots and turns; warm up your core and hips well."
        ]
    },
    {
        name: "Wall Rally Reflex",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=63",
        hint: "badminton wall rally",
        steps: [
            "Stand a few feet from a flat wall.",
            "Hit a shuttle against the wall and try to play a continuous rally with yourself.",
            "Focus on using your wrist and short, quick racquet movements.",
            "This drill dramatically improves hand-eye coordination and reflex speed."
        ],
        commonMistakes: [
            "Standing too far or too close to the wall.",
            "Trying to hit the shuttle too hard.",
            "Using large arm swings instead of quick wrist snaps."
        ],
        injuryPrevention: [
            "A very wrist-intensive drill. Warm up your wrist and forearm thoroughly.",
            "Start slowly and build up speed as your control improves."
        ]
    },
    {
        name: "Partner Drive Rally",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=64",
        hint: "badminton drive rally",
        steps: [
            "Stand at mid-court with a partner opposite you.",
            "Engage in a fast-paced rally of flat, hard drives directly at each other.",
            "Focus on quick racquet preparation and a short, punchy swing.",
            "The goal is to keep the rally going at a high speed for as long as possible."
        ],
        commonMistakes: [
            "Lifting the shuttle too high, ending the drive rally.",
            "A slow backswing, not being ready for the next shot.",
            "Not moving your feet to adjust to the shuttle's position."
        ],
        injuryPrevention: [
            "This drill can be intense on the elbow and shoulder; ensure a good warm-up.",
            "Agree on a comfortable pace with your partner before starting."
        ]
    },
    {
        name: "Reaction Ball Catch Drill",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=65",
        hint: "badminton reaction ball",
        steps: [
            "This is an off-court drill. Use a reaction ball (a small, unevenly shaped ball).",
            "Drop the ball on a hard surface and try to catch it after it takes an unpredictable bounce.",
            "Practice with both your dominant and non-dominant hands.",
            "This drill trains your eyes to react quickly to unpredictable movements."
        ],
        commonMistakes: [
            "Anticipating the bounce instead of reacting to it.",
            "Being flat-footed.",
            "Not tracking the ball all the way into your hand."
        ],
        injuryPrevention: [
            "Perform in a clear, open space.",
            "Can be done as part of a warm-up to activate the nervous system."
        ]
    },
    {
        name: "Random Smash & Drop Return Drill",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/400/300?random=66",
        hint: "badminton random return",
        steps: [
            "Have a partner on the other side of the net in a position to either smash or play a drop shot.",
            "Your partner will feed you a high lift.",
            "You must hold your defensive position, ready for either shot, and react accordingly.",
            "If they smash, play a defensive lift. If they drop, rush forward and play a net shot."
        ],
        commonMistakes: [
            "Leaning too far back, making you slow to react to a drop shot.",
            "Being too far forward, making you vulnerable to a smash.",
            "Guessing the shot instead of reacting to the opponent's body language and swing."
        ],
        injuryPrevention: [
            "This is a game-simulation drill. Maintain focus to be ready for explosive movements.",
            "Proper warm-up is crucial to prevent strains from sudden lunges or jumps."
        ]
    }
  ]
};

    
