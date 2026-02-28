"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Camera, Shield, Orbit, Activity } from "lucide-react";

export default function Overlay() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Section 1: Hero HUD
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    // Section 2: Core Capability
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.25, 0.55], [50, -50]);

    // Section 3: Vision
    const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.55, 0.85], [50, -50]);

    return (
        <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10 font-mono">
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">

                {/* Global HUD Frame (Smart Camera Aesthetic) */}
                <div className="absolute inset-4 md:inset-12 border border-white/5 pointer-events-none rounded-sm">
                    {/* Corners */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500/50" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500/50" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/50" />

                    {/* Crosshair */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-20">
                        <div className="w-16 h-[1px] bg-cyan-500" />
                        <div className="h-16 w-[1px] bg-cyan-500 absolute" />
                        <div className="w-4 h-4 rounded-full border border-cyan-500 absolute" />
                    </div>

                    {/* Metadata Overlays */}
                    <div className="absolute top-4 left-6 flex flex-col gap-1 text-[8px] text-zinc-500 font-bold uppercase">
                        <div className="flex items-center gap-2">
                            <Camera className="w-2 h-2 text-cyan-500" />
                            <span>REC: READY</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Activity className="w-2 h-2 text-red-500 animate-pulse" />
                            <span>LIVE_FEED: ACTIVE</span>
                        </div>
                    </div>

                    <div className="absolute bottom-4 right-6 text-[8px] text-zinc-500 font-bold text-right uppercase">
                        <p>COORD: 12.9716° N, 77.5946° E</p>
                        <p>LATENCY: 12MS</p>
                    </div>
                </div>

                {/* Section 1: Hero */}
                <motion.div
                    style={{ opacity: opacity1, y: y1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
                >
                    <div className="mb-6 px-4 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-[10px] text-cyan-500 tracking-[0.3em] font-bold uppercase">
                        >>> SYSTEM_INIT_COMPLETE
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase italic drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        Suresh <span className="text-cyan-500">Konar</span>
                    </h1>
                    <div className="flex items-center gap-4 mt-8">
                        <div className="h-[1px] w-8 bg-white/20" />
                        <p className="text-zinc-400 text-lg md:text-2xl font-bold uppercase tracking-widest italic">
                            Software Developer
                        </p>
                        <div className="h-[1px] w-8 bg-white/20" />
                    </div>
                    <p className="text-zinc-600 text-xs mt-6 max-w-lg leading-relaxed uppercase">
                        Architecting the next generation of software-defined vehicle ecosystems.
                        Engineering high-precision validation frameworks for global automotive OEMs.
                    </p>
                </motion.div>

                {/* Section 2: Core Capability */}
                <motion.div
                    style={{ opacity: opacity2, y: y2 }}
                    className="absolute inset-0 flex items-center justify-start text-left px-8 md:px-32 lg:px-48"
                >
                    <div className="max-w-3xl relative">
                        <div className="flex items-center gap-3 mb-6">
                            <Shield className="w-6 h-6 text-cyan-500" />
                            <span className="text-cyan-500 text-sm tracking-[0.2em] font-bold uppercase italic border-b border-cyan-500/50 pb-1">Primary_Module</span>
                        </div>
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white uppercase italic leading-[1.1]">
                            I build Automotive <br />
                            <span className="text-cyan-500">Solutions.</span>
                        </h2>
                        <div className="mt-8 flex gap-8 items-center">
                            <div className="px-6 py-3 border border-white/10 bg-white/[0.02] rounded-xl flex items-center gap-4">
                                <div className="p-2 bg-cyan-500/20 rounded">
                                    <div className="w-3 h-3 bg-cyan-500 rounded-sm" />
                                </div>
                                <div className="text-left font-sans not-italic">
                                    <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest leading-none">Status</p>
                                    <p className="text-white text-sm font-bold mt-1">PRODUCTION_READY</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Section 3: Vision */}
                <motion.div
                    style={{ opacity: opacity3, y: y3 }}
                    className="absolute inset-0 flex items-center justify-end text-right px-8 md:px-32 lg:px-48"
                >
                    <div className="max-w-3xl relative">
                        <div className="flex items-center gap-3 justify-end mb-6">
                            <span className="text-cyan-500 text-sm tracking-[0.2em] font-bold uppercase italic border-b border-cyan-500/50 pb-1">System_Core</span>
                            <Orbit className="w-6 h-6 text-cyan-500" />
                        </div>
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white uppercase italic leading-[1.1]">
                            Bridging Embedded <br />
                            & <span className="text-cyan-500">SDV Intelligence.</span>
                        </h2>
                        <div className="flex items-center gap-4 justify-end mt-10">
                            <div className="h-[1px] w-24 bg-white/10" />
                            <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest leading-none">optimized_throughput</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
