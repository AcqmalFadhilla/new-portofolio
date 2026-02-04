"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TimelineItem from "@/components/TimelineItem";
import { experiences } from "@/data/experiences";

export default function ExperienceTimeline() {
    const [showAll, setShowAll] = useState(false);

    const visibleExperiences = showAll
        ? experiences
        : experiences.slice(0, 2);

    return (
        <div>
            <h3 className="neo-badge bg-purple-300 inline-block mb-6">
                EXPERIENCE
            </h3>

            <div className="relative">
                {/* TIMELINE LINE */}
                <div className="absolute left-5 top-0 h-full w-[4px] bg-black" />

                <AnimatePresence initial={false}>
                    <motion.div
                        layout="position"
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-10">
                        {visibleExperiences.map((exp, index) => (
                            <motion.div
                                key={exp.title + index}
                                layout="position"
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{
                                    duration: 0.45,
                                    ease: [0.22, 1, 0.36, 1],
                                }} >
                                <TimelineItem {...exp} />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* LOAD MORE BUTTON */}
                {experiences.length > 2 && (
                    <div className="flex justify-center mt-10">
                        <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            onClick={() => setShowAll(!showAll)}
                            className="neo-badge bg-white font-semibold">
                            {showAll ? "Show less experience" : "Show more experience"}
                        </motion.button>
                    </div>
                )}
            </div>
        </div >
    );
}
