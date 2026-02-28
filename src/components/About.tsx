"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="relative min-h-screen w-full bg-[#121212] flex items-center justify-center px-6 py-24 overflow-hidden font-mono">
            {/* Background Radar Effect */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20">
                <div className="relative w-[1000px] h-[1000px]">
                    <div className="absolute inset-0 border border-white/5 rounded-full" />
                    <div className="absolute inset-[150px] border border-white/5 rounded-full" />
                    <div className="absolute inset-[300px] border border-white/5 rounded-full" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-[1px] bg-white/5" />
                        <div className="w-full h-[1px] bg-white/5 absolute" />
                    </div>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(6,182,212,0.1)_10deg,transparent_20deg)]"
                    />
                </div>
            </div>

            <div className="max-w-4xl w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    viewport={{ once: true }}
                    className="relative p-12 md:p-16 border border-white/10 bg-black/40 backdrop-blur-3xl rounded-[2rem] overflow-hidden"
                >
                    {/* Header Metadata */}
                    <div className="absolute top-6 left-12 right-12 flex justify-between text-[8px] text-cyan-500/50 uppercase tracking-widest">
                        <span>BIOS_IDENTIFIER: SK_2024_01</span>
                        <span>KERNEL_STACK: STABLE</span>
                        <span>UI_MODE: AUTO_INFOTAINMENT</span>
                    </div>

                    {/* Corner Brackets */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20" />

                    <div className="space-y-12">
                        <div className="flex items-center gap-4">
                            <span className="text-cyan-500 text-xs tracking-[0.2em] font-bold uppercase transition-all group-hover:tracking-[0.4em]">>>> IDENTITY_DECRYPT</span>
                            <div className="h-[1px] flex-1 bg-white/10" />
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter uppercase italic">
                            Developing Automotive <span className="text-cyan-500">Intelligence</span> for the software-defined future.
                        </h2>

                        <p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-2xl border-l-[3px] border-cyan-500/30 pl-8 py-2">
                            Engineering high-precision Python frameworks and high-reliability CAPL libraries. Specialized in bridging the gap between embedded hardware constraints and cloud-native validation ecosystems.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-white/5">
                            <div>
                                <p className="text-cyan-500 text-[10px] uppercase tracking-widest mb-3 font-bold">>>> EDUCATION_PARAM</p>
                                <p className="text-white text-xs font-bold uppercase">B.Tech CS — VIT Bhopal</p>
                                <p className="text-neutral-500 text-[10px] mt-1 italic">CGPA_REF: 8.43_SIGNAL</p>
                            </div>
                            <div>
                                <p className="text-cyan-500 text-[10px] uppercase tracking-widest mb-3 font-bold">>>> CURRENT_THREAD</p>
                                <p className="text-white text-xs font-bold uppercase">Associate SWE</p>
                                <p className="text-neutral-500 text-[10px] mt-1 italic">UNIT: APTIV_BENGALURU</p>
                            </div>
                            <div className="relative group">
                                <div className="absolute -inset-2 bg-cyan-500/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-lg" />
                                <p className="text-cyan-500 text-[10px] uppercase tracking-widest mb-3 font-bold">>>> STATUS_FLAG</p>
                                <p className="text-white text-xs font-bold uppercase italic">INNOVATING_FAST</p>
                                <p className="text-neutral-500 text-[10px] mt-1 italic">OS: READY</p>
                            </div>
                        </div>
                    </div>

                    {/* Scanning Line */}
                    <motion.div
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-[2px] bg-cyan-500/10 pointer-events-none"
                    />
                </motion.div>
            </div>
        </section>
    );
}
