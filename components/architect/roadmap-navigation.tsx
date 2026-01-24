"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { RoadmapNavItem } from "./roadmap-nav-item";
import { RoadmapSkeleton } from "./roadmap-skeleton";
import { Roadmap } from "@/lib/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sparkles } from "lucide-react";

interface RoadmapNavigationProps {
    roadmap?: Roadmap;
    isLoading?: boolean;
}

export function RoadmapNavigation({ roadmap, isLoading = false }: RoadmapNavigationProps) {
    // Calculate stats
    const stats = React.useMemo(() => {
        if (!roadmap) return { topics: 0, exercises: 0 };

        const countNodes = (nodes: any[]): { topics: number; exercises: number } => {
            return nodes.reduce((acc, node) => {
                if (node.type === "exercise") acc.exercises++;
                else if (node.type === "topic") acc.topics++;

                if (node.children) {
                    const childStats = countNodes(node.children);
                    acc.topics += childStats.topics;
                    acc.exercises += childStats.exercises;
                }
                return acc;
            }, { topics: 0, exercises: 0 });
        };

        return countNodes(roadmap.nodes);
    }, [roadmap]);

    if (isLoading) {
        return (
            <Card className="w-[30%] h-[80%] shadow-2xl border-border backdrop-blur-xl bg-card/80">
                <CardHeader className="border-b border-border/50">
                    <div className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                        <CardTitle className="text-lg bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                            Generating Roadmap...
                        </CardTitle>
                    </div>
                    <CardDescription>AI is structuring your learning path</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                    <RoadmapSkeleton />
                </CardContent>
            </Card>
        );
    }

    if (!roadmap) {
        return (
            <Card className="w-[30%] h-[80%] shadow-2xl border-border backdrop-blur-xl bg-card/80">
                <CardHeader className="border-b border-border/50">
                    <CardTitle className="text-lg">Learning Roadmap</CardTitle>
                    <CardDescription>Start a conversation to generate your path</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 flex items-center justify-center h-[calc(100%-5rem)]">
                    <div className="text-center space-y-2 opacity-50">
                        <p className="text-sm text-muted-foreground">No roadmap generated yet</p>
                        <p className="text-xs text-muted-foreground">Send a message to begin</p>
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="w-[30%] h-[80%] shadow-2xl border-border backdrop-blur-xl bg-card/80 flex flex-col relative overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

            {/* Progress bar on left edge */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />

            <CardHeader className="border-b border-border/50 flex-none relative z-10">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text">
                        {roadmap.title}
                    </CardTitle>
                    {(stats.topics > 0 || stats.exercises > 0) && (
                        <div className="flex items-center gap-2 text-xs">
                            {stats.topics > 0 && (
                                <span className="px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                                    {stats.topics} topics
                                </span>
                            )}
                            {stats.exercises > 0 && (
                                <span className="px-2 py-1 rounded-full bg-accent/10 text-accent font-medium">
                                    {stats.exercises} exercises
                                </span>
                            )}
                        </div>
                    )}
                </div>
                <CardDescription>{roadmap.description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-4 flex-1 min-h-0 relative z-10">
                <ScrollArea className="h-full pr-2">
                    <div className="space-y-1">
                        {roadmap.nodes.map((node, index) => (
                            <RoadmapNavItem key={node.id} node={node} index={index} />
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    );
}
