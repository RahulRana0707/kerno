"use client";

import * as React from "react";
import { RoadmapNavigation } from "./roadmap-navigation";
import { useRoadmapState } from "@/hooks/use-roadmap-state";

interface BlueprintPanelProps {
    onStartArchitecture?: () => void;
}

export function BlueprintPanel({ onStartArchitecture }: BlueprintPanelProps) {
    const { roadmap, isGenerating } = useRoadmapState();

    return (
        <div className="h-full w-full flex items-center justify-center bg-background relative overflow-hidden">
            {/* Radial gradient spotlight */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,var(--primary),transparent)] opacity-[0.08]" />

            {/* Subtle dot pattern */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `radial-gradient(circle 1.5px at center, var(--foreground) 1px, transparent 1px)`,
                    backgroundSize: '24px 24px'
                }}
            />

            <RoadmapNavigation
                roadmap={roadmap || undefined}
                isLoading={isGenerating}
                onStartArchitecture={onStartArchitecture}
            />
        </div>
    );
}
