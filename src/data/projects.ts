export type ProjectRole = "ios" | "ml" | "fullstack";

export type Project = {
    slug: string;
    title: string;
    role: ProjectRole;
    roleLabel: string;

    description: string;
    problem: string;
    solution: string;
    stack: string[];
};

export const projects: Project[] = [
    {
        slug: "Racqee",
        title: "Racqee",
        role: "ios",
        roleLabel: "iOS + ML Engineer",
        description: "-",
        problem:
            "-",
        solution:
            "Built an iOS app using on-device ML to classify ingredients instantly with offline support.",
        stack: ["SwiftUI", "CoreML", "Vision", "SwiftData"],
    },
    {
        slug: "yolo-realtime-detection",
        title: "YOLO Real-time Detection",
        role: "ml",
        roleLabel: "Machine Learning Engineer",
        description: "Real-time object detection pipeline on iOS camera.",
        problem:
            "Need real-time detection with low latency on mobile devices.",
        solution:
            "Integrated YOLO with Vision + AVCaptureSession for smooth real-time inference.",
        stack: ["YOLOv8", "Vision", "AVFoundation"],
    },
    {
        slug: "neo-portfolio",
        title: "Neo-Brutalist Portfolio",
        role: "fullstack",
        roleLabel: "Full Stack Engineer",
        description: "Motion-first Neo-Brutalist personal website.",
        problem:
            "Generic portfolios fail to show personality and engineering taste.",
        solution:
            "Designed a Neo-Brutalist UI with strong motion and clear information hierarchy.",
        stack: ["Next.js", "Tailwind", "Framer Motion"],
    },
];