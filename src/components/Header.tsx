"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export default function Header() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    // close dropdown when click outside
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (!mounted) {
        return (
            <header className="w-full  border-black h-[72px]" />
        );
    }

    const items = [
        { key: "light", label: "Light", icon: "☀️" },
        { key: "dark", label: "Dark", icon: "🌙" },
        { key: "system", label: "System", icon: "💻" },
    ];

    return (
        <header className="w-full border-black top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* LOGO */}
                <div className="relative">
                    <div className={`absolute top-1 left-1 w-full h-full bg-black ${theme == "dark" ? "bg-white" : "bg-black"}`} />
                    <div className={`relative z-10 w-12 h-12 flex items-center justify-center border-4 border-black bg-black text-white font-extrabold text-xl ${theme == " dark" ? "text-black" : "text-white"}`} >
                        D.
                    </div>
                </div>

                {/* THEME DROPDOWN */}
                <div className="relative" ref={ref}>
                    <button
                        onClick={() => setOpen(!open)}
                        className="w-12 h-12
                                    border-4 border-black
                                    bg-white
                                    flex items-center justify-center
                                    shadow-[4px_4px_0px_#000]
                                    hover:translate-x-0.5
                                    hover:translate-y-0.5
                                    transition">
                        {theme === "dark" ? "🌙" : "☀️"}
                    </button>

                    {open && (
                        <div className="absolute right-0 mt-3 w-44
                                        bg-white
                                        border-4 border-black
                                        shadow-[6px_6px_0px_#000]">
                            {items.map((item) => (
                                <button
                                    key={item.key}
                                    onClick={() => {
                                        setTheme(item.key);
                                        setOpen(false);
                                    }}
                                    className={`w-full flex items-center gap-3
                                                px-4 py-3 text-left font-semibold
                                                hover:bg-yellow-200
                                                ${theme === item.key ? "bg-yellow-300" : ""}`}>
                                    <span>{item.icon}</span>
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header >
    );
}
