
export interface BadmintonDrill {
    title: string;
    description: string;
}

export const badmintonSubCategories: Record<string, BadmintonDrill[]> = {
  "footwork-drills": [
    { title: "Shadow Footwork", description: "Mimic court movements without a shuttle to improve agility." },
    { title: "Multi-directional Lunges", description: "Strengthen legs and improve quick directional changes." },
  ],
  "stroke-training": [
    { title: "Clear Shot Practice", description: "Work on deep clears to the back court." },
    { title: "Drop Shot Control", description: "Refine accuracy with net drops." },
  ],
  "defense-drills": [
    { title: "Smash Defense Drill", description: "Train returning powerful smashes consistently." },
    { title: "Block & Net Recovery", description: "Work on blocking smashes and quickly recovering to net play." },
  ],
  "reaction-reflex-training": [
    { title: "Shuttle Reaction Toss", description: "Partner tosses shuttles randomly, react and return quickly." },
    { title: "Multi-shuttle Defense", description: "Coach feeds multiple shuttles rapidly, improve quick responses." },
    { title: "Wall Rally Reflex", description: "Hit shuttles against a wall continuously to boost reflex speed." },
    { title: "Random Direction Feed", description: "Partner feeds shuttles unpredictably to test reflexes." },
    { title: "Light Reaction Drill", description: "React to sudden light/signal cues with instant movement." },
  ],
};
