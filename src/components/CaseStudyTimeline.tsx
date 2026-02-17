"use client";

import { motion } from "framer-motion";
import CaseStudyItem from "@/components/CaseStudyItem";

type Block = {
    title: string;
    items: string[];
    color?: string;
};

type Props = {
    blocks: Block[];
};

export default function CaseStudyTimeline({ blocks }: Props) {
    return (
        <section className="neo-card p-6">

            <h3 className="neo-badge bg-purple-300 inline-block mb-8">
                CASE STUDY DETAILS
            </h3>

            <div className="relative">

                {/* vertical line */}
                <div className="absolute left-5 top-0 bottom-0 w-[4px] bg-black" />

                <div className="space-y-10">

                    {blocks.map((block, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.08 }}
                        >
                            <CaseStudyItem {...block} />
                        </motion.div>
                    ))}

                </div>

            </div>

        </section>
    );
}