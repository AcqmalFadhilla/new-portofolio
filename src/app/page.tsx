"use client"
import ExperienceTimeline from "@/components/ExperienceTimeline";
import TechStack from "@/components/TechStack";
import CTA from "@/components/CTA";
import RotatingText from "@/components/RotatingText";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* HERO */}
        <motion.section
          initial="hidden"
          animate="show"
          className="relative md:col-span-2 neo-card p-6"
        >
          {/* Open for Freelance */}
          <span className="absolute -top-2 -right-3 bg-blue-400 border-4 border-black px-5 py-2 text-sm font-extrabold  shadow-[6px_6px_0px_#000] rotate-6">
            ☕ Open for Freelance
          </span>
          <div className="flex gap-6 items-start">
            <div className="w-20 h-20 border-4 border-black flex items-center justify-center">
              🙂
            </div>

            <div>
              <h1 className="text-4xl font-extrabold leading-tight">
                Muhammad Acqmal<br />
                Fadhilla latief
              </h1>

              <div className="flex flex-wrap gap-2 mt-3 max-w-[420px]">
                <span className="neo-role-badge bg-orange-200">
                  <span>🍎</span>
                  iOS Developer
                </span>

                <span className="neo-role-badge bg-blue-200">
                  <span>⚛️</span>
                  Machine Learning Engineer
                </span>

                <span className="neo-role-badge bg-yellow-200">
                  <span>🧩</span>
                  Full Stack Engineer
                </span>
              </div>

              <p className="mt-4 text-lg">
                I build <br /> <RotatingText />
              </p>
            </div>
          </div>
        </motion.section>

        {/* CONNECT */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }} className="neo-card p-6">
          <h3 className="neo-badge bg-blue-300 inline-block mb-4">CONNECT</h3>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Portfolio", href: "/" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/muh-acqmal-fadhilla-latief/" },
              { label: "Resume", href: "/Resume.pdf" },
              { label: "GitHub", href: "https://github.com/AcqmalFadhilla" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                className="neo-card p-6 text-center font-semibold hover:translate-x-1 hover:translate-y-1 transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.section>

        {/* ABOUT */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="md:col-span-2 neo-card p-6"
        >
          <h3 className="neo-badge bg-yellow-300 inline-block mb-4">
            ABOUT ME
          </h3>

          <p className="leading-relaxed">
            <span className="bg-orange-200 px-1 font-semibold">
              Machine Learning & iOS Developer
            </span>{" "}
            with strong foundations from the Apple Developer Academy, focused on building
            end-to-end, production-ready solutions — from problem research and data
            preparation to model development, deployment, and mobile integration.
          </p>

          <p className="mt-4">
            Currently developing iOS applications using{" "}
            <span className="bg-purple-200 px-1 font-semibold">
              SwiftUI & SwiftData
            </span>
            , applying clean code principles, MVVM-based architecture, and advanced iOS
            features such as PhotoKit, while integrating machine learning models into
            real-world products.
          </p>

          <p className="mt-4">
            Experienced as a Machine Learning Engineer in dataset collection and
            preprocessing, model training and deployment, as well as mentoring teams and
            leading technical sessions to ensure on-time delivery.
          </p>
        </motion.section>


        {/* CODING SETUP */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="neo-card p-6">
          <h3 className="neo-badge bg-cyan-300  inline-block mb-4">
            CODING SETUP
          </h3>

          <p className="mb-3 text-sm">
            This site is built with:
          </p>

          <div className="flex flex-wrap gap-3 max-w-[320px]">
            <span className="neo-pill bg-yellow-300 neo-tilt-soft">
              Next.js 16.1
            </span>

            <span className="neo-pill bg-blue-300 neo-tilt-hard">
              React 19
            </span>

            <span className="neo-pill bg-blue-500 text-white neo-tilt-soft">
              TypeScript 5.9
            </span>

            <span className="neo-pill bg-teal-300 neo-tilt-hard">
              Tailwind v4
            </span>

            <span className="neo-pill bg-purple-300 neo-tilt-soft">
              Framer Motion 12
            </span>
          </div>
        </motion.section>

        {/* EXPERIENCE */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="neo-card p-6 md:col-span-2">
          <ExperienceTimeline />
        </motion.section>

        {/* TECH STACK */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="neo-card p-6">
          <TechStack />
        </motion.section>
      </div >

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="neo-card bg-yellow-300 p-6 mt-10" >
        <CTA />
      </motion.section >
    </main >
  );
}
