"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

interface RoadmapSummaryCardProps {
    roadmap: Roadmap;
    isGenerating?: boolean;
}

import { Roadmap, RoadmapNode } from "@/lib/types";

export function RoadmapSummaryCard({
    roadmap,
    isGenerating,
    onView,
    onConstruct
}: RoadmapSummaryCardProps & {
    onView?: (roadmap: Roadmap) => void;
    onConstruct?: (roadmap: Roadmap) => void;
}) {
    const nodes = roadmap?.nodes || [];
    const sections = nodes.filter((n: RoadmapNode) => n.type === 'section');

    return (
        <Card className="w-full border-primary/10 bg-primary/5 backdrop-blur-3xl overflow-hidden group/roadmap shadow-2xl shadow-primary/5">
            <CardHeader className="pb-4 space-y-3">
                <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-lg font-bold text-foreground/90 group-hover/roadmap:text-primary transition-colors flex items-center gap-2 leading-none">
                        {isGenerating && !roadmap?.title ? (
                            <div className="h-5 w-48 bg-primary/20 animate-pulse rounded" />
                        ) : (
                            <>
                                <Icons.sparkles className={cn("h-4 w-4 text-primary shrink-0", isGenerating && "animate-pulse")} />
                                {roadmap?.title || "New Blueprint"}
                            </>
                        )}
                    </CardTitle>
                    <div className="flex items-center gap-2 shrink-0">
                        {isGenerating && <div className="h-2 w-2 rounded-full bg-primary animate-ping" />}
                    </div>
                </div>
                {!roadmap?.description && isGenerating ? (
                    <div className="h-4 w-3/4 bg-primary/10 animate-pulse rounded" />
                ) : (
                    <CardDescription className="text-sm leading-relaxed line-clamp-2 text-muted-foreground/80">
                        {roadmap?.description}
                    </CardDescription>
                )}
            </CardHeader>
            <CardContent className="space-y-6 pt-2">
                <div className="space-y-3">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground/50 flex items-center gap-2">
                        Core Architecture
                        {isGenerating && <span className="text-[9px] animate-pulse text-primary/70">(Constructing...)</span>}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {sections.length > 0 ? (
                            sections.map((s: RoadmapNode) => (
                                <div key={s.id} className="px-3 py-1 rounded-full bg-background/60 border border-border/60 text-[11px] font-medium text-foreground/80 shadow-xs backdrop-blur-sm">
                                    {s.title}
                                </div>
                            ))
                        ) : isGenerating ? (
                            <div className="flex gap-2">
                                <div className="h-6 w-20 bg-primary/10 animate-pulse rounded-full" />
                                <div className="h-6 w-24 bg-primary/10 animate-pulse rounded-full" />
                            </div>
                        ) : (
                            <div className="text-[11px] text-muted-foreground italic px-1">No sections defined yet</div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                    <Button
                        size="sm"
                        onClick={() => onView?.(roadmap)}
                        disabled={isGenerating || !roadmap?.nodes}
                        className={cn(
                            "w-full h-9 text-xs font-semibold transition-all duration-300",
                            "bg-background/50 border border-primary/20 text-foreground hover:bg-primary/10 hover:border-primary/40 hover:text-primary"
                        )}
                        variant="outline"
                    >
                        <span className="flex items-center gap-2">
                            View
                        </span>
                    </Button>

                    <Button
                        size="sm"
                        onClick={() => onConstruct?.(roadmap)}
                        disabled={isGenerating || !roadmap?.nodes}
                        className={cn(
                            "w-full h-9 text-xs font-bold transition-all duration-500",
                            isGenerating
                                ? "bg-primary/20 text-primary border-primary/20 cursor-wait"
                                : "shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95 bg-primary text-primary-foreground hover:bg-primary/90"
                        )}
                    >
                        {isGenerating ? (
                            <span className="flex items-center gap-2">
                                <Icons.rotateCw className="h-3 w-3 animate-spin" />
                                <span className="hidden sm:inline">Building...</span>
                            </span>
                        ) : (
                            <span className="flex items-center gap-2">
                                Construct I
                                <Icons.check className="h-3.5 w-3.5 ml-1" />
                            </span>
                        )}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
