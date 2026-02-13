"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import CTA from "@/components/CTA";
import { projects, ProjectRole } from "@/data/projects";

const roles: { label: string; value: ProjectRole | "all" }[] = [
    { label: "All", value: "all" },
    { label: "iOS", value: "ios" },
    { label: "ML", value: "ml" },
    { label: "Full Stack", value: "fullstack" },
];

export default function PortfolioPage() {
    const [activeRole, setActiveRole] = useState<ProjectRole | "all">("all");

    const filtered =
        activeRole === "all"
            ? projects
            : projects.filter((p) => p.role === activeRole);

    return (
        <main className="max-w-6xl mx-auto p-6">
            {/* HEADER */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="neo-card p-6 mb-8">
                <h1 className="text-4xl font-extrabold">PORTFOLIO</h1>
                <p className="mt-2 text-lg max-w-xl">
                    Selected projects focused on <span className="bg-yellow-300 px-1 font-semibold">iOS</span>,{" "}
                    <span className="bg-blue-300 px-1 font-semibold">Machine Learning</span>, and{" "}
                    <span className="bg-orange-300 px-1 font-semibold">Product Engineering</span>.
                </p>
            </motion.section>

            {/* FILTER */}
            <div className="flex flex-wrap gap-3 mb-8">
                {roles.map((role) => (
                    <button
                        key={role.value}
                        onClick={() => setActiveRole(role.value)}
                        className={`neo-pill transition ${activeRole === role.value
                            ? "bg-black text-white"
                            : "bg-yellow-200"
                            }`}>
                        {role.label}
                    </button>
                ))}
            </div>

            {/* PROJECT GRID */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filtered.map((project, idx) => (
                    <motion.article
                        key={project.slug}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="neo-card p-6 hover:translate-x-1 hover:translate-y-1 transition">
                        <h3 className="text-2xl font-extrabold mb-2">
                            {project.title}
                        </h3>

                        <span className="neo-badge bg-purple-300 inline-block mb-3">
                            {project.role}
                        </span>

                        <p className="mb-4">{project.description}</p>


                        <div className="flex flex-wrap gap-2 mb-5">
                            {project.stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="neo-pill bg-yellow-200 neo-tilt-soft">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <Link
                            href={`/portfolio/${project.slug}`}
                            className="neo-badge bg-blue-300 inline-block">
                            View Case Study →
                        </Link>
                    </motion.article>
                ))
                }
            </section>

            {/* CTA */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="neo-card bg-yellow-300 p-6 mt-10">
                <CTA />
            </motion.section>
        </main>
    );
}