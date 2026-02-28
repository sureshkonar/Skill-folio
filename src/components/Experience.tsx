"use client";

import { motion } from "framer-motion";
import { Cpu, Gauge, Zap, Award, Users, Trophy } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="relative w-full bg-[#121212] px-6 py-32 overflow-hidden border-t border-white/5 font-mono">
            {/* HUD Scanning Line Animation */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(6,182,212,0.2)_50%,transparent_100%)] bg-[length:100%_4px] animate-scan" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col gap-12">
                    {/* HUD Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-6">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                                <span className="text-cyan-500 text-xs tracking-widest uppercase">[ SYSTEM_LOG: WORKING_ENVIRONMENT ]</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic">
                                Professional <span className="text-cyan-500">Telemetry</span>
                            </h2>
                        </div>
                        <div className="flex gap-8 text-[10px] text-neutral-500 border-l border-white/10 pl-6">
                            <div>
                                <p>FIRMWARE_VER</p>
                                <p className="text-white">v2.4.2025</p>
                            </div>
                            <div>
                                <p>STATUS</p>
                                <p className="text-cyan-500 font-bold italic">OPTIMAL_READY</p>
                            </div>
                        </div>
                    </div>

                    {/* Main Experience Log */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Entry Left: Core Role */}
                        <div className="lg:col-span-2 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="relative p-6 md:p-10 border border-white/5 bg-white/[0.02] rounded-br-[40px] overflow-hidden group"
                            >
                                {/* Decorative brackets */}
                                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500/50" />
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500/50" />

                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                                    <div>
                                        <p className="text-cyan-500 text-xs mb-1 tracking-tighter">>>> ORGANIZATION_UNIT</p>
                                        <h3 className="text-3xl text-white font-bold tracking-tight uppercase">APTIV <span className="text-neutral-500 font-light">— Bengaluru, India</span></h3>
                                    </div>
                                    <div className="px-4 py-2 bg-white/5 border border-white/10 rounded text-[10px] text-white">
                                        LVL: GRADUATE_ENGINEER
                                    </div>
                                </div>

                                <div className="mb-10 text-white/90">
                                    <span className="text-neutral-500 text-xs block mb-4">LOG_ENTRY_01: ROLE_OVERVIEW</span>
                                    <h4 className="text-xl text-white font-semibold mb-6 italic">Associate Software Engineer <span className="text-cyan-500 text-sm not-italic ml-2">[Jan 2024 - Present]</span></h4>

                                    <div className="space-y-6">
                                        <div className="flex gap-4">
                                            <div className="w-1.5 h-1.5 bg-cyan-500 shrink-0 mt-2" />
                                            <p className="text-sm md:text-base leading-relaxed">
                                                <span className="text-white font-bold">Honda & Stellantis ReSIM:</span> Built a scalable Python ReSim framework for .csv vehicle logs, validating signal accuracy and radar scan indices against outputs using a parameterized .json setup — achieving <span className="text-cyan-500">70% faster processing</span> on multi-GB datasets.
                                            </p>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-1.5 h-1.5 bg-cyan-500 shrink-0 mt-2" />
                                            <p className="text-sm md:text-base leading-relaxed">
                                                <span className="text-white font-bold">Stellantis & BMW PODs:</span> Developed high-reliability CAPL libraries in CANoe for automated test execution and NI Hardware interfacing — boosting testing efficiency by <span className="text-cyan-500">35%</span> and reducing manual regression by <span className="text-cyan-500">40%</span>.
                                            </p>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-1.5 h-1.5 bg-cyan-500 shrink-0 mt-2" />
                                            <p className="text-sm md:text-base leading-relaxed">
                                                <span className="text-white font-bold">HKMC SRR5:</span> Managed radar program testing for complex UDS diagnostics and automated CI/CT operations with Python + Jenkins, delivering detailed reports and metadata — improving reliability by <span className="text-cyan-500">30%</span> and reducing manual effort by <span className="text-cyan-500">60%</span>.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-white/5 space-y-4">
                                    <p className="text-[10px] text-neutral-500 uppercase tracking-widest">>>> CORE_METRICS</p>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
                                        <div className="p-3 bg-white/5 border border-white/5 rounded">
                                            <p className="text-[8px] text-neutral-500 mb-1 leading-none uppercase">Manual_Effort_Reduct</p>
                                            <p className="text-xl font-bold tracking-tighter text-cyan-500">90%</p>
                                        </div>
                                        <div className="p-3 bg-white/5 border border-white/5 rounded">
                                            <p className="text-[8px] text-neutral-500 mb-1 leading-none uppercase">Automated_Testing</p>
                                            <p className="text-xl font-bold tracking-tighter text-cyan-500">70%</p>
                                        </div>
                                        <div className="p-3 bg-white/5 border border-white/5 rounded">
                                            <p className="text-[8px] text-neutral-500 mb-1 leading-none uppercase">Reporting_Efficiency</p>
                                            <p className="text-xl font-bold tracking-tighter text-cyan-500">70%</p>
                                        </div>
                                        <div className="p-3 bg-white/5 border border-white/5 rounded">
                                            <p className="text-[8px] text-neutral-500 mb-1 leading-none uppercase">Processing_Gain</p>
                                            <p className="text-xl font-bold tracking-tighter text-cyan-500">70%</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Users className="w-5 h-5 text-cyan-500" />
                                        <p className="text-xs text-white font-bold uppercase tracking-widest leading-none">University Outreach</p>
                                    </div>
                                    <p className="text-[11px] text-neutral-400 leading-relaxed font-sans">
                                        Represented Aptiv at a pre-placement interaction session at <span className="text-white">PES University</span>, engaging with students and addressing career and role-related queries.
                                    </p>
                                </div>
                                <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Trophy className="w-5 h-5 text-cyan-500" />
                                        <p className="text-xs text-white font-bold uppercase tracking-widest leading-none">Coordinating ERP</p>
                                    </div>
                                    <p className="text-[11px] text-neutral-400 leading-relaxed font-sans">
                                        Coordinator of <span className="text-white">Talent Trove Club (ERG)</span> at Aptiv, organized company-wide cultural and family events for 2,300+ employees.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Entry Right: System Stats / HUD Elements */}
                        <div className="space-y-8">
                            {/* Skills Telemetry Widget */}
                            <div className="p-8 border border-white/10 bg-black/40 backdrop-blur rounded-2xl relative overflow-hidden">
                                <div className="mb-6">
                                    <p className="text-[10px] text-zinc-500 mb-2 font-bold tracking-widest uppercase">>>> COMPETENCY_MATRIX</p>
                                    <h5 className="text-white text-sm font-bold italic underline decoration-cyan-500 underline-offset-4 tracking-tighter">SKILL_ABSTRACTION</h5>
                                </div>

                                <div className="space-y-6">
                                    {[
                                        { label: "Python Automation", level: "92%" },
                                        { label: "CAPL Scripting", level: "85%" },
                                        { label: "CANoe / Vector", level: "88%" },
                                        { label: "NI Hardware Interfacing", level: "84%" },
                                        { label: "Cloud/AWS Core", level: "80%" }
                                    ].map((skill, idx) => (
                                        <div key={idx}>
                                            <div className="flex justify-between text-[10px] mb-2 uppercase">
                                                <span className="text-white">{skill.label}</span>
                                                <span className="text-cyan-500 italic">{skill.level}</span>
                                            </div>
                                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: skill.level }}
                                                    transition={{ duration: 1.5, delay: idx * 0.1 }}
                                                    className="h-full bg-cyan-500"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/5 flex gap-2 overflow-hidden items-center group">
                                    <div className="flex-1 overflow-hidden whitespace-nowrap text-[8px] text-neutral-600 font-mono">
                                        <p className="animate-marquee inline-block">TECH_STACK: PYTHON_CAPL_CANOE_NI_HW_CODEWARRIOR_POLARION_JIRA_REST_API // PYTHON_CAPL_CANOE_NI_HW_CODEWARRIOR_POLARION_JIRA_REST_API</p>
                                    </div>
                                </div>
                            </div>

                            {/* Award / Recognition */}
                            <div className="p-6 border border-yellow-500/20 bg-yellow-500/[0.03] rounded-2xl relative group">
                                <Award className="absolute top-4 right-4 w-6 h-6 text-yellow-500/30 group-hover:text-yellow-500 transition-colors" />
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-yellow-500/10 rounded">
                                        <Zap className="w-5 h-5 text-yellow-500" />
                                    </div>
                                    <div>
                                        <p className="text-[8px] text-yellow-500/50 font-bold uppercase tracking-tighter italic">Award: Play To Win</p>
                                        <p className="text-white text-xs font-bold uppercase tracking-widest">Aptiv Execution</p>
                                    </div>
                                </div>
                                <p className="text-neutral-500 text-[10px] leading-relaxed italic">
                                    Acknowledged for driving critical validation efficiency through Python-based automation frameworks (90% manual reduction) and IFR reporting automation (70% effort reduction).
                                </p>
                            </div>

                            {/* Signal Indicator Simulation */}
                            <div className="p-6 border border-white/5 bg-white/[0.01] rounded-2xl">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-[8px] text-neutral-500 font-bold tracking-widest uppercase">SIGNAL_PROCESSING_NODE</span>
                                    <div className="flex gap-1">
                                        <div className="w-1 h-3 bg-cyan-500/30" />
                                        <div className="w-1 h-3 bg-cyan-500" />
                                        <div className="w-1 h-3 bg-cyan-500 animate-pulse" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    {Array.from({ length: 6 }).map((_, i) => (
                                        <div key={i} className="h-6 bg-white/5 rounded flex items-center justify-center">
                                            <span className="text-[6px] text-zinc-500">RAW_0{i}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scan {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100%); }
                }
                .animate-scan {
                    animation: scan 4s linear infinite;
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 10s linear infinite;
                }
            `}</style>
        </section>
    );
}
