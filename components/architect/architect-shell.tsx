"use client";

import * as React from "react";
import { ConstructionLog } from "@/components/architect/construction-log";
import { BlueprintPanel } from "@/components/architect/blueprint-panel";
import { useRoadmapState } from "@/hooks/use-roadmap-state";
import { motion, AnimatePresence } from "framer-motion";

export function ArchitectShell() {
    const { phase } = useRoadmapState();
    const inputRef = React.useRef<HTMLTextAreaElement>(null);

    const handleStartArchitecture = () => {
        inputRef.current?.focus();
    };

    return (
        <div className="h-full w-full bg-background text-foreground overflow-hidden flex relative group">
            <AnimatePresence mode="wait">
                {phase === 'architect' ? (
                    <motion.div
                        key="architect-phase"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                        className="h-full w-full grid grid-cols-[420px_1fr] lg:grid-cols-[480px_1fr] overflow-hidden"
                    >
                        {/* Left Panel: Conversation / Construction Log */}
                        <div className="h-full overflow-hidden flex flex-col border-r border-border/40 relative z-20 bg-background/50 backdrop-blur-sm shadow-[4px_0_24px_-12px_rgba(0,0,0,0.1)]">
                            <ConstructionLog inputRef={inputRef} />
                        </div>

                        {/* Right Panel: Blueprint / Visualization */}
                        <div className="h-full w-full relative bg-muted/5 z-0 overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] opacity-[0.25] dark:opacity-[0.05] pointer-events-none" />
                            <BlueprintPanel onStartArchitecture={handleStartArchitecture} />
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="immersion-phase"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                        className="h-full w-full flex items-center justify-center bg-background p-12"
                    >
                        <div className="text-center space-y-4 max-w-xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                                Immersion Mode
                            </div>
                            <h2 className="text-4xl font-black tracking-tighter">Immersion Phase</h2>
                            <p className="text-muted-foreground leading-relaxed font-medium">
                                Hello, this is the Immersion page. Here we will be generating all the detailed content and exercises based on your approved architecture.
                            </p>
                            <div className="pt-8 flex justify-center gap-4">
                                <div className="h-1 w-12 rounded-full bg-primary/20" />
                                <div className="h-1 w-12 rounded-full bg-primary/10" />
                                <div className="h-1 w-12 rounded-full bg-primary/5" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
