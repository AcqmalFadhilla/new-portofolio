import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type Props = {
    params: { slug: string };
};

export default function CaseStudyPage({ params }: Props) {
    const project = projects.find((p) => p.slug);

    if (!project) return notFound();

    return (
        <main className="max-w-4xl mx-auto p-6">
            {/* HEADER */}
            <section className="neo-card p-6 mb-8">
                <h1 className="text-4xl font-extrabold">{project.title}</h1>

                <span className="neo-badge bg-purple-300 inline-block mt-3">
                    {project.roleLabel}
                </span>

                <p className="mt-4 text-lg">{project.description}</p>
            </section>

            {/* PROBLEM */}
            <section className="neo-card p-6 mb-6">
                <h3 className="neo-badge bg-red-300 inline-block mb-3">
                    PROBLEM
                </h3>
                <p>{project.problem}</p>
            </section>

            {/* SOLUTION */}
            <section className="neo-card p-6 mb-6">
                <h3 className="neo-badge bg-green-300 inline-block mb-3">
                    SOLUTION
                </h3>
                <p>{project.solution}</p>
            </section>

            {/* STACK */}
            <section className="neo-card p-6">
                <h3 className="neo-badge bg-yellow-300 inline-block mb-3">
                    TECH STACK
                </h3>

                <div className="flex flex-wrap gap-3">
                    {project.stack.map((tech) => (
                        <span
                            key={tech}
                            className="neo-pill bg-yellow-200 neo-tilt-soft"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </section>
        </main>
    );
}