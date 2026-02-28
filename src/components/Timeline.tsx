"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, ExternalLink, Zap } from "lucide-react";

const MILESTONES = [
    {
        date: "JAN 2024 - PRESENT",
        title: "Associate Software Engineer",
        organization: "Aptiv",
        description: "Driving automotive innovation through Python ReSim frameworks and high-reliability CAPL libraries. Improving validation efficiency by 35% and automating CI/CT operations.",
        tech: ["Python", "CAPL", "CANoe", "Jenkins"],
        icon: <Briefcase className="w-5 h-5 text-cyan-500" />,
        link: "https://www.aptiv.com",
        id: "MIL_STONE_04"
    },
    {
        date: "JUNE 2024",
        title: "B.Tech in Computer Science",
        organization: "VIT Bhopal University",
        description: "Completed undergraduate studies with a CGPA of 8.43. Specialized in scalable automation and embedded systems.",
        tech: ["Computer Science", "Embedded Systems"],
        icon: <GraduationCap className="w-5 h-5 text-cyan-500" />,
        link: "https://vitbhopal.ac.in",
        id: "MIL_STONE_03"
    },
    {
        date: "JULY 2023",
        title: "AWS Certified Cloud Practitioner",
        organization: "Amazon Web Services",
        description: "Validated entry-level cloud concepts and core AWS services.",
        tech: ["AWS", "Cloud Computing"],
        icon: <Award className="w-5 h-5 text-cyan-500" />,
        link: "https://www.credly.com",
        id: "MIL_STONE_02"
    },
    {
        date: "OCT 2022",
        title: "GeoToll-Link Launch",
        organization: "Internal Project",
        description: "Developed an intelligent mobility tolling system using GPS and Cloud IoT, achieving 75% accuracy.",
        tech: ["Python", "AWS IoT Core", "Raspberry Pi"],
        icon: <Zap className="w-5 h-5 text-cyan-500" />,
        link: "https://github.com/sureshkonar/GeoToll-Link",
        id: "MIL_STONE_01"
    }
];

export default function Timeline() {
    return (
        <section id="timeline" className="relative w-full bg-[#121212] py-32 px-6 overflow-hidden border-t border-white/5 font-mono">
            {/* Background Light Trails */}
            <div className="absolute inset-x-0 h-[1px] top-1/4 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent opacity-20 blur-sm" />
            <div className="absolute inset-x-0 h-[1px] top-3/4 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent opacity-10 blur-md" />

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Zap className="w-4 h-4 text-cyan-500" />
                            <span className="text-cyan-500 text-[10px] tracking-widest uppercase">>>> FAST_LANE_METRICS_READY</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic">
                            The <span className="text-cyan-500">Journey</span>
                        </h2>
                    </div>
                </div>

                <div className="relative">
                    {/* Technical Signal Path (Vertical Line) */}
                    <div className="absolute left-[30px] top-0 bottom-0 w-[2px] bg-white opacity-5" />
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="absolute left-[30px] top-0 w-[2px] bg-gradient-to-b from-cyan-500 via-cyan-500/50 to-transparent"
                    />

                    <div className="space-y-32">
                        {MILESTONES.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: idx * 0.1, ease: "circOut" }}
                                viewport={{ once: true }}
                                className="relative pl-16 md:pl-24 group"
                            >
                                {/* High Beam Node */}
                                <div className="absolute left-[20px] top-0 w-[22px] h-[22px] z-20">
                                    <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-lg group-hover:bg-cyan-500/40 transition-all duration-500" />
                                    <div className="relative w-full h-full rounded-full bg-black border-2 border-white/10 group-hover:border-cyan-500 transition-colors flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                                    </div>

                                    {/* Light Beam Beam */}
                                    <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 group-hover:w-32 h-[1px] bg-gradient-to-r from-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
                                </div>

                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-l-[1px] border-white/5 pl-8 md:pl-12 py-2">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-tighter italic">{item.id}</span>
                                                <div className="h-[1px] w-4 bg-white/10" />
                                                <span className="text-cyan-500 text-[10px] font-bold tracking-widest uppercase italic">
                                                    {item.date}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl md:text-3xl text-white font-black mb-1 uppercase tracking-tighter italic group-hover:text-cyan-500 transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-zinc-500 text-sm font-bold uppercase italic tracking-widest mb-4">
                                                {item.organization}
                                            </p>
                                        </div>

                                        <div className="flex p-4 rounded-3xl bg-white/[0.02] border border-white/5 text-zinc-700 group-hover:text-cyan-500 group-hover:border-cyan-500/20 group-hover:bg-cyan-500/5 transition-all">
                                            {item.icon}
                                        </div>
                                    </div>

                                    <div className="pl-8 md:pl-12">
                                        <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-8 max-w-2xl font-sans not-italic">
                                            {item.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {item.tech.map(t => (
                                                <span key={t} className="text-[8px] px-3 py-1 bg-black border border-white/5 text-zinc-600 uppercase tracking-tighter font-bold rounded-sm group-hover:border-cyan-500/20 transition-colors">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-3 text-zinc-600 hover:text-cyan-500 text-[10px] font-bold uppercase tracking-[0.2em] transition-all group/link"
                                        >
                                            >>> VERIFY_MIL_STONE_LOG
                                            <ExternalLink className="w-3 h-3 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Decorative "Velocity" Lines */}
            <div className="absolute right-0 top-0 h-full w-32 pointer-events-none opacity-5">
                <div className="h-full w-full bg-[linear-gradient(to_bottom,transparent_0%,white_50%,transparent_100%)] bg-[length:1px_100%] bg-repeat-x" />
            </div>
        </section>
    );
}
