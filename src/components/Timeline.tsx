"use client";

import { useEffect, useMemo, useState } from "react";
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
    x: number;
    y: number;
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
        x: 4,
        y: 7
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
        x: 8,
        y: 7
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
        x: 12,
        y: 7
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
        x: 16,
        y: 7
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
        x: 20,
        y: 7
    }
];

const MAP_LAYOUT = [
    "########################",
    "##########......########",
    "##########.####.########",
    "######.....####.....####",
    "######.############.####",
    "##.....############....#",
    "##.###################.#",
    "#S.....................#",
    "########################"
];

const START_POSITION = { x: 1, y: 7 };

export default function Timeline() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [carPosition, setCarPosition] = useState(START_POSITION);
    const [completedIds, setCompletedIds] = useState<string[]>([]);

    const checkpointLookup = useMemo(() => {
        const lookup = new Map<string, number>();
        CHECKPOINTS.forEach((checkpoint, idx) => {
            lookup.set(`${checkpoint.x},${checkpoint.y}`, idx);
        });
        return lookup;
    }, []);

    const moveCar = (dx: number, dy: number, boost = false) => {
        setCarPosition((prev) => {
            const steps = boost ? 2 : 1;
            let next = prev;

            for (let i = 0; i < steps; i++) {
                const candidate = { x: next.x + dx, y: next.y + dy };
                const row = MAP_LAYOUT[candidate.y];
                if (!row) break;
                const cell = row[candidate.x];
                if (!cell || cell === "#") break;
                next = candidate;
            }

            const checkpointIndex = checkpointLookup.get(`${next.x},${next.y}`);
            if (checkpointIndex !== undefined) {
                const checkpointId = CHECKPOINTS[checkpointIndex].id;
                setActiveIndex(checkpointIndex);
                setCompletedIds((current) =>
                    current.includes(checkpointId) ? current : [...current, checkpointId]
                );
            }

            return next;
        });
    };

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "ArrowUp") {
                event.preventDefault();
                moveCar(0, -1, event.ctrlKey);
            } else if (event.key === "ArrowDown") {
                event.preventDefault();
                moveCar(0, 1, event.ctrlKey);
            } else if (event.key === "ArrowLeft") {
                event.preventDefault();
                moveCar(-1, 0, event.ctrlKey);
            } else if (event.key === "ArrowRight") {
                event.preventDefault();
                moveCar(1, 0, event.ctrlKey);
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [checkpointLookup]);

    const activeCheckpoint = CHECKPOINTS[activeIndex];
    const completionPercent = Math.round((completedIds.length / CHECKPOINTS.length) * 100);

    return (
        <section
            id="timeline"
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
                        Use arrow keys to drive. Hold Ctrl + Arrow to boost. Collect checkpoint flags to unlock achievements.
                    </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-sm p-5 md:p-8 overflow-hidden">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 border border-cyan-500/30 bg-cyan-500/10 rounded-sm text-cyan-400 text-[10px] tracking-widest uppercase">
                            <Zap className="w-3 h-3" />
                            TRACK_STATUS: ONLINE
                        </div>
                        <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest">
                            <span className="text-zinc-500">Progress: <span className="text-cyan-400">{completionPercent}%</span></span>
                            <span className="text-zinc-500">Active: <span className="text-white">{activeCheckpoint.id}</span></span>
                            <span className="text-zinc-500">Collected: <span className="text-emerald-400">{completedIds.length}/{CHECKPOINTS.length}</span></span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-6 mb-6">
                        <div className="relative border border-white/10 rounded-2xl p-4 bg-[#0a1116]">
                            <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${MAP_LAYOUT[0].length}, minmax(0,1fr))` }}>
                                {MAP_LAYOUT.flatMap((row, y) =>
                                    row.split("").map((cell, x) => {
                                        const isWall = cell === "#";
                                        const isRoad = cell === "." || cell === "S";
                                        const checkpointIndex = checkpointLookup.get(`${x},${y}`);
                                        const checkpoint = checkpointIndex !== undefined ? CHECKPOINTS[checkpointIndex] : null;
                                        const isCheckpoint = checkpoint !== null;
                                        const isCompleted = checkpoint ? completedIds.includes(checkpoint.id) : false;
                                        const isCar = carPosition.x === x && carPosition.y === y;

                                        return (
                                            <div
                                                key={`${x}-${y}`}
                                                className={`aspect-square rounded-[3px] relative ${isWall ? "bg-zinc-900" : isRoad ? "bg-cyan-950/40 border border-cyan-900/40" : "bg-transparent"}`}
                                            >
                                                {isCheckpoint && (
                                                    <button
                                                        type="button"
                                                        onClick={() => checkpointIndex !== undefined && setActiveIndex(checkpointIndex)}
                                                        className={`absolute inset-0 m-auto w-[72%] h-[72%] rounded-[3px] border flex items-center justify-center transition-colors ${isCompleted ? "border-emerald-400/70 bg-emerald-500/15" : "border-cyan-400/60 bg-cyan-500/10"}`}
                                                        aria-label={`Open ${checkpoint.title}`}
                                                    >
                                                        <Flag className={`w-2.5 h-2.5 ${isCompleted ? "text-emerald-300" : "text-cyan-300"}`} />
                                                    </button>
                                                )}
                                                {isCar && (
                                                    <div className="absolute inset-0 m-auto w-[76%] h-[76%] rounded-[3px] border border-cyan-300 bg-cyan-400/15 flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.6)]">
                                                        <Car className="w-2.5 h-2.5 text-cyan-200" />
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })
                                )}
                            </div>
                        </div>

                        <div className="border border-white/10 rounded-2xl p-4 bg-black/40">
                            <p className="text-[10px] text-cyan-400 tracking-[0.2em] uppercase mb-4">Controls</p>
                            <div className="grid grid-cols-3 gap-2 max-w-[150px]">
                                <button type="button" onClick={() => moveCar(0, -1)} className="col-start-2 border border-white/15 bg-white/5 hover:bg-cyan-500/10 text-white text-xs py-2">↑</button>
                                <button type="button" onClick={() => moveCar(-1, 0)} className="col-start-1 border border-white/15 bg-white/5 hover:bg-cyan-500/10 text-white text-xs py-2">←</button>
                                <button type="button" onClick={() => moveCar(0, 1)} className="col-start-2 border border-white/15 bg-white/5 hover:bg-cyan-500/10 text-white text-xs py-2">↓</button>
                                <button type="button" onClick={() => moveCar(1, 0)} className="col-start-3 row-start-2 border border-white/15 bg-white/5 hover:bg-cyan-500/10 text-white text-xs py-2">→</button>
                            </div>
                            <p className="text-[10px] text-zinc-500 leading-relaxed mt-4 uppercase">
                                Arrow Keys: Move
                                <br />
                                Ctrl + Arrow: Boost x2
                            </p>
                            <button
                                type="button"
                                onClick={() => {
                                    setCarPosition(START_POSITION);
                                    setCompletedIds([]);
                                    setActiveIndex(0);
                                }}
                                className="mt-4 w-full border border-red-400/40 bg-red-500/10 text-red-200 text-[10px] tracking-[0.2em] uppercase py-2 hover:bg-red-500/15"
                            >
                                Reset Run
                            </button>
                        </div>
                    </div>

                    <div className="border border-white/10 bg-white/[0.02] rounded-2xl p-5 md:p-6">
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
                    </div>
                </div>
            </div>
        </section>
    );
}
