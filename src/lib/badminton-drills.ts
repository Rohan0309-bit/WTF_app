
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
        youtubeUrl: "https://youtu.be/fBa08o5GEqw?si=qVxDrWgGl_OEHG5J",
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
        youtubeUrl: "https://youtube.com/shorts/QjuKzU3DXIs?si=MupdiCXsUlAt4iAk",
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
        youtubeUrl: "https://youtu.be/gy4YZS5tGxE?si=4CoQjtEsNTiejfDS",
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
        youtubeUrl: "https://youtu.be/a7ajExQKOvY?si=h25smfFmcqbJyYC8",
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
        name: "Base-Recovery Reflex Drill",
        youtubeUrl: "https://youtube.com/shorts/dHmxqgsjZnE?si=zfxT4a8790if6ee7",
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
        youtubeUrl: "https://youtu.be/D9rfB26cqQM?si=iDek88mi7RcxmYcK",
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
        name: "Power Forehand Smash",
        youtubeUrl: "https://youtu.be/Px5XUqcvyXc?si=ahixY9tCwG9iWp95",
        image: "https://picsum.photos/seed/pfs1/400/300",
        hint: "badminton smash",
        steps: [
            "Get into position behind and under the shuttle.",
            "Rotate your body, bringing your non-racquet arm up for balance.",
            "Swing with a full, fast arm motion, leading with the elbow.",
            "Contact the shuttle at the highest possible point.",
            "Snap your wrist downwards upon impact for maximum power.",
            "Follow through completely."
        ],
        commonMistakes: [
            "Not using body rotation, relying only on arm strength.",
            "Contacting the shuttle too late or too low.",
            "A weak wrist snap, resulting in a slow smash.",
        ],
        injuryPrevention: [
            "Properly warm up your shoulder and core.",
            "Strengthen your rotator cuff to prevent injuries.",
            "Focus on technique to generate power, not just brute force.",
        ]
    },
    {
        name: "Precision Drop Shot",
        youtubeUrl: "https://youtu.be/u--taRfMoTs?si=hgC2_CrRvmPR_jAZ",
        image: "https://picsum.photos/seed/pds2/400/300",
        hint: "badminton drop",
        steps: [
            "Use the same preparation as a smash or clear to deceive your opponent.",
            "At the last moment, slow down the racquet head speed.",
            "Gently slice or tap the shuttle with control.",
            "Aim for the shuttle to tumble just over the net.",
            "Focus on placement, forcing the opponent to move forward quickly."
        ],
        commonMistakes: [
            "Revealing the shot too early by slowing down the entire arm motion.",
            "Hitting the shuttle into the net.",
            "The drop shot being too high or deep, creating an easy return for the opponent.",
        ],
        injuryPrevention: [
            "This is a touch shot; avoid sudden, jerky motions.",
            "Ensure good footwork to get into position without rushing.",
        ]
    },
    {
        name: "Backhand Drive Blast",
        youtubeUrl: "https://youtube.com/shorts/6-OYUvME5Cs?si=4gBfFb1liF7GD7nW",
        image: "https://picsum.photos/seed/bdb3/400/300",
        hint: "badminton backhand",
        steps: [
            "Use a backhand grip, with your thumb placed on the flat side of the handle for support.",
            "Keep the swing short, quick, and in front of your body.",
            "Use a punching motion, powered by forearm rotation and thumb push.",
            "Contact the shuttle early and at a comfortable height.",
            "Aim for a flat trajectory low over the net."
        ],
        commonMistakes: [
            "Taking a large backswing, which is too slow.",
            "Using a forehand grip.",
            "Hitting the shuttle upwards, creating a lift instead of a drive.",
        ],
        injuryPrevention: [
            "Warm up your wrist and forearm extensively.",
            "Strengthen your thumb and forearm muscles.",
        ]
    },
    {
        name: "Controlled Backhand Drop",
        youtubeUrl: "https://youtu.be/ox5z5dJUL6A?si=bPW7VZV2DUZFCL-C",
        image: "https://picsum.photos/seed/cbd4/400/300",
        hint: "badminton backhand drop",
        steps: [
            "Prepare as if you are hitting a backhand clear or drive.",
            "Use a backhand grip.",
            "Just before contact, open the racquet face and gently guide or slice the shuttle.",
            "Use minimal force, letting the shuttle's pace do some of the work.",
            "Aim for the shuttle to drop tightly over the net."
        ],
        commonMistakes: [
            "Hitting the shuttle too hard, sending it deep.",
            "Not getting the racquet face angled correctly, pushing the shuttle wide.",
            "Poor deception, making the shot obvious.",
        ],
        injuryPrevention: [
            "Requires good touch and feel; don't force the shot.",
        ]
    },
    {
        name: "Explosive Backhand Smash",
        youtubeUrl: "https://youtu.be/-0qCrO6FdOA?si=E97OFIHo3KUvudUh",
        image: "https://picsum.photos/seed/ebs5/400/300",
        hint: "badminton backhand smash",
        steps: [
            "This is an advanced shot requiring exceptional timing and power.",
            "Get your body behind the shuttle quickly.",
            "Use a powerful rotation of your forearm and a strong thumb push.",
            "Contact the shuttle high and in front of you.",
            "Follow through with a sharp, downward snap of the wrist."
        ],
        commonMistakes: [
            "Attempting this shot when not in a good position.",
            "A weak forearm rotation leading to a slow shot.",
            "Poor timing, resulting in a mishit.",
        ],
        injuryPrevention: [
            "Requires significant wrist and forearm strength.",
            "Warm up thoroughly as this is a high-stress shot on the arm.",
        ]
    },
    {
        name: "Defensive Backhand Lift",
        youtubeUrl: "https://youtube.com/shorts/BkFIhm_Klis?si=9OCFQ3JzcgGJlrSQ",
        image: "https://picsum.photos/seed/dbl6/400/300",
        hint: "badminton backhand lift",
        steps: [
            "Get low to the ground.",
            "Use a backhand grip.",
            "Swing from low to high, getting under the shuttle.",
            "Use your forearm and wrist to lift the shuttle high and deep to the opponent's backcourt.",
            "The goal is to give yourself time to recover."
        ],
        commonMistakes: [
            "Not getting low enough, resulting in hitting the net.",
            "A flat lift that can be easily smashed.",
            "Not lifting the shuttle deep enough.",
        ],
        injuryPrevention: [
            "Requires good flexibility in the legs and back.",
            "Avoid jerky lifting motions that can strain the wrist.",
        ]
    },
    {
        name: "Deceptive Cross Net Shot",
        youtubeUrl: "https://youtu.be/1p0Nv5-90e8?si=6w6iHVZ7lIGmMXpw",
        image: "https://picsum.photos/seed/dcns7/400/300",
        hint: "badminton net shot",
        steps: [
            "Approach the net as if you are playing a straight net shot.",
            "At the last second, change the angle of your racquet face.",
            "Slice the shuttle laterally across the net.",
            "Keep the shuttle as tight to the net as possible.",
            "Follow the shuttle's path with your racquet to be ready for the return."
        ],
        commonMistakes: [
            "Hitting the net.",
            "The shot being too high, allowing the opponent to kill it.",
            "Making the deception too obvious by changing the racquet angle too early.",
        ],
        injuryPrevention: [
            "Requires precise footwork to get into position without touching the net.",
        ]
    },
    {
        name: "Quick Reaction Net Kill",
        youtubeUrl: "https://youtu.be/BIZ6PJ8z5Uo?si=KhWqvKxsIO8xAZZB",
        image: "https://picsum.photos/seed/qrnk8/400/300",
        hint: "badminton net kill",
        steps: [
            "Hold your racquet up and in front of you when at the net.",
            "If the opponent's return is high, react quickly.",
            "Use a short, sharp, downward tapping motion.",
            "There is no backswing; it's a pure reaction shot.",
            "Aim straight down into the opponent's court."
        ],
        commonMistakes: [
            "Taking a backswing, which is too slow.",
            "Hitting the shuttle into the net.",
            "Hitting the shuttle out the back if the angle is wrong.",
        ],
        injuryPrevention: [
            "Stay balanced on the balls of your feet.",
            "Be prepared for fast exchanges to avoid being hit by the shuttle or racquet.",
        ]
    },
    {
        name: "High-Impact Jump Smash",
        youtubeUrl: "https://youtu.be/5Z6Y5SEb08Y?si=bi1n27X7eMUDJh_f",
        image: "https://picsum.photos/seed/hijs9/400/300",
        hint: "badminton jump smash",
        steps: [
            "Use explosive footwork to get behind the shuttle.",
            "Jump vertically using a two-footed takeoff.",
            "Arch your back and bring your hitting arm into a 'bow and arrow' position.",
            "Contact the shuttle at the absolute peak of your jump.",
            "Use your core and a full arm swing to generate maximum power.",
            "Land safely on both feet."
        ],
        commonMistakes: [
            "Mistiming the jump and hitting the shuttle on the way down.",
            "Drifting forward into the net while jumping.",
            "Not getting a full body rotation, losing power.",
        ],
        injuryPrevention: [
            "This is a very athletic move; ensure you have a strong core and legs.",
            "Practice proper landing techniques to absorb impact and protect your knees and ankles.",
            "Do not overuse this shot to prevent shoulder injuries.",
        ]
    }
  ],
  "defense-drills": [
    {
        name: "Wall Defense Rally",
        youtubeUrl: "https://youtu.be/RB28Owopbno?si=OI31HT9q6MtdtBBh",
        image: "https://picsum.photos/seed/bdd1/400/300",
        hint: "badminton wall defense",
        steps: [
            "Stand a few feet from a solid wall.",
            "Hit the shuttle against the wall and try to maintain a continuous rally.",
            "Focus on short, quick, defensive pushes and blocks.",
            "This drill sharpens reflexes and hand-eye coordination in a small space."
        ],
        commonMistakes: [
            "Trying to swing too hard, losing control.",
            "Standing too close or too far from the wall.",
            "Using a loose wrist instead of a firm, controlled block."
        ],
        injuryPrevention: [
            "Warm up your wrist and forearm.",
            "Use a durable shuttle as this can wear them out quickly.",
        ]
    },
    {
        name: "Quick Reflex Block",
        youtubeUrl: "https://www.youtube.com/watch?v=your-link-here",
        image: "https://picsum.photos/seed/bdd2/400/300",
        hint: "badminton reflex block",
        steps: [
            "Have a partner stand on the other side of the net and smash shuttles directly at your body.",
            "Adopt a low, wide stance with your racquet in front of you.",
            "Your goal is not to swing, but to use the racquet as a shield to block the shuttle back over the net.",
            "Focus on quick reactions and absorbing the power of the smash."
        ],
        commonMistakes: [
            "Swinging at the shuttle, leading to an uncontrolled return.",
            "Having a slow reaction time due to poor ready position.",
            "A weak grip, causing the racquet to be pushed back by the force of the smash."
        ],
        injuryPrevention: [
            "Wear protective eyewear.",
            "Partner should start with controlled smashes before increasing power.",
        ]
    },
    {
        name: "Backcourt Recovery Drill",
        youtubeUrl: "https://youtu.be/UkGG10sDGxs?si=gtfTYLf2qKESG_QT",
        image: "https://picsum.photos/seed/bdd3/400/300",
        hint: "badminton backcourt recovery",
        steps: [
            "Start at the net.",
            "Have a partner lift a shuttle deep into one of the back corners.",
            "Quickly turn and run using appropriate footwork (cross-over steps) to get behind the shuttle.",
            "Play a defensive clear or drop shot and immediately recover to the center base.",
        ],
        commonMistakes: [
            "Back-pedaling instead of turning and running, which is much slower.",
            "Being off-balance when hitting the shot.",
            "A slow or lazy recovery after the shot."
        ],
        injuryPrevention: [
            "Requires good court awareness to avoid tripping.",
            "Warm up hips and groin for the quick turning motion.",
        ]
    },
    {
        name: "Drive Counter Challenge",
        youtubeUrl: "https://youtu.be/sr2pxJkZPk4?si=gc813rxNE9C-yxIA",
        image: "https://picsum.photos/seed/bdd4/400/300",
        hint: "badminton drive counter",
        steps: [
            "Engage in a fast, flat drive rally with a partner at mid-court.",
            "Focus on a short, punchy swing, using your wrist and forearm.",
            "Keep your racquet up and ready at all times.",
            "Try to change the direction of the drive to keep your partner off balance.",
        ],
        commonMistakes: [
            "Taking a big swing, which is too slow for a drive rally.",
            "Lifting the shuttle up, turning it into a defensive shot.",
            "Being flat-footed and not adjusting to the shuttle's position."
        ],
        injuryPrevention: [
            "High-intensity drill for the wrist and elbow; ensure a proper warm-up.",
            "Agree on a controlled pace with your partner to start.",
        ]
    },
    {
        name: "Shadow Defense Footwork",
        youtubeUrl: "https://youtu.be/GSI1eC0HZW8?si=8UVMiXv6cx0cmvJi",
        image: "https://picsum.photos/seed/bdd5/400/300",
        hint: "badminton defense footwork",
        steps: [
            "From a central base, practice the footwork for all defensive shots.",
            "Lunge forward for a net shot defense.",
            "Take a wide stance and get low for a smash defense.",
            "Shuffle sideways for a drive defense.",
            "Perform all movements without a shuttle, focusing on perfect, efficient form."
        ],
        commonMistakes: [
            "Not maintaining a low center of gravity.",
            "Incorrect footwork patterns for different defensive scenarios.",
            "Slow recovery back to the central base."
        ],
        injuryPrevention: [
            "Focus on technique to build good habits and prevent strain.",
            "Strengthen core and leg muscles to support the low stances.",
        ]
    },
    {
        name: "Reaction Net Defense",
        youtubeUrl: "https://youtube.com/shorts/QtRZXTXEgMA?si=BRLxOdpb325-PRMx",
        image: "https://picsum.photos/seed/bdd6/400/300",
        hint: "badminton net defense",
        steps: [
            "Stand near the net with your racquet up.",
            "Have a partner play quick, unpredictable shots towards the net (net kills, pushes, tumbles).",
            "Your goal is to react and get the shuttle back over the net, either with a block, a lift, or another net shot.",
            "This improves reflexes in fast, front-court exchanges."
        ],
        commonMistakes: [
            "Dropping your racquet, leading to slow reaction time.",
            "Trying to do too much with the shuttle instead of just returning it.",
            "Being flat-footed and unable to adjust."
        ],
        injuryPrevention: [
            "Stay on the balls of your feet.",
            "High concentration is needed to avoid getting hit by the shuttle or racquet.",
        ]
    },
    {
        name: "Lift & Recover Drill",
        youtubeUrl: "https://youtu.be/yRLtypZzJ1E?si=sxFw7_7yEOleZvFm",
        image: "https://picsum.photos/seed/bdd7/400/300",
        hint: "badminton lift recover",
        steps: [
            "A partner plays a drop shot.",
            "Lunge forward to get under the shuttle and play a high, deep lift to the back of their court.",
            "As soon as you hit the lift, push back explosively to the center of the court to prepare for the likely smash.",
            "Assume a low defensive stance upon recovery."
        ],
        commonMistakes: [
            "A flat or short lift that is easy to kill.",
            "Watching your lift instead of recovering immediately.",
            "A slow recovery that leaves you vulnerable."
        ],
        injuryPrevention: [
            "Requires a powerful lunge and push-back; ensure legs are strong.",
            "Practice controlled lunges to avoid knee strain.",
        ]
    },
    {
        name: "Smash Return Practice",
        youtubeUrl: "https://youtu.be/BQfXztjZcIA?si=hH3TMgGvlzyY3iTu",
        image: "https://picsum.photos/seed/bdd8/400/300",
        hint: "badminton smash return",
        steps: [
            "Have a partner feed you high lifts, then smash them at you.",
            "Practice returning the smash with a defensive block to the net.",
            "Practice returning the smash with a defensive lift deep to the backcourt.",
            "Practice returning the smash with a flat drive.",
            "Vary your returns to become unpredictable."
        ],
        commonMistakes: [
            "Only having one type of return (e.g., always lifting).",
            "Swinging at the smash instead of blocking or pushing.",
            "Poor ready position, leading to slow reactions."
        ],
        injuryPrevention: [
            "Defending against smashes can be jarring; ensure a good warm-up.",
            "Wear eye protection for safety.",
        ]
    },
    {
        name: "Pressure Defense Simulation",
        youtubeUrl: "https://youtu.be/cg2SkJb9Uyg?si=5PhzkX7hU4fXW2yW",
        image: "https://picsum.photos/seed/bdd9/400/300",
        hint: "badminton pressure defense",
        steps: [
            "Play a half-court game where one player can only defend and the other can only attack.",
            "The defender's goal is to survive the rally for as long as possible using lifts, blocks, and drives.",
            "The attacker uses smashes, drops, and kills to try and win the point.",
            "This simulates real-game pressure and improves defensive decision-making.",
        ],
        commonMistakes: [
            "Panicking and making a poor shot choice.",
            "Giving up on the rally after a few good attacks.",
            "Not recovering to the base after each defensive shot."
        ],
        injuryPrevention: [
            "High-intensity drill; ensure excellent conditioning.",
            "Both players must be aware to avoid injuries from close-range shots.",
        ]
    }
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

    

    

    



