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
            <RoadmapNavigation
                roadmap={roadmap || undefined}
                isLoading={isGenerating}
                onStartArchitecture={onStartArchitecture}
            />
        </div>
    );
}
