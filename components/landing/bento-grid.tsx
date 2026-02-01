"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Network, ShieldCheck } from "lucide-react";

export function BentoGridSection() {
    return (
        <section id="features" className="py-24 relative z-10 container mx-auto px-4 sm:px-8">
            <div className="max-w-4xl mx-auto mb-20 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
                    Construct your understanding.
                </h2>
                <p className="text-muted-foreground text-xl leading-relaxed">
                    Most platforms feed you content. Kerno forces you to build structure.
                </p>
            </div>

            <div className="space-y-24 max-w-5xl mx-auto">
                {/* Feature 1: The Graph (Visual) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="relative rounded-3xl border border-white/10 bg-zinc-950/50 aspect-square md:aspect-[4/3] overflow-hidden group">
                            <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-transparent opacity-50" />

                            {/* Abstract Graph Visualization */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-2/3 h-2/3">
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 1 }}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_var(--primary)]"
                                    />
                                    {/* Connecting lines and nodes would actally be SVG here, keeping it abstract for now */}
                                    <div className="absolute inset-0 border border-primary/20 rounded-full animate-pulse-slow" />
                                    <div className="absolute inset-4 border border-primary/10 rounded-full" />
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                                <div className="h-1 w-12 bg-primary rounded-full mb-2" />
                                <p className="text-xs text-muted-foreground font-mono">LIVE DEPENDENCY GRAPH</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="inline-flex items-center gap-2 text-primary font-medium mb-4">
                            <Network className="h-5 w-5" />
                            <span>Visible Architecture</span>
                        </div>
                        <h3 className="text-3xl font-bold mb-4">See the Territory.</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            You can&apos;t master what you can&apos;t see. Kerno generates a dynamic dependency graph for every topic, showing you exactly what prerequisites you need and what concepts unlock next.
                        </p>
                        <ul className="space-y-3">
                            {['Dynamic Prerequisites', 'Concept Clustering', 'Visual Progress Tracking'].map(item => (
                                <li key={item} className="flex items-center gap-2 text-sm text-zinc-300">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Feature 2: Recall Gates (Interaction) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 text-sky-400 font-medium mb-4">
                            <ShieldCheck className="h-5 w-5" />
                            <span>Active Recall Gates</span>
                        </div>
                        <h3 className="text-3xl font-bold mb-4">Prove Your Work.</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Passive watching is not learning. Kerno locks future nodes until you prove mastery of the current one through synthesis prompts and problem sets.
                        </p>
                        <ul className="space-y-3">
                            {['No Skipping Ahead', 'Synthesis Prompts', 'Spaced Repetition'].map(item => (
                                <li key={item} className="flex items-center gap-2 text-sm text-zinc-300">
                                    <div className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className="relative rounded-3xl border border-white/10 bg-zinc-950/50 aspect-square md:aspect-[4/3] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-bl from-sky-500/10 via-transparent to-transparent" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                                <div className="w-full max-w-sm p-4 rounded-xl border border-red-500/30 bg-red-900/10 backdrop-blur-sm mb-4">
                                    <div className="flex items-center gap-3 text-red-200 text-sm">
                                        <ShieldCheck className="h-4 w-4" />
                                        <span>Locked: Complete &quot;Basics&quot; first</span>
                                    </div>
                                </div>
                                <div className="w-full max-w-sm p-4 rounded-xl border border-green-500/30 bg-green-900/10 backdrop-blur-sm">
                                    <div className="flex items-center gap-3 text-green-200 text-sm">
                                        <Brain className="h-4 w-4" />
                                        <span>Unlocked: First Principles</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
