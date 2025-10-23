
export interface Drill {
    name: string;
    youtubeUrl: string;
    image: string;
    hint: string;
    steps: string[];
    commonMistakes: string[];
    injuryPrevention: string[];
}

export type Sport = "Cricket"; // Can be expanded later

export const cricketSubCategories: Record<string, Drill[]> = {
    "shot-training": [
      { name: "Mastering the Cover Drive", youtubeUrl: 'https://youtu.be/h3N-BRQXTS4?si=NnCYVaAOvI2_O7my', image: "https://i.ibb.co/k2p0n4q/cover-drive.jpg", hint: "cricket cover drive", 
        steps: [
            "Start with a balanced stance, feet shoulder-width apart.",
            "As the bowler releases the ball, take a small initial movement (front press).",
            "Lead with your head and front shoulder towards the line of the ball.",
            "Take a decisive stride towards the pitch of the ball with your front foot.",
            "Bring the bat down in a smooth, high-to-low arc, keeping your elbow high.",
            "Make contact with the ball just beside your front pad.",
            "Follow through fully towards the target area, maintaining your balance."
        ], 
        commonMistakes: [
            "Playing with a 'closed face' bat, causing the ball to go airborne.",
            "Head falling over to the off-side, leading to a loss of balance.",
            "Jabbing at the ball instead of a smooth, flowing motion.",
            "Not getting your front foot close enough to the pitch of the ball."
        ], 
        injuryPrevention: [
            "Warm up your shoulders and hips thoroughly.",
            "Avoid over-striding, which can strain your groin.",
            "Ensure proper footwear to prevent ankle rolls.",
            "Build core strength to support the rotational forces of the shot."
        ] 
      },
      { name: "Pull Shot Timing & Body Position", youtubeUrl: 'https://youtu.be/UIXnMcXYjS4?si=CIdUsmy-FHKAgNi1', image: "https://i.ibb.co/hR4yL9w/pull-shot.jpg", hint: "cricket pull shot", 
        steps: [
            "Identify the short-pitched delivery early.",
            "Move back and across in your crease to create space and get into position.",
            "Keep your eyes level and focused on the ball.",
            "Swivel on the ball of your back foot, rotating your hips and shoulders.",
            "Swing the bat in a horizontal arc, aiming to make contact in front of your body.",
            "Roll your wrists on impact to keep the ball down.",
            "Complete the follow-through over your shoulder."
        ], 
        commonMistakes: [
            "Trying to hit the ball too hard and losing shape.",
            "Playing the shot to a ball that isn't short enough, leading to a top edge.",
            "Not swiveling on the back foot, resulting in a loss of power.",
            "Forgetting to roll the wrists, causing the ball to go up in the air."
        ], 
        injuryPrevention: [
            "Ensure good core and oblique strength to handle the rotation.",
            "Warm up the back and shoulders to prevent muscle strains.",
            "Practice the swivel motion slowly to build muscle memory.",
            "Don't play the shot if you are cramped for room."
        ] 
      },
      { name: "Cut Shot – Square & Late", youtubeUrl: 'https://youtu.be/hFv3HmVgbbE?si=jmSYOqi51QwU_j_E', image: "https://i.ibb.co/yQn7w0q/cut-shot.jpg", hint: "cricket cut shot", 
        steps: [
            "Recognize the short and wide delivery.",
            "Move your back foot back and across, giving yourself room to free your arms.",
            "Rise on your toes to get on top of the bounce.",
            "Swing the bat in a downward chopping motion, aiming to hit the top half of the ball.",
            "Make contact late, beside your body, not in front.",
            "Keep your head still and eyes on the ball throughout the shot."
        ], 
        commonMistakes: [
            "Playing the shot to a ball that is too close to the stumps.",
            "Reaching for the ball with your hands instead of moving your feet.",
            "Hitting up on the ball, resulting in a simple catch for point or gully.",
            "Not committing fully to the shot."
        ], 
        injuryPrevention: [
            "Warm up wrists and forearms.",
            "Strengthen rotator cuff muscles to support the shoulder.",
            "Practice footwork drills to ensure you are in the right position.",
            "Avoid playing the shot off-balance."
        ] 
      },
      { name: "Sweep Shot Variations (Conventional & Reverse)", youtubeUrl: 'https://youtu.be/VAuatgBXwDA?si=ZwvQcKwFFwfD8dmx', image: "https://i.ibb.co/P9tLgqP/sweep-shot.jpg", hint: "cricket sweep shot", 
        steps: [
            "Identify the fuller length delivery from the spinner.",
            "Get down on one knee (back knee), getting your head over your front knee.",
            "Keep your head still and eyes fixed on the ball.",
            "Swing the bat in a low, horizontal arc to meet the ball in front of your pad.",
            "For a reverse sweep, switch your grip and swing from the opposite side.",
            "Roll your wrists to control the direction and keep it on the ground."
        ], 
        commonMistakes: [
            "Choosing the wrong length to sweep; it's risky against very full or short balls.",
            "Closing your eyes or turning your head at the point of impact.",
            "A slow, hesitant swing instead of a decisive one.",
            "Losing balance and falling over during the shot."
        ], 
        injuryPrevention: [
            "Stretch your hamstrings, glutes, and groin area well.",
            "Build strong core muscles to maintain balance.",
            "Practice the kneeling motion to ensure stability and comfort.",
            "Be mindful of your back knee on abrasive surfaces."
        ] 
      },
      { name: "Lofted Shots – Over Mid-off & Mid-wicket", youtubeUrl: 'https://youtu.be/ZlpUOPEknG4?si=weHY9nLfV4z6fjtO', image: "https://i.ibb.co/v4d2M1p/lofted-shot.jpg", hint: "cricket lofted shot", 
        steps: [
            "Create a stable, strong base with your feet.",
            "Identify a full-pitched ball in your hitting zone.",
            "Clear your front leg to give yourself room to swing freely.",
            "Use a full, high back-swing for maximum power generation.",
            "Swing through the line of the ball, aiming to hit the bottom half.",
            "Keep your shape and balance throughout the follow-through."
        ], 
        commonMistakes: [
            "Trying to hit the ball too hard and losing your shape.",
            "Swinging across the line instead of through it.",
            "Not clearing the front leg, which cramps the shot.",
            "Choosing the wrong ball to hit (e.g., a good length ball)."
        ], 
        injuryPrevention: [
            "Ensure a very good warm-up, especially for shoulders and back.",
            "Build rotational power through core exercises like medicine ball throws.",
            "Practice the shot in nets to understand your range and limits.",
            "Don't compromise your balance for power."
        ] 
      },
      { name: "Shadow Practice for Batting Rhythm", youtubeUrl: 'https://youtu.be/klmnN3UNKsY?si=GE5BrVbFnvHA64pG', image: "https://i.ibb.co/mHZd2X0/shadow-batting.jpg", hint: "cricket shadow practice", 
        steps: [
            "Take your normal batting stance in front of a mirror or open space.",
            "Visualize a bowler running in and releasing the ball.",
            "Practice your trigger movements and footwork for different shots (front foot, back foot).",
            "Execute the full motion of the shot, from back-lift to follow-through.",
            "Focus on the feel and rhythm of the movement, not speed.",
            "Repeat for different shots to build muscle memory."
        ], 
        commonMistakes: [
            "Going through the motions without intent or visualization.",
            "Practicing with poor or lazy technique.",
            "Not completing the full shot, including the follow-through.",
            "Focusing only on your favorite shots and neglecting others."
        ], 
        injuryPrevention: [
            "Even without a ball, perform a light warm-up.",
            "Focus on smooth, controlled movements to avoid straining muscles.",
            "Listen to your body; don't overdo it with too many repetitions.",
            "Ensure you have enough space around you to swing the bat freely."
        ] 
      },
      { name: "Playing Spin with Soft Hands", youtubeUrl: 'https://youtu.be/2VcAkGFvH4Y?si=Q-HgpMcczVYqPuAg', image: "https://i.ibb.co/Smsyq1c/playing-spin.jpg", hint: "cricket playing spin", 
        steps: [
            "Watch the ball closely from the spinner's hand to pick the type of delivery.",
            "Use your feet to get to the pitch of the ball (stride out) or get right back in your crease.",
            "Relax your grip on the bat handle.",
            "Aim to meet the ball with a vertical or slightly open bat face right under your eyes.",
            "Absorb the pace of the ball rather than trying to hit it hard.",
            "Guide the ball into gaps in the field."
        ], 
        commonMistakes: [
            "Having a tight, rigid grip, which makes the ball pop up.",
            "Being stuck in the crease (neither front nor back foot).",
            "Playing with a pre-determined shot in mind.",
            "Pushing hard at the ball, leading to catches in close."
        ], 
        injuryPrevention: [
            "Practice stretching for wrists and forearms.",
            "Drill footwork patterns to avoid getting caught in awkward positions.",
            "Strengthen your core to maintain balance during forward and backward movements.",
            "Stay light on your feet to reduce stress on the joints."
        ] 
      },
      { name: "Footwork Drills for Front & Back Foot Balance", youtubeUrl: 'https://youtu.be/HEHggOOds1w?si=KtCc8cd1dVGX6Rvb', image: "https://i.ibb.co/Y05G1D5/footwork-drills.jpg", hint: "cricket footwork", 
        steps: [
            "Use cones or markers to create a small grid.",
            "Practice moving forward into a drive position, ensuring your head leads the movement.",
            "Practice moving back and across into a pull or cut position.",
            "Focus on taking small, quick, and balanced steps.",
            "Hold the end position for a few seconds to check your balance and head position.",
            "Incorporate shadow bat swings once the footwork feels natural."
        ], 
        commonMistakes: [
            "Taking large, slow steps that leave you off-balance.",
            "Crossing your feet over.",
            "Letting your head fall outside the line of your body.",
            "Losing balance after completing the shadow swing."
        ], 
        injuryPrevention: [
            "Warm up ankles, knees, and hips.",
            "Wear supportive cricket shoes with good grip.",
            "Start slowly and increase the speed and intensity of the drills gradually.",
            "Incorporate balance exercises (e.g., single-leg stands) into your routine."
        ] 
      },
    ],
    "bowling-drills": [
      { name: "Seam Position & Grip Control", youtubeUrl: 'https://youtu.be/wIha6oYWvtE?si=YrpoaJeazmB0kjfT', image: "https://i.ibb.co/YZrdfg1/seam-position.jpg", hint: "bowling seam position", 
        steps: [
            "Hold the ball with the seam upright.",
            "Place your index and middle fingers on either side of the seam, comfortably apart.",
            "Rest your thumb on the bottom of the ball for support.",
            "Practice flicking your wrist upon release to impart back-spin.",
            "Aim to have the seam remain upright and wobble-free as it travels to the target."
        ], 
        commonMistakes: [
            "Gripping the ball too tightly, which restricts feel and control.",
            "Having a crooked or scrambled seam at the point of release.",
            "Not using the wrist to impart revolutions on the ball.",
            "Thumb position interfering with the release."
        ], 
        injuryPrevention: [
            "Warm up your wrist, elbow, and shoulder joints thoroughly.",
            "Strengthen your forearm and rotator cuff muscles.",
            "Avoid bowling too many deliveries too soon; build up your workload gradually.",
            "Ensure a smooth, repeatable bowling action."
        ] 
      },
      { name: "Outswing & Inswing Bowling Mechanics", youtubeUrl: 'https://youtube.com/shorts/wyCbTfwnwoI?si=Nnx1MJT5iE1DIo57', image: "https://i.ibb.co/3sZgRkP/swing-bowling.jpg", hint: "bowling swing", 
        steps: [
            "For outswing (to a right-hander), angle the seam towards the slips.",
            "For inswing, angle the seam towards fine leg.",
            "Maintain a braced front leg on landing to act as a pivot.",
            "Drive your non-bowling arm down forcefully to increase bowling speed.",
            "Keep your wrist locked behind the ball and release with the seam angled correctly.",
            "Follow through straight down the wicket."
        ], 
        commonMistakes: [
            "Dropping the wrist at the point of release, losing control of the seam.",
            "Collapsing the front leg, which reduces power and height.",
            "Not completing the follow-through, which can lead to injury.",
            "Trying to force the swing instead of letting the seam and wrist position do the work."
        ], 
        injuryPrevention: [
            "Core and oblique strengthening is vital for rotational power and stability.",
            "Ensure proper flexibility in the shoulders and thoracic spine.",
            "Avoid overuse injuries by managing your bowling load.",
            "Listen to your body for any signs of pain in the shoulder, elbow, or back."
        ] 
      },
      { name: "Perfecting the Yorker (Target Zone)", youtubeUrl: 'https://youtu.be/AA_z4wLEGCA?si=qOGSM-TKckY-zuV5', image: "https://i.ibb.co/P9tGzR2/yorker.jpg", hint: "bowling yorker", 
        steps: [
            "Place a target (e.g., a shoe or cone) at the base of the stumps.",
            "Run in with your normal action but focus on a slightly later release point.",
            "Keep your head and eyes fixed on the target area, not the batsman.",
            "Accelerate through the crease and drive your arm over with speed.",
            "Aim to hit the target on the full.",
            "Focus on accuracy first, then increase the pace."
        ], 
        commonMistakes: [
            "Trying to bowl it too fast initially and losing all accuracy.",
            "Releasing the ball too early, resulting in a full toss.",
            "Releasing the ball too late, resulting in a half-volley.",
            "Losing intensity in the action, which makes the yorker ineffective."
        ], 
        injuryPrevention: [
            "A strong core and back are essential to maintain a stable body position.",
            "Ensure a full and proper warm-up, as bowling yorkers requires high effort.",
            "Do not practice for too long in one session to avoid back and shoulder strain.",
            "Follow through completely to decelerate your arm safely."
        ] 
      },
      { name: "Length Variation Drill (Short, Good, Full)", youtubeUrl: 'https://youtu.be/mnjPhoN7m9s?si=XW4SvjlVaIrnFLYi', image: "https://i.ibb.co/Wc6x0bV/bowling-length.jpg", hint: "bowling length", 
        steps: [
            "Set up three different colored cones on the pitch to mark short, good, and full lengths.",
            "Bowl with your normal action, deciding before you run in which cone you are aiming for.",
            "For a fuller ball, aim to release slightly later and drive your arm over more.",
            "For a shorter ball, release slightly earlier and pull down harder with your non-bowling arm.",
            "Focus on the 'feel' of the release point for each length.",
            "Mix up the lengths randomly to simulate match conditions."
        ], 
        commonMistakes: [
            "Sacrificing pace and rhythm to focus solely on length.",
            "Not adjusting the release point, leading to inconsistent lengths.",
            "Bowling with a lazy front arm, which affects both pace and control.",
            "Losing focus and just 'throwing' the ball instead of bowling it."
        ], 
        injuryPrevention: [
            "Maintain a consistent and repeatable bowling action to reduce stress on the body.",
            "Ensure your workload is managed to prevent overuse injuries.",
            "Strengthen your entire posterior chain (glutes, hamstrings, back) for support.",
            "Stay hydrated and well-rested between sessions."
        ] 
      },
      { name: "Run-Up Consistency & Rhythm Practice", youtubeUrl: 'https://youtu.be/jkqQGShPRKA?si=36t4P6XjS-lugrMb', image: "https://i.ibb.co/L89kM0Q/bowling-runup.jpg", hint: "bowling run up", 
        steps: [
            "Mark out your full run-up distance.",
            "Start slowly, jogging through the run-up to feel the rhythm.",
            "Gradually build up speed, focusing on a smooth acceleration into the delivery stride.",
            "Practice running in a straight line towards your target.",
            "Ensure your final 'bound' or 'jump' is balanced and powerful.",
            "Run through without bowling the ball initially to perfect the approach."
        ], 
        commonMistakes: [
            "Starting too fast and having to slow down before delivery.",
            "Running in a curved line, which throws off alignment.",
            "Losing momentum just before the delivery stride.",
            "An inconsistent number of steps in the run-up."
        ], 
        injuryPrevention: [
            "Wear well-cushioned bowling boots to absorb impact.",
            "Practice on a surface with good traction to prevent slips.",
            "Strengthen lower body muscles (quads, glutes, calves) to handle the load.",
            "Avoid sudden changes to your run-up length or style."
        ] 
      },
      { name: "Spin Bowling Variations (Off, Leg, Googly)", youtubeUrl: 'https://youtube.com/shorts/tNSEY-xzbMg?si=NtCexyMFoi0wNMjH', image: "https://i.ibb.co/L6V2Mh0/spin-bowling.jpg", hint: "spin bowling", 
        steps: [
            "Master one type of delivery (e.g., off-spin) before adding variations.",
            "For off-spin, impart spin with your index finger.",
            "For leg-spin, use your third (ring) finger to spin the ball.",
            "For a googly (wrist-spin), release the ball from the back of your hand.",
            "Use your whole body—pivot, shoulder rotation, and wrist—to generate spin.",
            "Practice each variation until you can land it consistently."
        ], 
        commonMistakes: [
            "Trying to bowl too many variations without mastering one.",
            "Not using the wrist and fingers enough, resulting in a 'flat' delivery.",
            "Losing flight and drift by trying to bowl too fast.",
            "Telegraphing the variation with an obvious change in action."
        ], 
        injuryPrevention: [
            "Focus on shoulder, wrist, and finger flexibility and strength.",
            "Avoid a jerky action; aim for a smooth, fluid motion.",
            "Strengthen your core and obliques for better rotational control.",
            "Gradually increase the number of deliveries to avoid finger and shoulder soreness."
        ] 
      },
      { name: "Wrist Position for Seam Movement", youtubeUrl: 'https://youtube.com/shorts/CT81EwRALDU?si=RSiGSRw5E1AkTlao', image: "https://i.ibb.co/PgpWp1B/wrist-position.jpg", hint: "bowling wrist", 
        steps: [
            "Practice bowling with a locked, firm wrist positioned directly behind the ball.",
            "Focus on snapping the wrist forward upon release to create backspin.",
            "Drill by standing still and just using your arm and wrist to bowl at a target.",
            "This upright seam position is the foundation for both swing and seam bowling.",
            "Feel the ball coming off your fingertips as you release."
        ], 
        commonMistakes: [
            "A floppy or collapsed wrist, which leads to a scrambled seam.",
            "Not locking the wrist, causing the hand to come around the side of the ball.",
            "A release that is too passive, with no 'snap' or energy.",
            "Fingers not positioned correctly on the seam."
        ], 
        injuryPrevention: [
            "Strengthen your forearm muscles with exercises like wrist curls.",
            "Use stress balls to improve finger and grip strength.",
            "Perform regular wrist flexibility exercises.",
            "Don't over-bowl, especially when focusing on a new technique, to avoid repetitive strain."
        ] 
      },
      { name: "Slower Balls & Change-ups for Limited Overs", youtubeUrl: 'https://youtube.com/shorts/NwdzV29c25E?si=WdRRA4mPrPVl4uQB', image: "https://i.ibb.co/VMyL0n9/slower-ball.jpg", hint: "bowling slower ball", 
        steps: [
            "Maintain the same arm speed as your stock delivery to deceive the batsman.",
            "For an off-cutter, roll your fingers down the side of the ball.",
            "For a leg-cutter, use the opposite finger motion.",
            "For a back-of-the-hand slower ball, flip your wrist so the back of your hand faces the batsman on release.",
            "Practice these variations to understand how they affect your line and length."
        ], 
        commonMistakes: [
            "Dropping your arm speed, which is a clear signal to the batsman.",
            "Losing control and bowling a wide or a full toss.",
            "Overusing the slower ball, making it predictable.",
            "Not practicing it enough to be confident in a match situation."
        ], 
        injuryPrevention: [
            "Mastering slower balls puts extra stress on the shoulder, elbow, and wrist.",
            "Ensure these joints are strong and flexible.",
            "Introduce these variations gradually into your training.",
            "A strong, stable core is essential to maintain a consistent arm path while altering the release."
        ] 
      },
    ],
    "fielding-drills": [
        { name: "High Catch Technique (Overhead & Running)", youtubeUrl: "https://youtube.com/shorts/mXirakac2us?si=wa2TPwMIZ_3DlZiA", image: "https://i.ibb.co/pwnsRHL/high-catch.jpg", hint: "fielding high catch", 
          steps: [
              "Get under the ball as quickly as possible, using small, fast steps.",
              "Position yourself slightly behind the ball's expected landing spot.",
              "Create a 'cup' with your hands, fingers pointing up, and watch the ball all the way in.",
              "Keep your hands soft and allow them to 'give' as the ball makes contact.",
              "Secure the ball to your chest after the catch to ensure control."
          ], 
          commonMistakes: [
              "Running with 'heavy feet' or taking large, off-balance strides.",
              "Taking your eyes off the ball at the last second.",
              "Having 'hard hands', causing the ball to bounce out.",
              "Snatching at the ball away from your body."
          ], 
          injuryPrevention: [
              "Practice on soft ground to reduce impact on joints.",
              "Strengthen your neck muscles to help keep your head still while looking up.",
              "Wear appropriate footwear for good traction.",
              "Practice finger-strengthening exercises to prevent sprains."
          ] 
        },
        { name: "Slip Catching Reaction Drills", youtubeUrl: "https://youtu.be/nHticEx6I_I?si=hLSejg-We5hlf_C0", image: "https://i.ibb.co/3s6t4cT/slip-catch.jpg", hint: "fielding slip catch", 
          steps: [
              "Assume a low, wide, and balanced stance.",
              "Stay on the balls of your feet, ready to move in any direction.",
              "Keep your hands low and in front of you, creating a large catching area.",
              "Watch the ball from the bowler's hand to the bat.",
              "Move your feet first to get in line with the ball, then let your hands follow.",
              "Use 'soft hands' to absorb the pace of the edge."
          ], 
          commonMistakes: [
              "Standing up too straight, which slows down reaction time.",
              "Being flat-footed and slow to react.",
              "Snatching at the ball with hard hands.",
              "Closing your hands too early before the ball is secure."
          ], 
          injuryPrevention: [
              "Do regular hand and finger stretching and strengthening exercises.",
              "Practice falling and diving techniques on soft surfaces to build confidence.",
              "Stay focused to avoid being hit by the ball unexpectedly.",
              "Keep your head up to maintain awareness."
          ] 
        },
        { name: "One-Hand Reflex Catches", youtubeUrl: "https://youtube.com/shorts/eidg2T2PLPY?si=nWaxIRXCwPPxtjVN", image: "https://i.ibb.co/dK5wK2c/reflex-catch.jpg", hint: "fielding reflex catch", 
          steps: [
              "Stand close to a wall or a partner with a reaction ball or tennis ball.",
              "Have the ball thrown against the wall or directly at you from a short distance.",
              "Focus on watching the ball intently and reacting quickly.",
              "Move to the ball and attempt to catch it with one hand.",
              "Alternate between your right and left hands.",
              "Keep your body balanced and your eyes level."
          ], 
          commonMistakes: [
              "Guessing the direction instead of reacting to it.",
              "Taking your eye off the ball.",
              "Using a stiff arm and hand.",
              "Being off-balance, which limits your reach."
          ], 
          injuryPrevention: [
              "Start with a softer ball (e.g., tennis ball) before moving to a harder one.",
              "Warm up your wrists and shoulders.",
              "Keep your fingers relaxed but strong.",
              "Ensure the training area is clear of obstacles."
          ] 
        },
        { name: "Direct Hit Drill (Cone Target)", youtubeUrl: "https://youtu.be/1gszkRU0BA8?si=r49-gKm2mpRcl4YA", image: "https://i.ibb.co/JqSjTq3/direct-hit.jpg", hint: "fielding direct hit", 
          steps: [
              "Set up a single stump or a cone as a target.",
              "Start by attacking a stationary ball, picking it up cleanly.",
              "Get your body in a low, balanced position before throwing.",
              "Throw over the top with a straight arm, like a miniature bowling action.",
              "Aim for the base of the stump/cone.",
              "Progress to picking up a moving ball and throwing on the run."
          ], 
          commonMistakes: [
              "Being off-balance when you throw, leading to inaccuracy.",
              "Throwing with a bent arm (lobbing it).",
              "Taking your eyes off the target as you throw.",
              "Rushing the pickup and fumbling the ball."
          ], 
          injuryPrevention: [
              "Properly warm up your throwing shoulder and elbow.",
              "Build throwing volume gradually to avoid overuse injuries.",
              "Practice good 'long barrier' technique when stopping the ball to protect your body.",
              "Strengthen your core to provide a stable base for throwing."
          ] 
        },
        { name: "Boundary Throw Mechanics (Long Distance)", youtubeUrl: "https://youtu.be/vRYnDzOqpbg?si=MjlKc18dZezsywFV", image: "https://i.ibb.co/M8Vz0B3/boundary-throw.jpg", hint: "fielding boundary throw", 
          steps: [
              "Approach the ball at speed, but stay balanced.",
              "As you pick up the ball, use a small 'crow hop' to generate momentum.",
              "Rotate your hips and shoulders to face the target.",
              "Throw with a high arm action, releasing the ball at the highest point.",
              "Aim for the keeper's gloves on the full or on one bounce.",
              "Ensure your follow-through brings your body towards the target."
          ], 
          commonMistakes: [
              "Throwing off the wrong foot, losing power and accuracy.",
              "A low, loopy arm action.",
              "Not using the crow hop to build momentum.",
              "Throwing off-balance, leading to a weak or wayward throw."
          ], 
          injuryPrevention: [
              "A comprehensive shoulder strengthening program (including rotator cuff) is essential.",
              "Ensure good flexibility in the shoulder and thoracic spine.",
              "Manage throwing load; don't make too many max-effort throws in one session.",
              "Listen to your shoulder; stop if you feel any sharp pain."
          ] 
        },
        { name: "Agility Ladder + Throw Combo", youtubeUrl: "https://youtube.com/shorts/OUfdNGBDznA?si=2CJbBfDvBhvqcj_2", image: "https://i.ibb.co/FqsD3g8/agility-fielding.jpg", hint: "fielding agility", 
          steps: [
              "Perform a quick footwork drill through an agility ladder.",
              "As you exit the ladder, a coach rolls a ball out.",
              "Sprint to the ball, pick it up cleanly.",
              "Set your feet and execute a strong, accurate throw to a target.",
              "Focus on maintaining control and technique even when fatigued."
          ], 
          commonMistakes: [
              "Getting tangled in the ladder.",
              "Rushing the pickup after the ladder drill and fumbling.",
              "Letting fatigue affect the quality and accuracy of the throw.",
              "A lazy or slow transition from the ladder to the sprint."
          ], 
          injuryPrevention: [
              "Ensure a thorough warm-up as this drill is high intensity.",
              "Focus on landing softly during ladder drills to protect knees and ankles.",
              "Build up the intensity and duration of the drill over time.",
              "Stay hydrated throughout the session."
          ] 
        },
        { name: "Diving Technique for Ground Saves", youtubeUrl: "https://youtube.com/shorts/B1qsDzL4SHg?si=16DnhQ5SCf8wlpJ-", image: "https://i.ibb.co/y5MctbS/diving-save.jpg", hint: "fielding dive", 
          steps: [
              "Start in a low, ready position.",
              "Take a powerful step towards the direction of the dive.",
              "Extend your body low to the ground, leading with your hands.",
              "Keep your eyes on the ball as you dive.",
              "Make contact with the ground with your side (hip and shoulder) to spread the impact.",
              "Attempt to get your body behind the ball to block it."
          ], 
          commonMistakes: [
              "Diving head-first, which is dangerous.",
              "Landing heavily on your elbow or knee.",
              "Hesitating and not committing to the dive.",
              "Taking your eye off the ball."
          ], 
          injuryPrevention: [
              "Practice on very soft grass or mats to begin with.",
              "Learn how to roll out of a dive to dissipate energy.",
              "Strengthen your core, shoulders, and wrists.",
              "Wear long sleeves or protective padding when first learning."
          ] 
        },
        { name: "Flat Throw Accuracy Under Pressure", youtubeUrl: "https://youtu.be/IrXJ-6so8AU?si=TrisKx15kdbq9uWa", image: "https://i.ibb.co/VDKg1Jt/flat-throw.jpg", hint: "fielding flat throw", 
          steps: [
              "Set up a single stump as a target.",
              "Have a feeder roll the ball out to your left and right.",
              "Attack the ball, pick it up, and throw in one fluid motion.",
              "Focus on a low, flat trajectory for your throw.",
              "Practice throwing on the turn from different angles.",
              "The goal is speed and accuracy, not maximum power."
          ], 
          commonMistakes: [
              "A high, loopy throw that gives the batsman time to get back.",
              "Taking too many steps after picking up the ball.",
              "Throwing from an unstable base.",
              "Sacrificing accuracy for speed."
          ], 
          injuryPrevention: [
              "Warm up the shoulder and elbow thoroughly.",
              "Ensure good mechanics to avoid placing undue stress on the elbow joint.",
              "Strengthen your core and obliques for rotational power.",
              "Don't perform this drill for too long to avoid overuse of the throwing arm."
          ] 
        }
    ],
    "wicketkeeping-drills": [
        { name: "Basic Glove Work & Posture", youtubeUrl: "https://www.youtube.com/watch?v=Jg_c-gQ1j2o", image: "https://i.ibb.co/X8gYkrr/glovework.jpg", hint: "wicketkeeping gloves", 
          steps: [
              "Assume a low, wide, and comfortable squat position.",
              "Stay on the balls of your feet, not flat-footed.",
              "Present a large target with your gloves, hands close together.",
              "For balls on the off-side, lead with your head and left foot.",
              "For balls on the leg-side, lead with your head and right foot.",
              "Watch the ball into the gloves and 'give' with it."
          ], 
          commonMistakes: [
              "Standing up too early as the ball arrives.",
              "Snatching at the ball with hard hands.",
              "Feet being too narrow, leading to poor balance.",
              "Not moving your feet, just reaching with your hands."
          ], 
          injuryPrevention: [
              "Strengthen your quads, glutes, and lower back to hold the squat position.",
              "Ensure good hip mobility to move laterally with ease.",
              "Practice finger-strengthening exercises.",
              "Always wear a helmet and other protective gear."
          ] 
        },
        { name: "Standing Up to Spinners – Collection Drill", youtubeUrl: "https://www.youtube.com/watch?v=Jg_c-gQ1j2o", image: "https://i.ibb.co/ZcTyQ6c/wk-spin.jpg", hint: "wicketkeeping spinners", 
          steps: [
              "Start in your low squat position, as close to the stumps as comfortable.",
              "Stay low as the ball is delivered and bounces.",
              "Watch the ball all the way from the hand to your gloves.",
              "Allow the ball to come to you, collecting it beside your body, not in front.",
              "Your head should be over the line of the ball.",
              "Focus on clean takes before thinking about stumpings."
          ], 
          commonMistakes: [
              "Coming up out of your squat too early.",
              "Reaching for the ball in front of the stumps.",
              "Allowing the ball to hit your body instead of your gloves.",
              "Being distracted by the batsman's movements."
          ], 
          injuryPrevention: [
              "Endurance in the legs and back is key; practice holding the squat.",
              "Improve hip and ankle flexibility.",
              "Protect your fingers; consider taping them for long sessions.",
              "Stay alert to avoid being hit by the bat or ball."
          ] 
        },
        { name: "Stumping Practice with Moving Ball", youtubeUrl: "https://www.youtube.com/watch?v=Jg_c-gQ1j2o", image: "https://i.ibb.co/Bq5nQ3F/stumping.jpg", hint: "wicketkeeping stumping", 
          steps: [
              "Take the ball cleanly on the side of the stumps.",
              "Your hands should move in a smooth arc from the collection point to the stumps.",
              "Bring your hands and the ball back to the stumps swiftly.",
              "Remove the bails with the ball in your gloves.",
              "Stay balanced throughout the entire movement.",
              "Listen for the 'drag' of the back foot as much as you watch for it."
          ], 
          commonMistakes: [
              "Trying to take the bails off before you have secured the ball.",
              "Taking the ball in front of the stumps (which is a no-ball).",
              "A slow, hesitant movement from gloves to stumps.",
              "Losing balance and falling away from the stumps."
          ], 
          injuryPrevention: [
              "This drill requires quick, repetitive movements. Warm up your wrists and shoulders.",
              "Practice the footwork to avoid twisting your knees or ankles.",
              "Build core strength for stability during rapid transitions.",
              "Don't over-practice; quality over quantity to prevent strain."
          ] 
        },
        { name: "High Ball Catching – Under Lights", youtubeUrl: "https://www.youtube.com/watch?v=Jg_c-gQ1j2o", image: "https://i.ibb.co/k0z0v2B/wk-high-catch.jpg", hint: "wicketkeeping high ball", 
          steps: [
              "Get under the ball quickly.",
              "Keep your eyes on the ball at all times, even with lights in your vision.",
              "Use your gloves as 'blinders' to shield your eyes from the glare if necessary.",
              "Position yourself to take the catch with your body moving slightly forward.",
              "Use the 'reverse cup' method (fingers pointing down) for very high balls.",
              "Call for the catch loudly and clearly."
          ], 
          commonMistakes: [
              "Misjudging the flight of the ball under lights.",
              "Getting distracted by the lights and taking your eyes off the ball.",
              "Allowing the ball to swirl and drift away from you.",
              "Not communicating with other fielders."
          ], 
          injuryPrevention: [
              "Practice neck-strengthening exercises to cope with looking up for long periods.",
              "Wear sunglasses or anti-glare equipment if allowed and helpful.",
              "Drill communication with teammates to avoid collisions.",
              "Practice falling safely."
          ] 
        },
        { name: "Reaction Time Drills (Ball Drop, Net)", youtubeUrl: "https://www.youtube.com/watch?v=Jg_c-gQ1j2o", image: "https://i.ibb.co/1KkR4zK/wk-reaction.jpg", hint: "wicketkeeping reaction", 
          steps: [
              "For ball drop, have a coach stand behind you and drop a ball; react and catch it after it bounces.",
              "For a net drill, throw a ball into a rebound net and react to the unpredictable bounce.",
              "Stay in your low, ready stance throughout.",
              "Focus on explosive first-step movement.",
              "Watch the ball as closely as possible to read its direction."
          ], 
          commonMistakes: [
              "Anticipating the direction instead of reacting.",
              "Being flat-footed and slow to move.",
              "Taking your eyes off the ball.",
              "Having a tense body, which slows down reflexes."
          ], 
          injuryPrevention: [
              "Ensure the training area is safe and free of hazards.",
              "Start with slower drills and gradually increase the speed and unpredictability.",
              "Warm up your ankles, knees, and hips for quick lateral movements.",
              "Stay hydrated and focused to prevent accidents."
          ] 
        },
        { name: "Leg-Side Take Technique", youtubeUrl: "https://www.youtube.com/watch?v=Jg_c-gQ1j2o", image: "https://i.ibb.co/VSPgWwS/leg-side-take.jpg", hint: "wicketkeeping leg side", 
          steps: [
              "From your stance, lead with your head towards the leg side.",
              "Push off powerfully with your right foot (for a right-hander).",
              "Extend your left leg out, allowing your body to move with the ball.",
              "Keep your hands soft and allow them to travel with the line of the ball.",
              "Your goal is to get your body behind the ball as much as possible.",
              "Watch the ball all the way into your gloves."
          ], 
          commonMistakes: [
              "A lazy or incomplete movement, just flicking your hands at the ball.",
              "Being unsighted by the batsman's body.",
              "Getting your feet in a tangle.",
              "A stiff body position that limits your range of motion."
          ], 
          injuryPrevention: [
              "Excellent hip mobility and flexibility is crucial.",
              "Strengthen your adductor (groin) and abductor muscles.",
              "Practice the leg-side movement pattern slowly before adding speed.",
              "Ensure you have adequate space to move."
          ] 
        },
        { name: "Footwork Behind the Stumps", youtubeUrl: "https://www.youtube.com/watch?v=Jg_c-gQ1j2o", image: "https://i.ibb.co/9q0mHhM/wk-footwork.jpg", hint: "wicketkeeping footwork", 
          steps: [
              "Set up cones in an arc behind the stumps.",
              "Practice moving laterally from the center to each cone and back.",
              "Focus on small, sharp, and powerful steps.",
              "Stay low throughout the movement.",
              "Keep your head still and your hands ready.",
              "Simulate taking a ball at the end of each movement."
          ], 
          commonMistakes: [
              "Crossing your feet over.",
              "Standing up as you move.",
              "Slow, heavy footwork.",
              "Losing your balance as you change direction."
          ], 
          injuryPrevention: [
              "Strengthen your calves, quads, and glutes.",
              "Practice agility ladder drills to improve foot speed.",
              "Wear supportive footwear.",
              "Ensure the ground is not slippery or uneven."
          ] 
        },
        { name: "Drill: 10 Catches in 30 Seconds", youtubeUrl: "https://www.youtube.com/watch?v=Jg_c-gQ1j2o", image: "https://i.ibb.co/yqgZ365/wk-catches.jpg", hint: "wicketkeeping catches", 
          steps: [
              "Have a feeder (or a bowling machine) deliver 10 balls in quick succession.",
              "The balls should vary in line and length.",
              "Focus on moving your feet for every single delivery.",
              "Concentrate on a clean take each time.",
              "After catching, quickly discard the ball and get ready for the next one.",
              "Aim to stay low and sharp for the entire drill."
          ], 
          commonMistakes: [
              "Getting lazy with footwork after the first few catches.",
              "Snatching at the ball because you're rushing.",
              "Losing concentration towards the end of the drill.",
              "Standing up between catches."
          ], 
          injuryPrevention: [
              "This is a high-intensity drill. Ensure you are fully warmed up.",
              "Stay hydrated.",
              "Communicate with your feeder about the pace and frequency.",
              "Build up to 10 catches; start with 5 or 6 and increase as your fitness improves."
          ] 
        }
    ]
};
