"use client";

import { MessageSquareQuote, Linkedin, ArrowUpRight } from "lucide-react";

const LINKEDIN_PROFILE = "https://www.linkedin.com/in/suresh-konar-779114198/";

export default function Recommendations() {
    return (
        <section id="recommendations" className="relative w-full bg-[#121212] px-6 py-32 overflow-hidden border-t border-white/5 font-mono">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(6,182,212,0.18),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(14,165,233,0.12),transparent_45%)] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <MessageSquareQuote className="w-4 h-4 text-cyan-500" />
                            <span className="text-cyan-500 text-[10px] tracking-widest uppercase">&gt;&gt;&gt; COLLAB_LOG_ENABLED</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic">
                            Teammate <span className="text-cyan-500">Recommendations</span>
                        </h2>
                        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-4 leading-relaxed">
                            If we have worked together, I would appreciate a LinkedIn recommendation highlighting our collaboration, impact, and delivery.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                        <span>Signal: Professional Endorsement</span>
                        <span>Status: Open</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 border border-white/10 bg-white/[0.02] rounded-2xl p-6 md:p-8">
                        <div className="flex items-start justify-between gap-6">
                            <div>
                                <h3 className="text-white text-2xl font-black uppercase tracking-tight mb-4">
                                    Share a Recommendation
                                </h3>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                    Mention the project or program, the role you saw me in, and the outcome we delivered.
                                    A short, specific note is perfect.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        "Automation impact",
                                        "Cross-team delivery",
                                        "Technical ownership",
                                        "Reliability & speed"
                                    ].map((item) => (
                                        <span key={item} className="text-[9px] px-3 py-1 border border-cyan-500/20 bg-cyan-500/5 text-cyan-200 uppercase tracking-wider rounded-sm">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="hidden md:flex flex-col items-center gap-3">
                                <div className="w-14 h-14 rounded-full border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center">
                                    <Linkedin className="w-6 h-6 text-cyan-300" />
                                </div>
                                <span className="text-[10px] text-zinc-500 uppercase tracking-widest">LinkedIn</span>
                            </div>
                        </div>
                    </div>

                    <div className="border border-white/10 bg-black/40 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
                        <div>
                            <p className="text-[10px] text-cyan-400 tracking-[0.2em] uppercase mb-4">Recommendation Link</p>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Open my LinkedIn profile and use the “Recommend” option to add your note.
                            </p>
                        </div>
                        <a
                            href={LINKEDIN_PROFILE}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center justify-between gap-3 px-4 py-3 border border-cyan-500/30 bg-cyan-500/10 text-cyan-200 text-[10px] uppercase tracking-[0.22em] hover:bg-cyan-500/20 transition-colors"
                        >
                            Open LinkedIn
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
