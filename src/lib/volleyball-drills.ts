
export interface VolleyballDrill {
    name: string;
    youtubeUrl: string;
    image: string;
    hint: string;
    steps: string[];
    commonMistakes: string[];
    injuryPrevention: string[];
}

export const volleyballSubCategories: Record<string, VolleyballDrill[]> = {
    "Serving Drills": [
        {
            name: "Standing Float Serve Practice",
            youtubeUrl: "https://www.youtube.com/watch?v=p_q-wLQ5c1A",
            image: "https://picsum.photos/400/301",
            hint: "volleyball float serve",
            steps: [
                "Stand with your non-hitting foot forward.",
                "Hold the ball in your non-hitting hand, directly in front of your hitting shoulder.",
                "Toss the ball with minimal spin, just high enough to contact.",
                "Contact the ball with a firm, flat hand (the 'heel' of your hand).",
                "Follow through towards your target, stopping the motion abruptly to create float.",
            ],
            commonMistakes: [
                "Spinning the ball on the toss.",
                "Tossing the ball too high or inconsistently.",
                "Using a bent wrist instead of a firm, flat hand.",
                "Swinging your arm fully through instead of a short, punchy follow-through.",
            ],
            injuryPrevention: [
                "Warm up your shoulder thoroughly with arm circles and band work.",
                "Start with short distances and gradually move back.",
                "Ensure your core is engaged to protect your lower back.",
            ]
        },
        {
            name: "Jump Serve Technique Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=vLbr_7C-SjA",
            image: "https://picsum.photos/400/302",
            hint: "volleyball jump serve",
            steps: [
                "Start several feet behind the service line.",
                "Take a 3-step or 4-step approach, similar to a spiking approach.",
                "Toss the ball high and in front of your hitting shoulder as you take your second-to-last step.",
                "Jump towards the ball, arching your back and bringing your hitting arm back.",
                "Contact the ball at the peak of your jump with an open hand, snapping your wrist for topspin.",
                "Land safely inside the court."
            ],
            commonMistakes: [
                "Inconsistent toss (too far forward, back, or to the side).",
                "Mistiming the jump with the toss.",
                "Not contacting the ball at the peak of the jump, losing power.",
                "Landing off-balance, which can lead to ankle injuries.",
            ],
            injuryPrevention: [
                "This is a high-impact skill; ensure excellent physical conditioning.",
                "Strengthen your core, shoulders, and legs to handle the forces.",
                "Practice proper landing mechanics to absorb impact and protect your knees and ankles.",
                "Manage your serving volume to prevent overuse shoulder injuries.",
            ]
        },
        {
            name: "Short Serve Placement Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=yWd-0B8aQ4A",
            image: "https://picsum.photos/400/303",
            hint: "volleyball short serve",
            steps: [
                "Aim for Zone 2 or Zone 4, just over the net.",
                "Use a float serve technique but with less power.",
                "Focus on a higher arc to drop the ball in front of the 10-foot line.",
                "The goal is to force the front-row players to pass or create confusion.",
            ],
            commonMistakes: [
                "Serving into the net.",
                "Serving too deep, making it an easy pass.",
                "Not having enough arc, making the serve easy to read.",
            ],
            injuryPrevention: [
                "Maintain good serving mechanics even with reduced power.",
                "Focus on control and placement to avoid developing bad habits.",
            ]
        },
        {
            name: "Deep Corner Target Serving Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=0k94a8m-w-M",
            image: "https://picsum.photos/400/304",
            hint: "volleyball target serving",
            steps: [
                "Place a target (cone, towel) in deep Zone 1 and deep Zone 5.",
                "Practice serving with power and accuracy to hit the targets.",
                "Focus on a consistent toss and hitting motion.",
                "Alternate between serving to Zone 1 and Zone 5 to practice changing your angle.",
            ],
            commonMistakes: [
                "Sacrificing accuracy for power.",
                "Serving out of bounds.",
                "Not adjusting your standing position to serve to different corners.",
            ],
            injuryPrevention: [
                "Ensure a full warm-up before attempting power serves.",
                "Don't over-serve; listen to your shoulder and take breaks.",
            ]
        },
        {
            name: "Pressure Serving",
            youtubeUrl: "https://www.youtube.com/watch?v=H-iL-V4n8MA",
            image: "https://picsum.photos/400/305",
            hint: "volleyball pressure serving",
            steps: [
                "Set a goal, such as making 5 consecutive serves in.",
                "If you miss a serve, the count resets to zero.",
                "This simulates the mental pressure of serving at a critical point in a match.",
                "Practice different types of serves under this pressure.",
            ],
            commonMistakes: [
                "Getting frustrated and letting mechanics break down.",
                "Playing too safe and making easy serves.",
                "Rushing the serve after a miss.",
            ],
            injuryPrevention: [
                "Focus on maintaining your routine and technique under pressure.",
                "Use deep breaths to manage stress and stay loose.",
            ]
        },
    ],
    "Spiking / Attacking Drills": [
        {
            name: "Approach & Arm Swing Technique Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=e_p2z1gW-pA",
            image: "https://picsum.photos/400/306",
            hint: "volleyball spike approach",
            steps: [
                "Practice the 3-step or 4-step approach without a ball (slow-fast-fastest steps).",
                "Ensure the last two steps are explosive, converting horizontal momentum to vertical lift.",
                "As you jump, bring both arms up, with your hitting arm pulling back into a 'bow and arrow' position.",
                "Practice the arm swing, leading with your elbow and snapping your wrist over the top of the ball.",
            ],
            commonMistakes: [
                "Inconsistent footwork or starting too close to the net.",
                "A 'drifting' approach, where you jump forward into the net.",
                "Dropping the non-hitting arm, which causes rotation and loss of power.",
                "An incomplete arm swing or 'short-arming' the ball.",
            ],
            injuryPrevention: [
                "Strengthen your core to protect your spine during the arch and swing.",
                "Practice proper landing on both feet to distribute impact.",
                "Ensure good shoulder mobility and rotator cuff strength.",
            ]
        },
        {
            name: "Hitting Against a Block",
            youtubeUrl: "https://www.youtube.com/watch?v=B91-e4S-8lQ",
            image: "https://picsum.photos/400/307",
            hint: "volleyball hitting block",
            steps: [
                "Have a partner or a blocking machine at the net.",
                "Focus on hitting 'high hands' - aiming for the top of the blockers' fingers to tool the block.",
                "Practice hitting sharp cross-court angles around the block.",
                "Work on seeing the block and making a last-second decision to hit line, angle, or tip.",
            ],
            commonMistakes: [
                "Hitting straight into the middle of the block.",
                "Not adjusting the shot based on the block's position.",
                "Getting frustrated and trying to hit through the block instead of around it.",
            ],
            injuryPrevention: [
                "Communicate with your blocking partner to avoid landing on their feet.",
                "This drill requires focus to avoid hitting fingers and hands.",
            ]
        },
        {
            name: "Cross-court vs Line Attack Practice",
            youtubeUrl: "https://www.youtube.com/watch?v=5zZfQ0eY_yU",
            image: "https://picsum.photos/400/308",
            hint: "volleyball attack angles",
            steps: [
                "Set targets in the deep cross-court corner (Zone 5) and down the line (Zone 1).",
                "Practice hitting both shots from the same set.",
                "To hit cross-court, contact the outside of the ball.",
                "To hit line, get your body behind the ball and contact it squarely.",
                "The key is to make both attacks look the same until the point of contact.",
            ],
            commonMistakes: [
                "Turning your body too early, telegraphing where you're going to hit.",
                "Hitting the ball out of bounds.",
                "Not getting a full arm swing and snap on the line shot.",
            ],
            injuryPrevention: [
                "Shoulder care is paramount. Ensure proper warm-up and don't overuse.",
                "Focus on rotating your torso to generate power, not just your arm.",
            ]
        },
        {
            name: "Off-speed Shots (Tips and Rolls)",
            youtubeUrl: "https://www.youtube.com/watch?v=5zZfQ0eY_yU",
            image: "https://picsum.photos/400/309",
            hint: "volleyball off speed shot",
            steps: [
                "Use the same aggressive approach as a full spike.",
                "At the last second, instead of a full swing, use an open hand to tip the ball over the block into an open spot.",
                "For a roll shot, contact the ball with your fingers and 'roll' it over the top, giving it a high arc but short distance.",
                "The goal is deception and hitting where the defense isn't.",
            ],
            commonMistakes: [
                "Slowing down your approach, making the off-speed shot obvious.",
                "Hitting the ball into the net or into the block.",
                "Tipping to a spot where a defender is already standing.",
            ],
            injuryPrevention: [
                "Maintain good body control to avoid landing in the net.",
                "This is a low-impact drill, but focus is needed to avoid finger injuries.",
            ]
        },
        {
            name: "Back-row Attack Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=v0n6Lg-Q_aA",
            image: "https://picsum.photos/400/310",
            hint: "volleyball back row attack",
            steps: [
                "Start your approach from behind the 10-foot line.",
                "Use a powerful 4-step approach to generate momentum.",
                "Jump from behind the line, ensuring your foot does not touch the line during takeoff.",
                "Contact the ball at its peak and drive it deep into the opponent's court.",
            ],
            commonMistakes: [
                "Foot faulting by touching the 10-foot line.",
                "A flat jump with not enough height.",
                "Hitting the ball into the net because the set is further from the net.",
            ],
            injuryPrevention: [
                "Requires a very explosive jump; ensure legs are well-conditioned.",
                "Proper landing is critical to absorb the high impact.",
            ]
        },
        {
            name: "Transition Attack (from defense → approach → spike)",
            youtubeUrl: "https://www.youtube.com/watch?v=3-fK0aT8p4Q",
            image: "https://picsum.photos/400/311",
            hint: "volleyball transition attack",
            steps: [
                "Start in a defensive position.",
                "A coach or partner initiates a 'free ball' or a light attack at you.",
                "Pass the ball to the setter's position.",
                "Quickly transition off the net to get into your spike approach.",
                "Execute your full approach and attack the set.",
            ],
            commonMistakes: [
                "A slow transition from defense to offense.",
                "Getting too close to the net and having a rushed approach.",
                "An unbalanced or weak attack due to being tired from the defensive move.",
            ],
            injuryPrevention: [
                "This drill is physically demanding. Ensure excellent conditioning.",
                "Focus on efficient footwork to conserve energy and prevent missteps.",
            ]
        },
    ],
    "Blocking Drills": [
        {
            name: "Single Block Timing Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=wL4cQhA-WqY",
            image: "https://picsum.photos/400/312",
            hint: "volleyball single block",
            steps: [
                "Stand at the net in the 'ready' position (hands up, knees bent).",
                "Have a partner on a box on the other side 'attack' a ball.",
                "Watch the attacker's arm swing and time your jump to intercept the ball.",
                "Jump straight up and down, penetrating your hands over the net.",
                "Keep your hands and fingers spread wide and strong.",
            ],
            commonMistakes: [
                "Jumping too early or too late.",
                "Drifting sideways into the net (net violation).",
                "Weak hands, allowing the ball to go through.",
                "Not penetrating the hands over the net.",
            ],
            injuryPrevention: [
                "Practice proper landing to avoid ankle injuries.",
                "Tape fingers if prone to sprains.",
                "Be careful not to land on your partner's feet under the net.",
            ]
        },
        {
            name: "Partner Soft Toss + Block Reaction Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=1uT1E_s6gP0",
            image: "https://picsum.photos/400/313",
            hint: "volleyball block reaction",
            steps: [
                "Your partner stands on the other side of the net.",
                "They will soft toss a ball either to their left or right.",
                "You must react, take one shuffle step, and jump to block where the ball is.",
                "Focus on the quick reaction and lateral movement before the jump.",
            ],
            commonMistakes: [
                "Crossing your feet over instead of shuffling.",
                "Being slow to react to the toss.",
                "Poor blocking form after the movement.",
            ],
            injuryPrevention: [
                "Strengthen lateral movement muscles (glutes, adductors).",
                "This is a high-repetition drill; be mindful of fatigue in your legs.",
            ]
        },
        {
            name: "Block Footwork Lateral Movement Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=pCKLTSAlx_A",
            image: "https://picsum.photos/400/314",
            hint: "volleyball block footwork",
            steps: [
                "Practice moving from the center of the net to the pin (antenna) and back.",
                "Use shuffle steps for short distances.",
                "Use a crossover step for longer distances (e.g., from middle to outside).",
                "Keep your hands up in the ready position throughout the movement.",
                "End each movement with a practice jump.",
            ],
            commonMistakes: [
                "Dropping your hands while moving.",
                "Being too upright and not in a ready athletic stance.",
                "Slow or inefficient footwork.",
            ],
            injuryPrevention: [
                "Focus on clean, efficient footwork to reduce stress on knees and ankles.",
                "Wear shoes with good grip and lateral support.",
            ]
        },
        {
            name: "Double Block Communication Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=r0Tgn8G_wVw",
            image: "https://picsum.photos/400/315",
            hint: "volleyball double block",
            steps: [
                "Work with a partner (e.g., middle and outside blocker).",
                "Practice setting the block together.",
                "The inside blocker is responsible for setting the location based on the set.",
                "The outside blocker's job is to close the seam.",
                "Communicate verbally ('In! In!') and practice jumping together to form a solid wall.",
            ],
            commonMistakes: [
                "A large seam or gap between the two blockers.",
                "One blocker jumping earlier or later than the other.",
                "Poor communication, leading to confusion.",
            ],
            injuryPrevention: [
                "Be aware of your partner's position to avoid mid-air collisions.",
                "Practice communication to ensure safety and effectiveness.",
            ]
        },
        {
            name: "Penetration Over Net Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=t5Rj9v01wz8",
            image: "https://picsum.photos/400/316",
            hint: "volleyball block penetration",
            steps: [
                "Stand on a box or bench on your side of the net.",
                "Without jumping, practice reaching over the net with strong hands.",
                "Focus on getting your hands and forearms as far over the net as possible.",
                "This isolates the upper body movement of the block.",
            ],
            commonMistakes: [
                "Bending at the wrist.",
                "Not keeping fingers and hands spread wide and strong.",
                "Touching the net.",
            ],
            injuryPrevention: [
                "Strengthen your shoulders and core to support the reaching motion.",
                "Be careful not to over-rotate or strain your shoulder.",
            ]
        },
        {
            name: "Block → Transition → Attack Combo Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=y6-O9vS0rT4",
            image: "https://picsum.photos/400/317",
            hint: "volleyball block transition",
            steps: [
                "Perform a block at the net.",
                "As you land, immediately turn and transition off the net into your attack approach position.",
                "A coach or setter will set you a ball.",
                "Perform your full attack.",
                "This simulates a real game situation where you must block and then immediately be ready to hit.",
            ],
            commonMistakes: [
                "Slow transition off the net.",
                "A rushed or short attack approach.",
                "Getting tangled in the net after the block.",
            ],
            injuryPrevention: [
                "This is a highly advanced and physically demanding drill.",
                "Excellent conditioning is required.",
                "Focus on efficient movement to conserve energy and prevent injury.",
            ]
        },
    ],
    "Defense & Passing Drills": [
        {
            name: "Forearm Passing Accuracy to Setter",
            youtubeUrl: "https://www.youtube.com/watch?v=yWd-0B8aQ4A",
            image: "https://picsum.photos/400/318",
            hint: "volleyball forearm passing",
            steps: [
                "Partner with another player and stand 15-20 feet apart.",
                "Focus on creating a solid platform with your forearms.",
                "Use your legs to push the ball to your target, not your arms.",
                "Angle your platform to direct the ball to a specific target (the setter's position).",
                "Practice passing from different body positions (low, medium, high).",
            ],
            commonMistakes: [
                "Swinging your arms.",
                "Not getting your feet to the ball, and reaching instead.",
                "A broken platform (uneven arms).",
                "Passing the ball too low or too high.",
            ],
            injuryPrevention: [
                "Stay low and use your legs to prevent straining your lower back.",
                "Keep your platform away from your body to avoid the ball hitting your face.",
            ]
        },
        {
            name: "Digging Against Controlled Spikes",
            youtubeUrl: "https://www.youtube.com/watch?v=yWd-0B8aQ4A",
            image: "https://picsum.photos/400/319",
            hint: "volleyball digging",
            steps: [
                "Start in a low, ready defensive position.",
                "Have a coach or partner on a box hit controlled attacks at you.",
                "Focus on getting your body behind the ball.",
                "Use your platform to absorb the power and direct the ball high and to the center of the court.",
                "The goal is to keep the ball in play, not to make a perfect pass.",
            ],
            commonMistakes: [
                "Standing up too tall.",
                "Swinging at the ball, causing it to fly out of bounds.",
                "Being afraid of the ball.",
            ],
            injuryPrevention: [
                "Wear knee pads.",
                "Learn to absorb the impact with your whole body.",
                "Communicate with the hitter about the power of their attacks.",
            ]
        },
        {
            name: "Partner Pepper Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=yWd-0B8aQ4A",
            image: "https://picsum.photos/400/320",
            hint: "volleyball pepper drill",
            steps: [
                "A classic warm-up and ball control drill.",
                "Partner A passes to Partner B.",
                "Partner B sets back to Partner A.",
                "Partner A attacks (with controlled power) at Partner B.",
                "Partner B digs the attack back to Partner A to pass.",
                "The sequence repeats (Pass-Set-Hit).",
            ],
            commonMistakes: [
                "Hitting the ball too hard for your partner to control.",
                "Making sloppy passes or sets.",
                "Not moving your feet.",
            ],
            injuryPrevention: [
                "Focus on control, not power.",
                "This is a cooperative drill, not a competitive one.",
            ]
        },
        {
            name: "Random Ball Toss Dig Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=yWd-0B8aQ4A",
            image: "https://picsum.photos/400/321",
            hint: "volleyball random dig",
            steps: [
                "A coach stands at the net with a bucket of balls.",
                "The coach will toss balls randomly around you (short, deep, left, right).",
                "Your job is to react, move your feet, and dig every ball up.",
                "This improves reaction time and defensive range.",
            ],
            commonMistakes: [
                "Guessing where the toss is going instead of reacting.",
                "Reaching with your arms instead of moving your feet.",
                "Giving up on difficult balls.",
            ],
            injuryPrevention: [
                "Requires quick, explosive movements. Ensure a good warm-up.",
                "Wear knee pads for diving.",
            ]
        },
        {
            name: "Reaction Defense",
            youtubeUrl: "https://www.youtube.com/watch?v=yWd-0B8aQ4A",
            image: "https://picsum.photos/400/322",
            hint: "volleyball reaction defense",
            steps: [
                "Lie face down on the floor.",
                "On the coach's command ('UP!'), quickly get to your feet into a defensive ready position.",
                "The coach will immediately hit a ball at you.",
                "Dig the ball up.",
                "This drill trains explosive recovery and immediate readiness.",
            ],
            commonMistakes: [
                "Being slow to get up.",
                "Not being in a balanced, ready position after getting up.",
                "Not being ready for the ball immediately.",
            ],
            injuryPrevention: [
                "This is a high-intensity drill.",
                "Practice the 'get up' motion to be as efficient as possible.",
            ]
        },
        {
            name: "Dive & Recovery Drill",
            youtubeUrl: "https://www.youtube.com/watch?v=yWd-0B8aQ4A",
            image: "https://picsum.photos/400/323",
            hint: "volleyball dive recovery",
            steps: [
                "Practice diving forward to save a short ball (a 'pancake' save or a forearm dive).",
                "Focus on extending your body and getting a hand or arm under the ball.",
                "After the dive, practice getting back to your feet as quickly as possible.",
                "The recovery is just as important as the dive.",
            ],
            commonMistakes: [
                "Hesitating before diving.",
                "Landing heavily on knees or hands.",
                "Staying on the floor too long after the dive.",
            ],
            injuryPrevention: [
                "Practice on a soft surface or with mats.",
                "Wear long sleeves and knee pads.",
                "Learn proper diving technique from a coach to avoid shoulder and wrist injuries.",
            ]
        },
    ]
};
