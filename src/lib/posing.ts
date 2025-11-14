
export interface Pose {
    name: string;
    image: string;
    hint: string;
    steps: string[];
    mistakes: string[];
    youtubeUrl?: string;
}

export interface PosingCategory {
    categoryName: string;
    poses: Pose[];
}

export const POSING_TUTORIALS: PosingCategory[] = [
    {
        categoryName: "Front Poses",
        poses: [
            {
                name: "Front Relaxed",
                image: "https://i.ibb.co/hJKVBY78/Whats-App-Image-2025-07-10-at-01-17-32.jpg",
                hint: "bodybuilder relaxed front",
                steps: [
                    "Stand with feet shoulder-width apart, toes pointing slightly outward.",
                    "Keep a slight bend in your knees, don't lock them.",
                    "Flex your quads to show separation.",
                    "Flare your lats out wide to create a V-taper.",
                    "Keep your arms slightly bent at your sides, showing triceps.",
                    "Pull your abs in tight, but don't hold your breath. Smile confidently."
                ],
                mistakes: [
                    "Locking knees, which looks stiff.",
                    "Forgetting to flare the lats, losing the V-taper.",
                    "Holding breath and looking uncomfortable.",
                    "Standing completely straight, hiding muscle definition."
                ],
                youtubeUrl: "https://youtu.be/y2tNynHLPNY?si=y-gQ6gE4d5Wy2b57"
            },
            {
                name: "Front Double Biceps",
                image: "https://i.ibb.co/5XJ3v6kx/Whats-App-Image-2025-07-10-at-01-17-32-1.jpg",
                hint: "bodybuilder double biceps",
                steps: [
                    "Plant one foot slightly forward.",
                    "Raise both arms to shoulder height, bending at the elbows to flex your biceps.",
                    "Spread your lats as wide as possible.",
                    "Crunch down slightly on your abs to flex them.",
                    "Flex the quad of your front leg.",
                    "Keep your fists clenched and wrists strong."
                ],
                mistakes: [
                    "Raising elbows too high or too low.",
                    "Forgetting to spread the lats (a common error).",
                    "Not flexing the abs or quads.",
                    "A weak or limp wrist posture."
                ],
                youtubeUrl: "https://youtu.be/ibtM-lYpuWY?si=a0KE6VmiJ8uqA9fs"
            },
            {
                name: "Front Lat Spread",
                image: "https://i.ibb.co/Pvb7HGvV/Whats-App-Image-2025-07-10-at-01-17-32-2.jpg",
                hint: "bodybuilder lat spread",
                steps: [
                    "Place your hands on your hips with thumbs behind your back.",
                    "Push your fists into your sides/obliques.",
                    "Use your hands to push your lats forward and spread them wide.",
                    "Keep your chest up and shoulders down.",
                    "Flex your quads and abs.",
                    "Imagine you're trying to make your back as wide as a barn door."
                ],
                mistakes: [
                    "Shrugging the shoulders up, which hides the lats.",
                    "Leaning too far back or forward.",
                    "Not pushing hard enough with the hands to spread the lats.",
                    "Forgetting to flex the legs."
                ],
                youtubeUrl: "https://youtu.be/ng_AzaRqMM4?si=zDlpRQJKj629zzy3"
            },
            {
                name: "Most Muscular (Hands-on-Hips)",
                image: "https://i.ibb.co/NgWsBkWJ/Whats-App-Image-2025-07-10-at-01-17-31-1.jpg",
                hint: "bodybuilder most muscular",
                steps: [
                    "Stand with feet firmly planted.",
                    "Place hands on your hips, similar to the lat spread.",
                    "Lean forward slightly and crunch down hard.",
                    "Squeeze your chest, shoulders, arms, and abs together in a powerful flex.",
                    "Project an image of raw power and density."
                ],
                mistakes: [
                    "Not leaning forward enough to engage the chest.",
                    "A weak or incomplete contraction.",
                    "Looking down instead of confidently at the judges/camera.",
                    "Forgetting leg tension."
                ],
                youtubeUrl: "https://youtu.be/bHp6GI2fllY?si=wXHo5OOGHaMNPoNh"
            },
            {
                name: "Most Muscular (Crab Style)",
                image: "https://i.ibb.co/gLJkWKYh/Whats-App-Image-2025-07-10-at-01-17-31.jpg",
                hint: "bodybuilder crab pose",
                steps: [
                    "Bring your arms across your body, one over the other.",
                    "Grasp one wrist with the opposite hand.",
                    "Crunch forward, squeezing your chest and shoulders together.",
                    "Flex your abs and quads with maximum intensity.",
                    "This pose is about showcasing overall mass and conditioning."
                ],
                mistakes: [
                    "Hiding the abs by crunching too far over.",
                    "Not squeezing the chest and shoulders together effectively.",
                    "Weak grip, making the pose look soft.",
                    "Unbalanced foot placement."
                ],
                youtubeUrl: "https://youtube.com/shorts/mj1C9lAjUrE?si=7I9kkrwgTnxcpRB1"
            },
            {
                name: "Abdominals and Thighs",
                image: "https://i.ibb.co/NBGwrPW/Whats-App-Image-2025-07-10-at-01-17-30-2.jpg",
                hint: "bodybuilder abs thigh",
                steps: [
                    "Place one leg forward and lock it to flex the quad.",
                    "Place both hands behind your head, keeping elbows wide.",
                    "Exhale fully and crunch down on your abs, pulling them in tight.",
                    "Twist slightly to one side to show obliques if desired.",
                    "Hold the contraction, showcasing definition."
                ],
                mistakes: [
                    "Not exhaling completely, which prevents maximum ab contraction.",
                    "Pulling on your head with your hands.",
                    "Not flexing the quad hard enough.",
                    "Holding the pose for too short a time."
                ],
                youtubeUrl: "https://youtu.be/G9wxoWouUjg?si=W6ZzOxClm4R-Lpfv"
            },
            {
                name: "Vacuum Pose",
                image: "https://i.ibb.co/jk36JcHh/Whats-App-Image-2025-07-10-at-01-17-30-1.jpg",
                hint: "bodybuilder vacuum pose",
                steps: [
                    "Stand tall with hands behind your head or on your hips.",
                    "Exhale all air from your lungs completely.",
                    "Expand your rib cage as if you're about to take a deep breath, but don't inhale.",
                    "Suck your stomach in and up, underneath your rib cage.",
                    "Hold this 'vacuum' while maintaining a wide lat spread."
                ],
                mistakes: [
                    "Inhaling slightly, which ruins the vacuum effect.",
                    "Not expanding the rib cage enough.",
                    "Failing to keep the lats flared.",
                    "A pained or strained facial expression."
                ],
                youtubeUrl: "https://youtu.be/2_5AQNizULc?si=mXzQ3xo536R8NSOI"
            },
            {
                name: "Front Chest Flex",
                image: "https://i.ibb.co/YFS5fGQd/Whats-App-Image-2025-07-10-at-01-39-57.jpg",
                hint: "bodybuilder chest flex",
                steps: [
                    "Stand with feet shoulder-width apart.",
                    "Bring both arms in front of you, bent at 90 degrees.",
                    "Squeeze your hands together forcefully.",
                    "Contract your pectoral muscles as hard as you can.",
                    "Keep your core tight and maintain a confident posture."
                ],
                mistakes: [
                    "Shrugging your shoulders.",
                    "Not squeezing the hands together hard enough to activate the chest.",
                    "Forgetting to breathe."
                ],
                youtubeUrl: ""
            },
            {
                name: "Front Arm Cross (Casual)",
                image: "https://i.ibb.co/TBVjd1G5/Whats-App-Image-2025-07-10-at-01-39-22.jpg",
                hint: "bodybuilder arm cross",
                steps: [
                    "Stand relaxed but with good posture.",
                    "Cross one arm over the other, resting hands on the opposite bicep.",
                    "Slightly tense your arms and chest without looking overly strained.",
                    "Flare your lats slightly.",
                    "This pose should look confident and effortless."
                ],
                mistakes: [
                    "Slouching or poor posture.",
                    "Flexing too hard, making it look unnatural.",
                    "Hiding your physique instead of showcasing it."
                ],
                youtubeUrl: ""
            },
            {
                name: "Arms Overhead (Abs Flex)",
                image: "https://i.ibb.co/pj935mK2/Whats-App-Image-2025-07-10-at-01-39-21.jpg",
                hint: "abs flex arms overhead",
                steps: [
                    "Stand with feet slightly apart.",
                    "Raise both arms straight overhead, interlocking your fingers.",
                    "Stretch upwards, elongating your torso.",
                    "Exhale and contract your abs, pulling them in tight.",
                    "This pose highlights abdominal definition and the V-taper."
                ],
                mistakes: [
                    "Arching the back too much.",
                    "Not exhaling fully to get a deep ab contraction.",
                    "Letting the shoulders creep up to the ears."
                ],
                youtubeUrl: "https://youtube.com/shorts/CESUiMrk_x4?si=L6vK9SYG1MampU30"
            }
        ]
    },
    {
        categoryName: "Side Poses",
        poses: [
            {
                name: "Side Chest",
                image: "https://i.ibb.co/7xysGv25/Whats-App-Image-2025-07-10-at-01-39-56.jpg",
                hint: "bodybuilder side chest",
                steps: [
                    "Turn to your side (e.g., left side).",
                    "Spike your left calf by pressing your toes down.",
                    "Bend your front (left) leg and place your back (right) leg behind it, flexing the hamstring.",
                    "Bend your front (left) arm to 90 degrees and bring it across your chest. Grasp the wrist with your back (right) hand.",
                    "Squeeze your front arm's bicep and chest together. Exhale and flex your abs.",
                    "Turn your torso slightly towards the judges/camera."
                ],
                mistakes: [
                    "Not spiking the calf.",
                    "Hiding the chest by not rotating the torso enough.",
                    "A flat-looking bicep from an incorrect arm angle.",
                    "Forgetting to flex the hamstring of the rear leg."
                ],
                youtubeUrl: "https://youtu.be/Z-DvXUks_HA?si=4JclZTalU4DqmUSc"
            },
            {
                name: "Side Triceps",
                image: "https://i.ibb.co/m5JsbcGk/Whats-App-Image-2025-07-10-at-01-39-56-1.jpg",
                hint: "bodybuilder side triceps",
                steps: [
                    "Turn to your side.",
                    "Spike the calf of the leg closest to the audience.",
                    "Extend the arm closest to the audience straight down, twisting it to show the triceps.",
                    "Grasp the wrist or fingers with your other hand behind your back to help push the arm forward and tighten the muscle.",
                    "Crunch your obliques and abs on that side.",
                    "Keep your chest up and shoulders back."
                ],
                mistakes: [
                    "Not fully extending and twisting the arm to showcase all three heads of the triceps.",
                    "Shrugging the shoulder up.",
                    "Failing to flex the obliques.",
                    "Poor leg and calf flexion."
                ],
                youtubeUrl: "https://youtube.com/shorts/2TZiyj7_4D8?si=p7tRK0-teRifWHPR"
            },
            {
                name: "Side Serratus Flex",
                image: "https://i.ibb.co/Mkkh23Y0/Whats-App-Image-2025-07-10-at-01-39-20-1.jpg",
                hint: "serratus flex pose",
                steps: [
                    "Stand sideways and place your front hand behind your head.",
                    "Keep the elbow high and pointed towards the ceiling.",
                    "Place your other hand on your hip to flare the lat.",
                    "Crunch down on your obliques and push your rib cage out slightly to reveal the serratus anterior muscles.",
                    "Flex the thigh and calf of the front leg."
                ],
                mistakes: [
                    "Not crunching the obliques hard enough.",
                    "Letting the elbow drop.",
                    "Holding your breath and looking strained."
                ],
                youtubeUrl: ""
            },
            {
                name: "Side Glute-Ham Tie-In",
                image: "https://i.ibb.co/fzg19K9Z/Whats-App-Image-2025-07-10-at-01-39-20.jpg",
                hint: "glute ham tie-in",
                steps: [
                    "Stand sideways, stepping your rear leg behind you.",
                    "Bend your front leg slightly and put most of your weight on it.",
                    "Tense the hamstring and glute of your rear leg by pushing the heel back and down.",
                    "Twist your upper body slightly toward the audience to show your physique.",
                    "This pose highlights the separation between the hamstring and glute."
                ],
                mistakes: [
                    "Not creating enough tension in the rear leg.",
                    "Poor balance.",
                    "Hiding the tie-in area with poor lighting or posing angle."
                ],
                youtubeUrl: ""
            },
            {
                name: "Casual Side Pose (Relaxed Arm)",
                image: "https://i.ibb.co/DPPH2NzB/Whats-App-Image-2025-07-10-at-01-39-19.jpg",
                hint: "casual side pose",
                steps: [
                    "Stand sideways with feet comfortably placed.",
                    "Let the front arm hang naturally, slightly bent, to show the bicep and tricep.",
                    "Place the rear hand on the hip.",
                    "Slightly twist your torso to show your V-taper.",
                    "Keep your abs tight but maintain a relaxed expression."
                ],
                mistakes: [
                    "Looking too stiff and posed.",
                    "Completely relaxing the muscles, losing all definition.",
                    "Bad posture or slouching."
                ],
                youtubeUrl: ""
            }
        ]
    },
    {
        categoryName: "Back Poses",
        poses: [
            {
                name: "Back Relaxed",
                image: "https://i.ibb.co/pBV3Z5tH/Whats-App-Image-2025-07-10-at-01-55-30-1.jpg",
                hint: "bodybuilder back relaxed",
                steps: [
                    "Turn your back, stand with feet shoulder-width apart.",
                    "Flare your lats as wide as possible, keeping shoulders down.",
                    "Keep a slight arch in your lower back to show spinal erectors.",
                    "Keep arms slightly to the side to show arm thickness.",
                    "Flex your glutes and hamstrings."
                ],
                mistakes: [
                    "Pinching shoulder blades together, which makes the back look narrow.",
                    "Slouching forward.",
                    "Not flexing the glutes or hamstrings."
                ]
            },
            {
                name: "Back Double Biceps",
                image: "https://i.ibb.co/23ccy9XR/Whats-App-Image-2025-07-10-at-01-55-30.jpg",
                hint: "bodybuilder back double biceps",
                steps: [
                    "Turn your back to the audience.",
                    "Take one step back with one foot, planting the ball of the foot to flex your calf.",
                    "Raise your arms and flex your biceps, just like the front version.",
                    "Squeeze your shoulder blades together and spread your lats wide.",
                    "Arch your lower back slightly to flex your spinal erectors and glutes.",
                    "Try to show as much muscle detail as possible."
                ],
                mistakes: [
                    "Not stepping back to flex the calf.",
                    "Failing to spread the lats, resulting in a narrow-looking back.",
                    "Elbows positioned too high or too low.",
                    "Not flexing the glutes and hamstrings."
                ]
            },
            {
                name: "Back Lat Spread",
                image: "https://i.ibb.co/mrCr4n86/Whats-App-Image-2025-07-10-at-02-01-38.jpg",
                hint: "bodybuilder back lat spread",
                steps: [
                    "Same leg position as the back double biceps (one leg back, calf spiked).",
                    "Place your hands on your hips with thumbs forward.",
                    "Pull your elbows forward and then spread your lats as wide as you can.",
                    "Imagine you are trying to touch your elbows together in front of you.",
                    "Flex your glutes and hamstrings hard."
                ],
                mistakes: [
                    "Shrugging the shoulders up instead of keeping them down.",
                    "Arching the back too much.",
                    "Not bringing elbows forward enough before spreading.",
                    "A 'flat' look from not flexing the lower body."
                ]
            },
            {
                name: "Rear Most Muscular",
                image: "https://i.ibb.co/PzxL78WP/Whats-App-Image-2025-07-10-at-02-20-52-2.jpg",
                hint: "rear most muscular",
                steps: [
                    "From the back, bring one arm behind you and grab the opposite wrist.",
                    "Flex the traps, shoulders, and arms simultaneously.",
                    "Step one leg back and flex the calf.",
                    "Squeeze the glutes and hamstrings.",
                    "This pose showcases upper back thickness and density."
                ],
                mistakes: [
                    "A weak grip or poor arm positioning.",
                    "Not squeezing the traps hard enough.",
                    "Forgetting about lower body flexion."
                ]
            },
            {
                name: "Back Pose with Calves Flexed",
                image: "https://i.ibb.co/k6XHBqGV/Whats-App-Image-2025-07-10-at-01-55-29.jpg",
                hint: "back pose calves",
                steps: [
                    "Stand with your back to the audience.",
                    "Rise up onto the balls of both feet to flex your calves.",
                    "Flare your lats and keep your upper back tensed.",
                    "This is a variation to specifically highlight calf development from the rear.",
                    "Keep your hands on your hips or in a relaxed position."
                ],
                mistakes: [
                    "Losing balance.",
                    "Not getting high enough on the toes for a full calf contraction.",
                    "Forgetting to keep the upper back flared."
                ]
            },
            {
                name: "Glute-Hamstring Flex",
                image: "https://i.ibb.co/2YYmS5ny/Whats-App-Image-2025-07-10-at-01-55-28-1.jpg",
                hint: "glute hamstring flex",
                steps: [
                    "Turn your back, place hands on hips.",
                    "Shift your weight to one leg.",
                    "Bend the other leg and pull the heel towards your glute to flex the hamstring.",
                    "Squeeze the glute of the standing leg.",
                    "This pose isolates the conditioning of the hamstrings and glutes."
                ],
                mistakes: [
                    "Losing balance.",
                    "Not getting a strong enough hamstring contraction.",
                    "Having relaxed, unflexed glutes on the standing leg."
                ]
            },
            {
                name: "One-Arm Back Flex (Twist)",
                image: "https://i.ibb.co/r2cS5x2n/Whats-App-Image-2025-07-10-at-01-55-28.jpg",
                hint: "one arm back flex",
                steps: [
                    "Start with your back to the audience.",
                    "Twist your torso to the side.",
                    "Place your front hand on your hip and flex the lat on that side.",
                    "Reach your back arm across your body to accentuate the twist and flex the rear delt.",
                    "Step back with one leg to flex the calf and glute."
                ],
                mistakes: [
                    "Not getting a deep enough twist.",
                    "Poor hand placement that hides muscles.",
                    "Unsteady footing."
                ]
            }
        ]
    },
    {
        categoryName: "Transition & Aesthetic Poses",
        poses: [
            {
                name: "Classic Vacuum with Arms Out",
                image: "https://i.ibb.co/hF5K94Xk/Whats-App-Image-2025-07-10-at-01-39-21-1.jpg",
                hint: "classic vacuum pose",
                steps: [
                    "Perform a stomach vacuum as previously described.",
                    "While holding the vacuum, raise your arms out to the sides, parallel to the floor.",
                    "Keep your chest high and lats flared.",
                    "This is a highly aesthetic pose that emphasizes a small waist and wide shoulders."
                ],
                mistakes: [
                    "Losing the vacuum while positioning the arms.",
                    "Dropping the arms too low or raising them too high.",
                    "A strained look on the face."
                ]
            },
            {
                name: "Classic Twisted Front Pose",
                image: "https://i.ibb.co/chKHgdpF/Whats-App-Image-2025-07-10-at-02-20-53.jpg",
                hint: "bodybuilder classic pose",
                steps: [
                    "Stand with feet apart, one slightly forward.",
                    "Twist your torso to one side while keeping your hips facing forward.",
                    "Place one hand behind your head, elbow high.",
                    "Use the other arm to flex your bicep or rest on your hip.",
                    "Create a dramatic V-taper and emphasize your obliques and abs."
                ],
                mistakes: [
                    "Not creating enough twist between the hips and shoulders.",
                    "A weak vacuum or ab flexion.",
                    "Poor hand placement.",
                    "An unbalanced or unsteady stance."
                ]
            },
            {
                name: "Quarter Turn",
                image: "https://i.ibb.co/ycHH8hxm/Whats-App-Image-2025-07-10-at-02-20-52-1.jpg",
                hint: "bodybuilder quarter turn",
                steps: [
                    "From the front, smoothly pivot 90 degrees to the side.",
                    "Keep your posture elegant and controlled.",
                    "Display your side profile: shoulder width, triceps, and leg separation.",
                    "Keep abs tight and present a confident look.",
                    "Repeat for all four quarter turns (front, right side, back, left side)."
                ],
                mistakes: [
                    "Jerky, uncoordinated movements.",
                    "Losing tension in the muscles between poses.",
                    "Looking down at your feet instead of forward.",
                    "Poor posture and slouching."
                ]
            },
            {
                name: "Hand Behind Head Oblique Pose",
                image: "https://i.ibb.co/pj935mK2/Whats-App-Image-2025-07-10-at-01-39-21.jpg",
                hint: "oblique pose",
                steps: [
                    "Stand facing forward or slightly turned.",
                    "Place one hand behind your head with the elbow flared out.",
                    "Place the other hand on your hip.",
                    "Crunch down on the oblique on the side of the raised arm.",
                    "This highlights the obliques, serratus, and creates a nice line."
                ],
                mistakes: [
                    "Pulling your head forward with your hand.",
                    "Not crunching the oblique effectively.",
                    "Hiding the muscles by not flaring the elbow."
                ]
            },
            {
                name: "Arms Overhead Side Stretch",
                image: "https://i.ibb.co/7dmwQH2g/Whats-App-Image-2025-07-10-at-02-20-52.jpg",
                hint: "side stretch pose",
                steps: [
                    "Stand with feet together.",
                    "Raise both arms overhead and clasp your hands.",
                    "Lean to one side, creating a long, stretching line from your lats down to your hips.",
                    "Keep your abs tight to show definition.",
                    "This is an aesthetic transition pose."
                ],
                mistakes: [
                    "Bending too far and losing balance.",
                    "Letting the stomach relax and protrude.",
                    "Bending the knees too much."
                ]
            },
            {
                name: "One-Legged Pose (Flexed Quad)",
                image: "https://i.ibb.co/PGBQ3Bd6/Whats-App-Image-2025-07-10-at-02-20-51-1.jpg",
                hint: "flexed quad pose",
                steps: [
                    "Stand tall and shift your weight to one leg.",
                    "Lift the other foot and rest it against the standing leg's knee or ankle.",
                    "Flex the quad of the standing leg as hard as possible.",
                    "Use your arms in a classic pose (e.g., arms out, hands on hips) to complete the look.",
                    "Showcases balance and leg separation."
                ],
                mistakes: [
                    "Losing balance; practice is key.",
                    "Not getting a deep contraction in the quad.",
                    "Poor upper body posture."
                ]
            },
            {
                name: "Kneeling Biceps Flex",
                image: "https://i.ibb.co/67Kq0FVW/Whats-App-Image-2025-07-10-at-02-20-51.jpg",
                hint: "kneeling biceps flex",
                steps: [
                    "Kneel on one knee, with the other foot planted in front.",
                    "Lean forward and brace your elbow against your front knee.",
                    "Perform a concentrated bicep flex.",
                    "This isolates the bicep and creates a powerful, focused look.",
                    "Keep your other arm relaxed or on your hip."
                ],
                mistakes: [
                    "Using body momentum instead of isolating the bicep.",
                    "Poor posture while kneeling.",
                    "A weak or unfocused facial expression."
                ]
            },
            {
                name: "Mirror Selfie Pose (Gym Style)",
                image: "https://i.ibb.co/YCtkCyv/Whats-App-Image-2025-07-10-at-02-20-50.jpg",
                hint: "gym selfie pose",
                steps: [
                    "Stand at a slight angle to the mirror to create depth.",
                    "Flex the muscles closest to the camera (e.g., arm, shoulder).",
                    "Twist your torso to make your waist appear smaller.",
                    "Good lighting is crucial: position yourself so light hits your muscles from the side or above.",
                    "Maintain a confident, natural expression."
                ],
                mistakes: [
                    "Standing front-on, which can make you look flat.",
                    "Bad lighting that washes out definition.",
                    "Trying too hard and looking unnatural."
                ]
            }
        ]
    }
];
