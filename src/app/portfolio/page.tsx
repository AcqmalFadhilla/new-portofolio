"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import CTA from "@/components/CTA";
import { projects, ProjectRole } from "@/data/projects";
import { getTechStyle } from "@/lib/getTechStyle";

import Image from "next/image";

const roles: { label: string; value: ProjectRole | "all" }[] = [
    { label: "All", value: "all" },
    { label: "iOS", value: "ios" },
    { label: "ML", value: "ml" },
    { label: "Full Stack", value: "fullstack" },
];

const roleLabels = {
    ios: "iOS Engineer",
    ml: "ML Engineer",
    fullstack: "Fullstack Engineer"
};

const roleStyles = {
    ios: "bg-blue-300",
    ml: "bg-purple-300",
    fullstack: "bg-green-300"
};

export default function PortfolioPage() {
    const [activeRole, setActiveRole] = useState<ProjectRole | "all">("all");

    const filtered =
        activeRole === "all"
            ? projects
            : projects.filter((p) => p.role.includes(activeRole as ProjectRole));

    return (
        <main className="max-w-6xl mx-auto p-6">
            {/* BACK BUTTON */}
            <Link
                href="/"
                className="neo-pill inline-block mb-6 bg-blue-200 hover:translate-x-1 transition"
            >
                ← Back to Home
            </Link>
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
                        {/* COVER IMAGE */}
                        <div className="relative w-full aspect-[16/9] mb-4 neo-border overflow-hidden">
                            <Image
                                src={project.coverImage}
                                alt={project.title}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h3 className="text-2xl font-extrabold mb-2">
                            {project.title}
                        </h3>

                        <div className="mb-3 flex gap-2 flex-wrap">
                            {project.role.map((role) => (
                                <span
                                    key={role}
                                    className={`neo-badge ${roleStyles[role]}`}
                                >
                                    {roleLabels[role]}
                                </span>
                            ))}
                        </div>
                        <p className="mb-4 line-clamp-2">{project.overview}</p>
                        <div className="flex flex-wrap gap-2 mb-5">
                            {project.stack.map((tech) => (
                                <span
                                    key={tech}
                                    className={`neo-pill ${getTechStyle(tech)}`}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="mt-auto flex justify-end">
                            <Link
                                href={`/portfolio/${project.slug}`}
                                className="neo-pill bg-blue-300 inline-block">
                                View Case Study →
                            </Link>
                        </div>

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
        </main >
    );
}