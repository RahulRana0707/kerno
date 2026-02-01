"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MovingBorder } from "@/components/ui/moving-border";
import Link from "next/link";

export function Hero() {
    const [query, setQuery] = React.useState("");
    const [isFocused, setIsFocused] = React.useState(false);

    return (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">

            {/* Pill Label */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/50 px-3 py-1 text-sm text-muted-foreground backdrop-blur-md"
            >
                <Icons.sparkles className="h-3.5 w-3.5 text-primary" />
                <span>Structure-First Learning Engine</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "circOut" }}
                className="max-w-4xl text-5xl font-medium tracking-tight sm:text-7xl mb-8"
            >
                Learning is a <br className="hidden sm:block" />
                <span className="text-primary italic">construction</span> problem.
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="max-w-2xl text-lg text-muted-foreground mb-12 leading-relaxed"
            >
                Stop inferring structure from video playlists. <br className="hidden sm:block" />
                Architect your mastery path first, then build it piece by piece.
            </motion.p>

            {/* Interactive Input Area with Shiny Border Logic */}
            <div className="relative w-full max-w-lg mx-auto mb-16 h-16"> {/* Fixed height to prevent layout shift */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="relative group w-full h-full"
                >
                    {/* The Moving Border Background Layer - Only visible when NOT focused */}
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: isFocused ? 0 : 1 }}
                        transition={{ duration: 0.2 }}
                        className="absolute -inset-0.5 rounded-2xl overflow-hidden pointer-events-none"
                    >
                        <MovingBorder duration={3500} rx="1rem" ry="1rem">
                            <div className="h-40 w-40 opacity-[0.8] bg-[radial-gradient(var(--primary)_40%,transparent_60%)]" />
                        </MovingBorder>
                    </motion.div>

                    {/* The Content Layer */}
                    <div className={`relative flex items-center gap-2 rounded-2xl bg-background/80 p-2 backdrop-blur-xl transition-all duration-300 ${isFocused ? 'ring-2 ring-primary border-transparent shadow-lg shadow-primary/20' : 'border border-input/50 shadow-2xl'}`}>
                        <div className="pl-3 text-muted-foreground">
                            <Icons.search className="h-5 w-5" />
                        </div>
                        <Input
                            className="flex-1 border-none bg-transparent shadow-none focus-visible:ring-0 text-base h-12 placeholder:text-muted-foreground/50"
                            placeholder="What do you want to master today?"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                        />
                        <Link href="/signup">
                            <Button size="lg" className="rounded-xl px-6 font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(15,118,110,0.3)] transition-all hover:shadow-[0_0_30px_rgba(15,118,110,0.5)]">
                                Architect Path
                                <Icons.arrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                {/* Suggestion Tags */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-muted-foreground"
                >
                    <span className="opacity-50">Try:</span>
                    {['System Design', 'React Internals', 'Quantum Mechanics', 'Game Theory'].map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setQuery(tag)}
                            className="hover:text-primary transition-colors duration-200 cursor-pointer"
                        >
                            {tag}
                        </button>
                    ))}
                </motion.div>
            </div>

        </div>
    );
}
