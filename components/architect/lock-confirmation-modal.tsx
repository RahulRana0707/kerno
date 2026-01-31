"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, X, ArrowRight } from "lucide-react";
import { Roadmap } from "@/lib/types";

interface LockConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    roadmap: Roadmap | null;
}

export function LockConfirmationModal({
    isOpen,
    onClose,
    onConfirm,
    roadmap
}: LockConfirmationModalProps) {
    if (!roadmap) return null;

    const sections = roadmap.nodes.filter(n => n.type === 'section');

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-lg"
                    >
                        <Card className="border-primary/20 shadow-2xl bg-card/90 backdrop-blur-xl">
                            <CardHeader className="relative border-b border-border/50 pb-6">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-4 top-4 h-8 w-8 rounded-full"
                                    onClick={onClose}
                                >
                                    <X className="h-4 w-4" />
                                </Button>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                                        <Sparkles className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl font-bold">Lock Architecture?</CardTitle>
                                        <CardDescription>Finalizing the structure for your learning path</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-6 space-y-6">
                                <div className="space-y-3">
                                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70">Blueprint Summary</p>
                                    <div className="rounded-xl border border-border/50 bg-muted/30 p-4 space-y-4">
                                        <div>
                                            <h4 className="text-sm font-bold text-foreground">{roadmap.title}</h4>
                                            <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{roadmap.description}</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {sections.map((s) => (
                                                <div key={s.id} className="px-2 py-0.5 rounded-md bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary">
                                                    {s.title}
                                                </div>
                                            ))}
                                            {sections.length === 0 && (
                                                <span className="text-[10px] text-muted-foreground italic">No sections defined</span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <Button
                                        size="lg"
                                        onClick={onConfirm}
                                        className="w-full font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 h-12 gap-2"
                                    >
                                        Let's Go
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        onClick={onClose}
                                        className="w-full text-sm font-medium h-10"
                                    >
                                        I still have some changes
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
