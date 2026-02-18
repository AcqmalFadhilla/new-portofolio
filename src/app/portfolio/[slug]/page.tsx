"use client";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { getTechStyle } from "@/lib/getTechStyle";
import ImageCarousel from "@/components/ImageCarousel";
import CTA from "@/components/CTA";
import CaseStudyTimeline from "@/components/CaseStudyTimeline";
import Link from "next/link";

type Props = {
    params: { slug: string };
};

export default function CaseStudyPage({ params }: Props) {
    const project = projects.find((p) => p.slug);

    if (!project) return notFound();

    return (
        <main className="max-w-6xl mx-auto p-6">
            {/* BACK BUTTON */}
            <Link
                href="/portfolio"
                className="neo-pill inline-block mb-6 bg-blue-200 hover:translate-x-1 transition"
            >
                ← Back to Portfolio
            </Link>
            {/* CAROUSEL */}
            <ImageCarousel images={project.images} />

            {/* HEADER */}
            <section className="neo-card p-6 mb-8">
                <h1 className="text-4xl font-extrabold">{project.title}</h1>

                <span className="neo-badge bg-purple-300 inline-block mt-3">
                    {project.roleLabel}
                </span>

                <p className="mt-4 text-lg">{project.overview}</p>
            </section>

            {/* GOAL */}
            <section className="neo-card p-6 mb-6">
                <h3 className="neo-badge bg-emerald-300 inline-block mb-3">
                    GOAL
                </h3>
                <p>{project.goal}</p>
            </section>

            {/* PROBLEM */}
            <section className="neo-card p-6 mb-6">
                <h3 className="neo-badge bg-red-300 inline-block mb-2">
                    PROBLEM
                </h3>

                <p className="mb-4">{project.problem.intro}</p>

                <ul className="list-disc pl-6 space-y-2 mb-2">
                    {project.problem.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>

                <p>{project.problem.conclusion}</p>
            </section>

            {/* SOLUTION */}
            <section className="neo-card p-6 mb-6">
                <h3 className="neo-badge bg-green-300 inline-block mb-3">
                    SOLUTION
                </h3>
                <p>{project.solution}</p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                {/* RESPONSIBILITY */}
                <section className="md:col-span-2">
                    <CaseStudyTimeline
                        blocks={[
                            {
                                title: "My Contributions",
                                items: project.myContributions,
                                color: "bg-orange-400",
                            },
                            {
                                title: "Challenges & Solutions",
                                items: project.challengesSolutions,
                                color: "bg-blue-400",
                            },
                            {
                                title: "Impact",
                                items: project.impact,
                                color: "bg-green-400",
                            },
                        ]}
                    />
                </section>

                {/* TECH STACK */}
                <section className="neo-card p-6 h-full">
                    <h3 className="neo-badge bg-green-300 inline-block mb-6">
                        TECH STACK
                    </h3>

                    <div className="flex flex-wrap gap-3">
                        {project.stack.map((tech) => (
                            <span
                                key={tech}
                                className={`neo-pill ${getTechStyle(tech)}`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                </section>
            </section>

            {/* CONCLUSION */}
            <section className="neo-card p-6 mb-6">
                <h3 className="neo-badge bg-yellow-300 inline-block mb-3">
                    CONCLUSION
                </h3>
                <p>{project.conclusion}</p>
            </section>

            {/* CTA */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="neo-card bg-yellow-300 p-6 mt-10">
                <CTA />
            </motion.section>
        </main >
    );
}