"use client";

import { useRef, useState } from "react";
import {
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform,
    useMotionTemplate
} from "framer-motion";
import { Car, ExternalLink, Flag, Gauge, Trophy, Zap } from "lucide-react";

type Checkpoint = {
    id: string;
    label: string;
    date: string;
    title: string;
    detail: string;
    xp: string;
    tech: string[];
    link: string;
    progress: number;
};

const CHECKPOINTS: Checkpoint[] = [
    {
        id: "CP-01",
        label: "Launch Pad",
        date: "OCT 2022",
        title: "GeoToll-Link Launch",
        detail: "Built an IoT tolling prototype with GPS and cloud telemetry for automated, accuracy-driven toll intelligence.",
        xp: "+750 XP",
        tech: ["Python", "AWS IoT Core", "Raspberry Pi"],
        link: "https://github.com/sureshkonar/GeoToll-Link",
        progress: 8
    },
    {
        id: "CP-02",
        label: "Skill Unlock",
        date: "JUL 2023",
        title: "AWS Cloud Practitioner",
        detail: "Validated foundational cloud architecture and deployment concepts with hands-on AWS service workflows.",
        xp: "+500 XP",
        tech: ["AWS", "Cloud Fundamentals"],
        link: "https://www.credly.com",
        progress: 28
    },
    {
        id: "CP-03",
        label: "Level Up",
        date: "JAN 2024",
        title: "Aptiv - Associate Software Engineer",
        detail: "Delivered automation-heavy validation systems using CAPL, CANoe, and Python for production automotive programs.",
        xp: "+1200 XP",
        tech: ["Python", "CAPL", "CANoe", "Jenkins"],
        link: "https://www.aptiv.com",
        progress: 54
    },
    {
        id: "CP-04",
        label: "Checkpoint Boss",
        date: "JUN 2024",
        title: "B.Tech Graduation - VIT Bhopal",
        detail: "Completed Computer Science specialization focused on scalable automation and embedded software engineering.",
        xp: "+900 XP",
        tech: ["Computer Science", "Embedded Systems"],
        link: "https://vitbhopal.ac.in",
        progress: 74
    },
    {
        id: "CP-05",
        label: "Arena Win",
        date: "2025",
        title: "MobilityX Ideathon Runner-Up",
        detail: "Shipped an inclusive future-mobility concept with strong product storytelling and systems thinking.",
        xp: "+1000 XP",
        tech: ["Mobility", "Product Design", "Innovation"],
        link: "https://github.com/sureshkonar/MobilityXIdeathon_BrainBot_Team",
        progress: 92
    }
];

