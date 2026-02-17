export type ProjectRole = "ios" | "ml" | "fullstack";

export type demoPoint = {
    video: string;
    appstore: string;
    link: string;
};


export type Project = {
    slug: string;
    title: string;
    role: ProjectRole[];
    roleLabel: string;
    coverImage: string;
    images: string[];
    overview: string;
    goal: string;
    problem: string;
    solution: string;
    myContributions: string[];
    challengesSolutions: string[];
    impact: string[];
    stack: string[];
    demo: demoPoint[];
    conclusion: string;
};

export const projects: Project[] = [
    {
        slug: "Racqee",
        title: "Racqee",
        role: ["ios", "ml"],
        roleLabel: "iOS + ML Engineer",
        coverImage: "/racqee-cover.webp",
        images: ["/racqee-cover.webp", "/racqee-cover.webp", "/racqee-cover.webp"],
        overview: "A sports photo app that automatically captures your best action moments while playing racket sports, using pose detection to recognize key movements and snap photos right at the perfect time.",
        goal: "-",
        problem:
            "-",
        solution:
            "-",
        myContributions: ["-"],
        challengesSolutions: ["-"],
        impact: ["-"],
        stack: ["SwiftUI", "CoreML", "Vision", "SwiftData"],
        demo: [{
            video: "-",
            appstore: "-",
            link: "-"
        }],
        conclusion: "-"
    }
];