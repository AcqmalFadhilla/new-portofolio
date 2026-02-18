export type ProjectRole = "ios" | "ml" | "fullstack";

export type demoPoint = {
    video: string;
    appstore: string;
    link: string;
};

export type challangeSolustionPoint = {
    challange: string;
    solustion: string;
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
    problem: {
        intro: string;
        points: string[];
        conclusion: string;
    };
    solution: string;
    myContributions: string[];
    challengesSolutions: challangeSolustionPoint[];
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
        overview: "Racqee is an iOS sports camera app that automatically captures action moments during racket sports using real time pose detection. The app analyzes body movements continuously and triggers photo capture at the optimal moment, allowing users to obtain high quality action photos without manual interaction.",
        goal: "To develop an Ai camera application that automatically captures user action moments based on real time body movement analysis and produces high quality photos that are ready to share without manual capture.",
        problem: {
            intro: "Many racket sports players want to document their playing moments, but face several challenges:",
            points: ["They need assistance from another person to take photos",
                "It is difficult to capture the exact action moment manually",
                "Photos are often blurry, mistimed, or miss key movements",
                "Lack of control over timing and photo quality"],
            conclusion: "As a result, important action moments are often not captured effectively.",
        },
        solution: `Racqee provides an automated camera system that captures photos based on real time body movement analysis.
            Using pose detection, the app identifies key action movements such as swings and automatically triggers photo capture at the decisive moment without requiring manual input.
            This enables users to capture more natural, sharp, and well timed action photos without needing external assistance.`,
        myContributions: ["Led the development of the MVP auto-capture feature, enabling fully automated photo capture based on real time pose detection.",
            "Integrated CoreML, Vision, and AVFoundation into a unified real time processing pipeline, significantly reducing missed action moments.",
            "Designed and implemented an efficient on device ML inference pipeline optimized for real time performance and low power consumption.",
            "Developed and optimized a lightweight pose classification model achieving > 90 % real time detection accuracy.",
            "Improved detection efficiency by approximately 60 % through ML architecture optimization and efficient inference pipeline design.",
            "Built and validated a working prototype through real on court testing with 5 early users, receiving positive usability feedback.",
            "Implemented intelligent burst capture logic to maximize decisive moment capture while minimizing unnecessary processing.",
            "Developed automatic zoom adjustment to improve subject framing and overall photo composition."],
        challengesSolutions: [{
            challange: "Building a lightweight ML model suitable for real time performance on iPhone",
            solustion: "Reduced model complexity and leveraged Apple Vision’s built-in pose keypoint detection. Extracted keypoints were used as input features for a custom CoreML classification model, significantly reducing computational cost while maintaining high accuracy."
        },
        {
            challange: "Ensuring CoreML model compatibility with iOS",
            solustion: "Converted the trained model into CoreML format using coremltools, ensuring compatibility with Apple’s on-device ML framework and enabling efficient hardware accelerated inference."
        },
        {
            challange: "Accurately capturing decisive action moments",
            solustion: "Implemented an intelligent burst capture mechanism that activates for 3–4 seconds after detecting a valid action. During this period, ML inference is temporarily paused to reduce resource usage while maximizing decisive moment capture."
        },
        {
            challange: "Synchronizing camera frames with real-time ML processing",
            solustion: "Used AVCaptureVideoDataOutput with a dedicated background processing queue to ensure efficient and synchronized frame processing without blocking the UI."
        },
        {
            challange: "Maintaining balanced photo composition between subject and background",
            solustion: "Developed an automatic zoom adjustment system based on subject positioning, improving framing and overall photo quality."
        },
        {
            challange: "Synchronizing camera pipeline and ML inference pipeline",
            solustion: "Designed a modular camera architecture separating capture, ML inference, and UI rendering into independent processing layers, ensuring stable and efficient real time performance."
        }
        ],
        impact: ["Successfully implemented a real-time auto capture system using pose detection.",
            "Achieved > 90 % real time pose classification accuracy with optimized on device ML inference.",
            "Improved detection efficiency by approximately 60 % through ML and architecture optimization.",
            "Delivered stable real time performance using fully on device processing.",
            "Reduced missed action moments compared to manual photo capture.",
            "Successfully built and validated an MVP through real - world testing with early users.",
            "Demonstrated efficient integration of CoreML, Vision, and AVFoundation into a production ready pipeline."],
        stack: ["SwiftUI", "CoreML", "Vision", "SwiftData"],
        demo: [{
            video: "-",
            appstore: "-",
            link: "-"
        }],
        conclusion: "-"
    }
];