export default function Timeline() {
    const sectionRef = useRef<HTMLElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [progressValue, setProgressValue] = useState(8);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const driveProgress = useTransform(scrollYProgress, [0, 1], [8, 92]);
    const carLeft = useMotionTemplate`${driveProgress}%`;

    useMotionValueEvent(driveProgress, "change", (latest) => {
        setProgressValue(Math.round(latest));
        let closestIndex = 0;
        let smallestDistance = Number.POSITIVE_INFINITY;

        CHECKPOINTS.forEach((checkpoint, idx) => {
            const distance = Math.abs(checkpoint.progress - latest);
            if (distance < smallestDistance) {
                smallestDistance = distance;
                closestIndex = idx;
            }
        });

        setActiveIndex(closestIndex);
    });

    const activeCheckpoint = CHECKPOINTS[activeIndex];

    return (
        <section
            id="timeline"
            ref={sectionRef}
            className="relative w-full bg-[#121212] py-32 px-6 overflow-hidden border-t border-white/5 font-mono"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.12),transparent_40%),radial-gradient(circle_at_80%_90%,rgba(14,165,233,0.08),transparent_45%)] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Gauge className="w-4 h-4 text-cyan-500" />
                            <span className="text-cyan-500 text-[10px] tracking-widest uppercase">&gt;&gt;&gt; DRIVE_MODE_ACTIVE</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic">
                            Career <span className="text-cyan-500">Console</span>
                        </h2>
                    </div>
                    <p className="text-zinc-400 text-xs uppercase tracking-[0.18em] max-w-md leading-relaxed">
                        Scroll to drive through the journey. Each checkpoint logs a milestone, impact, and unlocked skills.
                    </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-sm p-5 md:p-8 overflow-hidden">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 border border-cyan-500/30 bg-cyan-500/10 rounded-sm text-cyan-400 text-[10px] tracking-widest uppercase">
                            <Zap className="w-3 h-3" />
                            TRACK_STATUS: ONLINE
                        </div>
                        <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest">
                            <span className="text-zinc-500">Progress: <span className="text-cyan-400">{progressValue}%</span></span>
                            <span className="text-zinc-500">Active: <span className="text-white">{activeCheckpoint.id}</span></span>
                        </div>
                    </div>

                    <div className="relative py-12">
                        <div className="absolute top-1/2 left-[8%] right-[8%] h-[4px] -translate-y-1/2 bg-gradient-to-r from-cyan-500/10 via-cyan-400/60 to-cyan-500/10 rounded-full" />

                        {CHECKPOINTS.map((checkpoint, idx) => {
                            const isActive = idx === activeIndex;
                            return (
                                <button
                                    key={checkpoint.id}
                                    type="button"
                                    onClick={() => setActiveIndex(idx)}
                                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
                                    style={{ left: `${checkpoint.progress}%` }}
                                    aria-label={`Show ${checkpoint.title}`}
                                >
                                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${isActive ? "border-cyan-400 bg-cyan-400/20 shadow-[0_0_20px_rgba(6,182,212,0.6)]" : "border-white/30 bg-black/50"}`}>
                                        <Flag className={`w-2.5 h-2.5 ${isActive ? "text-cyan-300" : "text-zinc-500"}`} />
                                    </div>
                                    <span className={`absolute top-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] tracking-widest uppercase ${isActive ? "text-cyan-300" : "text-zinc-500"}`}>
                                        {checkpoint.label}
                                    </span>
                                </button>
                            );
                        })}

                        <motion.div
                            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
                            style={{ left: carLeft }}
                        >
                            <div className="relative">
                                <div className="absolute -inset-2 bg-cyan-500/30 blur-xl rounded-full" />
                                <div className="relative w-10 h-10 rounded-full border border-cyan-400/60 bg-[#041015] flex items-center justify-center">
                                    <Car className="w-5 h-5 text-cyan-300" />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        key={activeCheckpoint.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="border border-white/10 bg-white/[0.02] rounded-2xl p-5 md:p-6"
                    >
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-[10px] uppercase tracking-widest text-cyan-400">{activeCheckpoint.id}</span>
                                    <span className="text-[10px] uppercase tracking-widest text-zinc-500">{activeCheckpoint.date}</span>
                                    <span className="text-[10px] uppercase tracking-widest text-emerald-400">{activeCheckpoint.xp}</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-4">
                                    {activeCheckpoint.title}
                                </h3>
                                <p className="text-sm text-zinc-300 leading-relaxed max-w-3xl">
                                    {activeCheckpoint.detail}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-5">
                                    {activeCheckpoint.tech.map((item) => (
                                        <span
                                            key={item}
                                            className="text-[9px] px-2.5 py-1 rounded-sm border border-cyan-500/20 bg-cyan-500/5 text-cyan-200 uppercase tracking-wider"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex md:flex-col gap-3">
                                <a
                                    href={activeCheckpoint.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 border border-white/15 bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-400/50 text-zinc-200 hover:text-cyan-200 text-[10px] uppercase tracking-[0.18em] transition-colors"
                                >
                                    VERIFY
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                                <div className="inline-flex items-center gap-2 px-4 py-2 border border-yellow-500/20 bg-yellow-500/5 text-yellow-300 text-[10px] uppercase tracking-[0.18em]">
                                    <Trophy className="w-3 h-3" />
                                    CHECKPOINT
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
