"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
    images: string[];
    autoPlay?: boolean;
    interval?: number;
};

export default function ImageCarousel({ images, autoPlay = true, interval = 3000, }: Props) {
    const [index, setIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const timerRef = useRef<NodeJS.Timeout | null>(null);


    const next = () =>
        setIndex((prev) => (prev + 1) % images.length);

    const prev = () =>
        setIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );

    // AUTO PLAY
    useEffect(() => {
        if (!autoPlay || isHovered || images.length <= 1) return;

        timerRef.current = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, interval);

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [autoPlay, interval, isHovered, images.length]);

    return (
        <div className="neo-card p-4 mb-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>

            {/* IMAGE */}
            <div className="relative aspect-[16/9] overflow-hidden neo-border bg-white">

                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                        transition={{ duration: 0.25 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={images[index]}
                            alt=""
                            fill
                            className="object-contain"
                        />
                    </motion.div>
                </AnimatePresence>

            </div>

            {/* CONTROLS */}
            {images.length > 1 && (
                <div className="flex justify-between mt-4">

                    <button
                        onClick={prev}
                        className="neo-pill bg-gray-200"
                    >
                        ← Prev
                    </button>

                    <span className="text-sm font-medium">
                        {index + 1} / {images.length}
                    </span>

                    <button
                        onClick={next}
                        className="neo-pill bg-gray-200"
                    >
                        Next →
                    </button>

                </div>
            )}

        </div>
    );
}