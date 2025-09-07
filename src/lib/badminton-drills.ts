
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
        name: "Basic Court Movement", 
        youtubeUrl: 'https://www.youtube.com/watch?v=zJgXk2g5-gE', 
        image: "https://picsum.photos/400/300", 
        hint: "badminton footwork", 
        steps: [
            "Start at the center of the court.",
            "Practice moving to all four corners and returning to the center.",
            "Focus on using chasse steps for lateral movement.",
            "Ensure you end with a lunge for shots in the corners."
        ], 
        commonMistakes: [
            "Being flat-footed.",
            "Not returning to the center after each shot.",
            "Taking too many steps."
        ], 
        injuryPrevention: [
            "Proper warm-up is crucial.",
            "Wear shoes with good grip and ankle support.",
            "Strengthen your calves and quads."
        ] 
      },
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
