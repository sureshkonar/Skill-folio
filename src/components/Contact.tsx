"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Instagram, ArrowUpRight, Radio, ShieldCheck } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="relative w-full bg-[#121212] px-6 py-40 overflow-hidden border-t border-white/5 font-mono">
            {/* Background Headlight Units Rendering (Simulation) */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-10">
                <div className="absolute -left-1/4 top-0 w-1/2 h-full bg-gradient-to-r from-cyan-500/20 to-transparent blur-[120px] rounded-full" />
                <div className="absolute -right-1/4 top-0 w-1/2 h-full bg-gradient-to-l from-cyan-500/20 to-transparent blur-[120px] rounded-full" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-cyan-500/20 bg-cyan-500/5 text-cyan-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-12 italic">
                        <Radio className="w-3 h-3 animate-pulse" />
                        V2X_COMM_PORT_OPEN: LISTENING
                    </div>

                    <h2 className="text-5xl md:text-8xl font-black text-white mb-16 tracking-tighter uppercase italic drop-shadow-2xl">
                        Let's Initiate <br />
                        <span className="text-cyan-500">Handshake.</span>
                    </h2>

                    <div className="flex flex-col items-center justify-center gap-12 mb-32">
                        <a
                            href="mailto:msuresh9122002@gmail.com"
                            className="group relative flex items-center gap-4 px-12 py-6 bg-white text-black font-black uppercase tracking-widest italic rounded-sm hover:bg-cyan-500 hover:text-white transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(6,182,212,0.4)]"
                        >
                            <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                            V2X_INIT_MESSAGE
                            <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />

                            {/* Scanning Border Animation */}
                            <div className="absolute inset-0 border border-white opacity-20" />
                            <div className="absolute inset-0 border border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                        </a>

                        <div className="space-y-4">
                            <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest mb-6">>>> CONNECT_VIA_BUS_NODES</p>
                            <div className="flex items-center gap-4">
                                {[
                                    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/suresh-konar-779114198/" },
                                    { icon: <Github className="w-5 h-5" />, href: "https://github.com/sureshkonar" },
                                    { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/Sureshkonar17" },
                                    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/sureshkonar.ig/" }
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative p-5 border border-white/5 bg-white/[0.02] text-zinc-500 hover:text-white hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all group/social"
                                    >
                                        {/* Bracketed corner */}
                                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/10 group-hover/social:border-cyan-500 transition-colors" />
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                <footer className="pt-24 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 text-zinc-700 text-[10px] font-bold uppercase tracking-[0.3em] relative">
                    <div className="flex items-center gap-4">
                        <ShieldCheck className="w-4 h-4 text-cyan-500/30" />
                        <span>© 2025 PROTOCOL_LOCKED // ALL_RIGHTS_RESERVED</span>
                    </div>
                    <div className="flex gap-10">
                        <a href="#about" className="hover:text-cyan-500 transition-colors italic tracking-tighter">>>> ABOUT_PARAM</a>
                        <a href="#projects" className="hover:text-cyan-500 transition-colors italic tracking-tighter">>>> WORKS_REPO</a>
                        <a href="#experience" className="hover:text-cyan-500 transition-colors italic tracking-tighter">>>> CORE_TELEMETRY</a>
                    </div>
                    <div className="text-zinc-800">BUILD: SDV_STABLE_V4</div>
                </footer>
            </div>

            {/* Massive "Headlight" Beam Glow Effect at Bottom */}
            <div className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-screen h-[40%] bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15)_0%,transparent_70%)] blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent shadow-[0_0_20px_rgba(6,182,212,0.5)]" />
        </section>
    );
}
