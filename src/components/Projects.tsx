"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Globe, Database } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "RoadSentinel",
            description: "Advanced ADAS Risk Heatmap & Analysis tool utilizing Python, PyDeck, and Streamlit. Implements separate AEB/LDW risk layers with weather-based adjustments.",
            tag: "Automotive AI",
            year: "2024",
            githubUrl: "https://github.com/sureshkonar/ADAS-Risk-Heatmap",
            moreInfoUrl: "https://github.com/sureshkonar/ADAS-Risk-Heatmap#readme",
            metrics: { core: "Computer Vision", stat: "98% Detection" }
        },
        {
            title: "GeoToll-Link",
            description: "Revolutionary IoT tolling system using GPS and Cloud tech. Achieved 75% accuracy in automated toll deduction for India's transportation system.",
            tag: "IoT & Mobility",
            year: "2023",
            githubUrl: "https://github.com/sureshkonar/GeoToll-Link",
            moreInfoUrl: "https://github.com/sureshkonar/GeoToll-Link#readme",
            metrics: { core: "Cloud IoT", stat: "75% Accuracy" }
        },
        {
            title: "VoiceHomeLink",
            description: "Intelligent voice-controlled home automation fusing Python and Arduino. Delivered 80% voice accuracy and 30% energy savings.",
            tag: "Embedded Systems",
            year: "2022",
            githubUrl: "https://github.com/sureshkonar/VoiceHomeLink",
            moreInfoUrl: "https://github.com/sureshkonar/VoiceHomeLink#readme",
            metrics: { core: "Embedded OS", stat: "80% Precision" }
        },
    ];

    return (
        <section id="projects" className="relative w-full bg-[#121212] py-32 px-6 md:px-24 font-mono overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Database className="w-4 h-4 text-cyan-500" />
                            <span className="text-cyan-500 text-[10px] tracking-widest uppercase">&gt;&gt;&gt; APP_REPOSITORY_LOADED</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic">
                            Digital <span className="text-cyan-500 border-b-4 border-cyan-500/20">Cockpit</span>
                        </h2>
                    </div>
                    <div className="hidden md:block text-[8px] text-zinc-600 font-mono text-right uppercase">
                        <p>Infotainment_UI_Version: 3.2-A</p>
                        <p>Display_Protocol: OpenGL_ES</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.a
                            key={idx}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative flex flex-col bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.05] hover:border-cyan-500/20 transition-all duration-500"
                        >
                            {/* Infotainment Card Header */}
                            <div className="flex justify-between items-center mb-10 border-b border-white/5 pb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-cyan-500/50 group-hover:bg-cyan-500 transition-colors shadow-[0_0_8px_rgba(6,182,212,0.4)]" />
                                    <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-tighter">APP_WIDGET_0{idx + 1}</span>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-zinc-700 group-hover:text-cyan-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                            </div>

                            <div className="flex-1">
                                <div className="flex items-baseline gap-3 mb-4">
                                    <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter group-hover:text-cyan-500 transition-colors">
                                        {project.title}
                                    </h3>
                                    <span className="text-[10px] text-zinc-600">[{project.year}]</span>
                                </div>

                                <p className="text-zinc-500 text-xs leading-relaxed mb-10 min-h-[4.5rem]">
                                    {project.description}
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="p-4 bg-black/40 border border-white/5 rounded-xl">
                                        <p className="text-[8px] text-zinc-600 uppercase mb-1">Subsystem</p>
                                        <p className="text-[10px] text-white font-bold">{project.metrics.core}</p>
                                    </div>
                                    <div className="p-4 bg-black/40 border border-white/5 rounded-xl">
                                        <p className="text-[8px] text-zinc-600 uppercase mb-1">Telemetry</p>
                                        <p className="text-[10px] text-cyan-500 font-bold uppercase italic">{project.metrics.stat}</p>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <span className="px-3 py-1 bg-cyan-500/10 text-cyan-500 rounded-full text-[8px] font-bold uppercase tracking-widest border border-cyan-500/20">
                                        {project.tag}
                                    </span>
                                </div>
                            </div>

                            {/* Subtle scanning gradient */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent" />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
