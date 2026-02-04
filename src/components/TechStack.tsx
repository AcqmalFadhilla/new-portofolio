import StackSection from "@/components/StackSection";

export default function TechStack() {
    return (
        <div>
            {/* Title */}
            <h3 className="neo-badge bg-green-300 inline-block mb-6">
                TECH STACK
            </h3>

            <div className="space-y-6">
                <StackSection
                    title="iOS"
                    primary
                    items={["Swift", "SwiftUI", "SwiftData"]}
                />

                <StackSection
                    title="Machine Learning"
                    items={["Tensorflow", "Pytorch", "FastAPI", "Scikit-learn", "YOLO", "Hugging Face", "MLFlow", "Langchain", "WanDB"]}
                />

                <StackSection
                    title="FullStack"
                    items={[
                        "Next.js",
                        "React.js",
                        "Tailwind CSS",
                        "TypeScript",
                        "Laravel",
                        "Node.js"
                    ]}
                />
            </div>
        </div>
    );
}
