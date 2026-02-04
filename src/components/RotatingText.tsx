"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const words = [
    "iOS apps",
    "Machine Learning models",
    "full-stack systems",
];

const colors = ["text-black", "text-blue-600", "text-purple-600"];

export default function RotatingText() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <span className="relative inline-block">
            <AnimatePresence mode="wait">
                <motion.span
                    key={words[index]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className={`absolute left-0 font-extrabold decoration-4 ${colors[index]}`}
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>

            {/* Placeholder supaya layout tidak loncat */}
            <span className="opacity-0 font-extrabold">
                Machine Learning models
            </span>
        </span >
    );
}

