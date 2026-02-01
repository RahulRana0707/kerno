"use client";

import * as React from "react";
import { RoadmapNavItem } from "./roadmap-nav-item";
import { Roadmap, RoadmapNode } from "@/lib/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Icons } from "@/components/icons";

interface RoadmapNavigationProps {
    roadmap?: Roadmap;
    isLoading?: boolean;
    onStartArchitecture?: () => void;
}

export function RoadmapNavigation({ roadmap, isLoading = false, onStartArchitecture }: RoadmapNavigationProps) {

    const stats = React.useMemo(() => {
        if (!roadmap) return { topics: 0, exercises: 0 };

        const countNodes = (nodes: RoadmapNode[]): { topics: number; exercises: number } => {
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

    if (!roadmap && !isLoading) {
        return (
            <div className="h-full w-full flex flex-col items-center justify-center p-8 text-center bg-muted/5 border-l border-border/40">
                <div className="h-16 w-16 mb-6 rounded-2xl bg-muted/50 border border-border/50 flex items-center justify-center">
                    <Icons.layoutGrid className="h-8 w-8 text-muted-foreground/40" />
                </div>
                <h3 className="text-lg font-medium tracking-tight mb-2">No Blueprint Yet</h3>
                <p className="text-muted-foreground text-sm max-w-[200px] leading-relaxed mb-6">
                    Start a conversation with the Architect to generate your learning path.
                </p>
                <button
                    onClick={onStartArchitecture}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary/10 text-primary-foreground hover:bg-primary/20 h-10 px-4 py-2"
                >
                    <span className="text-primary font-semibold">Start Architecture</span>
                </button>
            </div>
        );
    }

    if (isLoading && (!roadmap || roadmap.nodes.length === 0)) {
        return (
            <div className="h-full w-full bg-muted/5 border-l border-border/40 flex flex-col">
                <div className="h-14 flex items-center px-4 border-b border-border/40 bg-background/50 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                        <Icons.sparkles className="h-4 w-4 text-primary animate-pulse" />
                        <span className="text-sm font-medium animate-pulse">Designing Structure...</span>
                    </div>
                </div>
                <div className="p-4">
                    <div className="space-y-4">
                        {/* Sidebar Skeleton */}
                        <div className="h-4 w-3/4 bg-muted rounded animate-pulse" />
                        <div className="h-8 w-full bg-muted/50 rounded animate-pulse" />
                        <div className="space-y-2 pl-4">
                            <div className="h-4 w-full bg-muted/30 rounded animate-pulse" />
                            <div className="h-4 w-5/6 bg-muted/30 rounded animate-pulse" />
                            <div className="h-4 w-4/6 bg-muted/30 rounded animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="h-full w-full bg-sidebar/50 border-l border-border/40 flex flex-col">
            {/* Sidebar Header */}
            <div className="h-14 flex-none flex items-center justify-between px-4 border-b border-border/40 bg-background/50 backdrop-blur-sm">
                <div className="flex items-center gap-2.5 min-w-0">
                    <div className="h-6 w-6 rounded-md bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                        <Icons.map className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-sm font-semibold truncate text-foreground/90 tracking-tight">
                        {roadmap?.title || "Untitled Blueprint"}
                    </span>
                </div>
            </div>

            {/* Sidebar Stats */}
            {roadmap && (
                <div className="px-4 py-3 border-b border-border/20 bg-muted/5">
                    <div className="flex items-center gap-3 text-[11px] font-medium text-muted-foreground/70 uppercase tracking-wider">
                        <span className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                            {stats.topics} Modules
                        </span>
                        <span className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent-foreground/50" />
                            {stats.exercises} Nodes
                        </span>
                    </div>
                </div>
            )}

            {/* Content Tree */}
            <div className="flex-1 min-h-0 overflow-hidden">
                <ScrollArea className="h-full">
                    <div className="p-3">
                        <div className="space-y-0.5">
                            <div className="px-2 py-1.5 mb-2">
                                <h4 className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground/40">
                                    Structure
                                </h4>
                            </div>
                            {roadmap?.nodes.map((node, index) => (
                                <RoadmapNavItem key={node.id} node={node} index={index} />
                            ))}
                        </div>
                    </div>
                </ScrollArea>
            </div>

            {/* Sidebar Footer */}
            <div className="p-3 border-t border-border/40 bg-background/30">
                <button className="flex items-center gap-2 w-full px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors group">
                    <div className="h-5 w-5 rounded border border-border flex items-center justify-center bg-background group-hover:border-primary/50 transition-colors">
                        <Icons.plus className="h-3 w-3" />
                    </div>
                    <span>Add Pattern</span>
                    <span className="ml-auto text-[10px] opacity-50"><kbd className="font-sans">Cmd+K</kbd></span>
                </button>
            </div>
        </div>
    );
}
