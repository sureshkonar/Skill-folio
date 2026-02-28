"use client";

import { motion } from "framer-motion";
import { Trophy, Code2, Rocket, Radar } from "lucide-react";

const HACKATHONS = [
    {
        title: "Aptiv MobilityX Ideathon",
        award: "Runner Up",
        date: "2025",
        description: "Focused on inclusive mobility solutions for future urban environments.",
        tech: ["Product Design", "Mobility"],
        icon: <Rocket className="w-5 h-5 text-cyan-500" />,
        url: "https://github.com/sureshkonar/MobilityXIdeathon_BrainBot_Team",
        node: "NODE_ALPHA_01"
    },
    {
        title: "Ground Zero — IIM Ahmedabad",
        award: "Participant",
        date: "2022",
        description: "Intensive entrepreneurship and business strategy competition at TRBS.",
        tech: ["Strategy", "Innovation"],
        icon: <Trophy className="w-5 h-5 text-yellow-500" />,
        url: "https://github.com/sureshkonar?tab=repositories",
        node: "NODE_BETA_02"
    },
    {
        title: "Product Design — IIT Indore",
        award: "Participant",
        date: "2022",
        description: "National-level design competition part of E-Summit'22.",
        tech: ["Design Thinking", "CAD"],
        icon: <Code2 className="w-5 h-5 text-zinc-400" />,
        url: "https://github.com/sureshkonar?tab=repositories",
        node: "NODE_GAMMA_03"
    }
];

export default function Hackathons() {
    return (
        <section id="hackathons" className="relative w-full bg-[#121212] px-6 py-32 border-t border-white/5 font-mono overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Radar className="w-4 h-4 text-cyan-500 animate-pulse" />
                            <span className="text-cyan-500 text-[10px] tracking-widest uppercase">>>> RADAR_SCAN_ACTIVE</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic">
                            Event <span className="text-cyan-500">Nodes</span>
                        </h2>
                    </div>
                    <p className="text-zinc-600 text-[10px] max-w-xs uppercase leading-relaxed">
                        Continuous identification of innovation peaks through intensive 48-hour development cycles.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {HACKATHONS.map((hack, idx) => (
                        <motion.a
                            key={idx}
                            href={hack.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.6, ease: "circOut" }}
                            viewport={{ once: true }}
                            className="relative p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-cyan-500/30 transition-all group flex flex-col"
                        >
                            {/* Decorative Bracket */}
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/5 group-hover:border-cyan-500/30 transition-colors" />

                            <div className="flex justify-between items-start mb-8">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative p-4 rounded-2xl bg-black/40 border border-white/10 group-hover:border-cyan-500/20 transition-all">
                                        {hack.icon}
                                    </div>
                                </div>
                                <span className="text-[10px] text-zinc-700 font-bold group-hover:text-cyan-500 transition-colors">{hack.node}</span>
                            </div>

                            <div className="flex-1">
                                <p className="text-cyan-500 text-[10px] font-bold uppercase tracking-widest mb-2 italic">STATUS: {hack.award}</p>
                                <h3 className="text-xl text-white font-black mb-4 uppercase tracking-tight group-hover:tracking-wide transition-all italic">
                                    {hack.title}
                                </h3>

                                <p className="text-zinc-500 text-xs leading-relaxed mb-8 border-l border-white/10 pl-4 py-1">
                                    {hack.description}
                                </p>
                            </div>

                            <div className="flex items-center justify-between border-t border-white/5 pt-6">
                                <div className="flex gap-2">
                                    {hack.tech.map(t => (
                                        <span key={t} className="text-[8px] px-2 py-0.5 rounded-sm bg-white/5 text-zinc-600 uppercase tracking-tighter">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <span className="text-[9px] text-zinc-700 font-bold italic">{hack.date}</span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* Background Data Stream Effect */}
            <div className="absolute right-0 bottom-0 p-8 opacity-5 pointer-events-none hidden lg:block">
                <div className="text-[10px] space-y-1 font-mono text-cyan-500">
                    <div>SCANNING_FREQ: 24.5GHZ</div>
                    <div>DETECTION_PROBABILITY: 0.98</div>
                    <div>INTERFERENCE_LEVEL: MINIMAL</div>
                </div>
            </div>
        </section>
    );
}
